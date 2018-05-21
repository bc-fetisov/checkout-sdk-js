import { FormField } from '../form';

export default interface Config {
    context: ContextConfig;
    customization: CustomizationConfig;
    storeConfig: StoreConfig;
}

export interface StoreConfig {
    cdnPath: string;
    checkoutSettings: CheckoutSettings;
    currency: Currency;
    formFields: FormFields;
    links: StoreLinks;
    paymentSettings: PaymentSettings;
    shopperConfig: ShopperConfig;
    storeProfile: StoreProfile;
    imageDirectory: string;
    isAngularDebuggingEnabled: boolean;
    shopperCurrency: ShopperCurrency;
}

export interface ShopperCurrency {
    code: string;
    symbolLocation: string;
    symbol: string;
    decimalPlaces: string;
    decimalSeparator: string;
    thousandsSeparator: string;
    exchangeRate: string;
}

export interface StoreProfile {
    orderEmail: string;
    shopPath: string;
    storeCountry: string;
    storeHash: string;
    storeId: string;
    storeName: string;
    storePhoneNumber: string;
    storeLanguage: string;
}

export interface ShopperConfig {
    defaultNewsletterSignup: boolean;
    passwordRequirements: PasswordRequirements;
    showNewsletterSignup: boolean;
}

export interface PasswordRequirements {
    alpha: string;
    numeric: string;
    minlength: number;
    error: string;
}

export interface PaymentSettings {
    bigpayBaseUrl: string;
    clientSidePaymentProviders: string[];
}

export interface StoreLinks {
    cartLink: string;
    checkoutLink: string;
    orderConfirmationLink: string;
}

export interface FormFields {
    shippingAddressFields: FormField[];
    billingAddressFields: FormField[];
}

export interface Currency {
    code: string;
    decimalPlaces: string;
    decimalSeparator: string;
    symbolLocation: string;
    symbol: string;
    thousandsSeparator: string;
}

export interface CheckoutSettings {
    enableOrderComments: boolean;
    enableTermsAndConditions: boolean;
    guestCheckoutEnabled: boolean;
    isCardVaultingEnabled: boolean;
    isPaymentRequestEnabled: boolean;
    isPaymentRequestCanMakePaymentEnabled: boolean;
    orderTermsAndConditions: string;
    orderTermsAndConditionsLink: string;
    orderTermsAndConditionsType: string;
    shippingQuoteFailedMessage: string;
    realtimeShippingProviders: string[];
    remoteCheckoutProviders: any[];
}

export interface CustomizationConfig {
    languageData: any[];
}

export interface ContextConfig {
    flashMessages: any[];
    payment: {
        token?: string;
    };
}
