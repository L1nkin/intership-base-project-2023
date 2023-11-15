import { getFromStorage, saveInStorage } from "@shared/lib"
import axios from "axios"

export const authApi = axios.create({
    baseURL: "https://stoplight.io/mocks/kode-education/kode-bank/27774162/",
    headers: {
        Accept: "application/json",
    }
})


export const api = axios.create({
    baseURL: "https://stoplight.io/mocks/kode-education/kode-bank/27774161/",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export type EnterResponse = {
    accessToken: string
    refreshToken: string
}

export const refreshToken = async (): Promise<EnterResponse> => {
    const response = await authApi.post('api/auth/refresh', { refreshToken: getFromStorage('refreshToken') })
    return response.data
}

api.interceptors.request.use(
    (config) => {
        const token = getFromStorage("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const originalRequest = error.config;

        if (
            error.response.status === 401 &&
            getFromStorage("refreshToken")
        ) {
            refreshToken()
                .then((response) => {
                    saveInStorage('accessToken', response.accessToken)
                    originalRequest.headers.Authorization = `Bearer ${response.accessToken}`;
                    api(originalRequest)
                        .then((response) => {
                            return response.data;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        return Promise.reject(error);
    }
);

