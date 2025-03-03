export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'SwiftStore'
export const APP_SLOGAN =
process.env.NEXT_PUBLIC_APP_SLOGAN || 'Buy Swiftly.'
export const APP_DESCRIPTION =
process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
'SwiftStore is a platform that allows you to buy and sell items swiftly'

export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9)

export const APP_COPYRIGHT = process.env.NEXT_PUBLIC_APP_COPYRIGHT || `Copyright © 2025 ${APP_NAME}. All rights are reserved.`
export const FREE_SHIPPING_MIN_PRICE = 
Number(process.env.FREE_SHIPPING_MIN_PRICE || 350)
