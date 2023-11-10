import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { PaymentServiceUI } from "@shared/api/payment-categories"

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
    ServicesList: { id: string, title: string },
    Payment: { service: PaymentServiceUI }
}

export type PaymentsListScreenStackProps = NativeStackScreenProps<PaymentsStackParamList, 'PaymentsList'>
export type ServicesListScreenStackProps = NativeStackScreenProps<PaymentsStackParamList, 'ServicesList'>
export type PaymentScreenStackProps = NativeStackScreenProps<PaymentsStackParamList, 'Payment'>



