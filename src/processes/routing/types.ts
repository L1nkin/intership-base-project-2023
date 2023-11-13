import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { PaymentServiceUI } from "@shared/api/payments"

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
    PaymentsList: undefined,
    ServicesList: { id: string, title: string },
    Payment: { service: PaymentServiceUI }
    SuccessOfOperation: { success: boolean, sum: number }
}

export type PaymentsListScreenStackProps = NativeStackScreenProps<PaymentsStackParamList, 'PaymentsList'>
export type ServicesListScreenStackProps = NativeStackScreenProps<PaymentsStackParamList, 'ServicesList'>
export type PaymentScreenStackProps = NativeStackScreenProps<PaymentsStackParamList, 'Payment'>
export type SuccessOfOperationScreenStackProps = NativeStackScreenProps<PaymentsStackParamList, 'SuccessOfOperation'>

export type AuthStackParamList = {
    PhoneNumber: undefined,
    OTPCode: undefined,
    Password: undefined,
    ErrorScreen: undefined,
    SuccessScreen: undefined
}

export type PhoneNumberScreenStackProps = NativeStackScreenProps<AuthStackParamList, 'PhoneNumber'>
export type OTPCodeScreenStackProps = NativeStackScreenProps<AuthStackParamList, 'OTPCode'>
export type PasswordScreenStackProps = NativeStackScreenProps<AuthStackParamList, 'Password'>
export type ErrorScreenStackProps = NativeStackScreenProps<AuthStackParamList, 'ErrorScreen'>
export type SuccessScreenStackProps = NativeStackScreenProps<AuthStackParamList, 'SuccessScreen'>


