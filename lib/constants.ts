export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'SwiftStore'
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
export const SENDER_NAME = process.env.SENDER_NAME || 'SwiftStore'
export const SENDER_EMAIL = process.env.SENDER_EMAIL || 'swiftstore@gmail.com'

export const APP_SLOGAN =
process.env.NEXT_PUBLIC_APP_SLOGAN || 'Buy Swiftly.'
export const APP_DESCRIPTION =
process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
'SwiftStore is a platform that allows you to buy and sell items swiftly'

export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9)

export const APP_COPYRIGHT = process.env.NEXT_PUBLIC_APP_COPYRIGHT || `Copyright © 2025 ${APP_NAME}. All rights are reserved.`
export const FREE_SHIPPING_MIN_PRICE = 
Number(process.env.FREE_SHIPPING_MIN_PRICE || 350)

export const AVAILABLE_PAYMENT_METHODS = [
    {
        name: 'PayPal',
        commission: 0,
        isDefault:true,
    },
    {
        name: 'Cash on Delivery',
        commission: 0,
        isDefault:false,
    },

]

export const DEFAULT_PAYMENT_METHOD = 
process.env.DEFAULT_PAYMENT_METHOD || 'PayPal'

export const AVAILABLE_DELIVERY_DATES = [
    {
        name: 'Tomorrow',
        daysToDeliver: 1,
        shippingPrice: 150,
        freeShippingMinPrice: 0,
    },
    
        {
            name: 'Next 3 Days',
            daysToDeliver: 3,
            shippingPrice: 50,
            freeShippingMinPrice: 0,
        },
        {
            name: 'Next 5 Days',
            daysToDeliver: 5,
            shippingPrice: 20,
            freeShippingMinPrice: 350,
        },

]