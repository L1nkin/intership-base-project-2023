import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Service } from "@shared/api/types"

export type AppBottomTabParamList = {
    Main: undefined,
    Payments: undefined,
    ATMs: undefined,
    Profile: undefined
}

export type MainScreenBottomTabProps = BottomTabScreenProps<AppBottomTabParamList, "Main">

export type PaymentsScreenBottomTabProps = BottomTabScreenProps<AppBottomTabParamList, "Payments">

export type ATMsScreenBottomTabProps = BottomTabScreenProps<AppBottomTabParamList, "ATMs">

export type ProfileScreenBottomTabProps = BottomTabScreenProps<AppBottomTabParamList, "Profile">


export type PaymentsStackParamList = {
    PaymentsList: { title: string },
    MobileNetwork: { services?: Service[], title: string },
    HousingCommunalService: { services?: Service[], title: string },
    Internet: { services?: Service[], title: string }
    Payment: { service: Service }
}

export type PaymentsListScreenStackProps = NativeStackScreenProps<PaymentsStackParamList, 'PaymentsList'>
export type MobileNetworkScreenStackProps = NativeStackScreenProps<PaymentsStackParamList, 'MobileNetwork'>
export type HousingCommunalServiceScreenStackProps = NativeStackScreenProps<PaymentsStackParamList, 'HousingCommunalService'>
export type InternetScreenStackProps = NativeStackScreenProps<PaymentsStackParamList, 'Internet'>
export type PaymentScreenStackProps = NativeStackScreenProps<PaymentsStackParamList, 'Payment'>



