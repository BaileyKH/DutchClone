import caramelPumpkin from '/src/assets/images/menu/categories/seasonal/CaramelPumpkinBruleeBreve.webp'
import cookieButter from '/src/assets/images/menu/categories/seasonal/CookieButterLatteIced.webp'
import caramelApple from '/src/assets/images/menu/categories/seasonal/CaramelAppleIcedRebel.webp'

export const seasonalDrinks = {
    title: "seasonal drinks",
    description: "find a new fave! check out what's new at dutch bros",
    items: [
        {
            id: 1,
            itemName: 'caramel pumpkin brûlée breve',
            itemDescription: 'Pumpkin & salted caramel w/ Soft Top™, pumpkin drizzle & raw sugar sprinkles',
            itemImage: caramelPumpkin,
            itemPath: 'caramel-pumpkin-brulee-breve'
        },
        {
            id: 2,
            itemName: 'Cookie Butter Latte',
            itemDescription: 'Cookie butter flavor and swirl w/ Soft Top™ and cookie butter drizzle',
            itemImage: cookieButter,
            itemPath: 'cookie-butter-latte'
        },
        {
            id: 3,
            itemName: 'Caramel Apple Rebel',
            itemDescription: 'Green apple & salted caramel energy drink w/ green apple & salted caramel float',
            itemImage: caramelApple,
            itemPath: 'caramel-apple-rebel'
        },
    ]

}