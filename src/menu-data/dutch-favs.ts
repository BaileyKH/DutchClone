import caramelPumpkin from '/src/assets/images/menu/categories/seasonal/CaramelPumpkinBruleeBreve.webp'
import goldenEagle from '/src/assets/images/menu/categories/dutchFaves/breve_golden_eagle_iced.webp'
import caramelizer from '/src/assets/images/menu/categories/dutchFaves/Iced_Caramelizer_HERO.png'
import annihilator from '/src/assets/images/menu/categories/dutchFaves/Iced_Annihilator_HERO.png'
import kicker from '/src/assets/images/menu/categories/dutchFaves/Iced_Kicker_HERO.png'
import cocomo from '/src/assets/images/menu/categories/dutchFaves/Iced_Cocomo_HERO.png'
import doubleTort from '/src/assets/images/menu/categories/dutchFaves/Iced_Double_Torture_HERO.png'
import nineOneOne from '/src/assets/images/menu/categories/dutchFaves/Iced_911_HERO.png'

export const dutchFavorites = {
    title: "dutch faves",
    description: "Where it all began—fan favorites, guaranteed to satisfy.",
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
            itemName: 'golden eagle',
            itemDescription: 'Vanilla & Caramel Breve w/ Caramel Drizzle',
            itemImage: goldenEagle,
            itemPath: 'cookie-butter-latte'
        },
        {
            id: 3,
            itemName: 'caramelizer',
            itemDescription: 'Caramel Mocha',
            itemImage: caramelizer,
            itemPath: 'caramel-apple-rebel'
        },
        {
            id: 4,
            itemName: 'annihilator',
            itemDescription: 'Chocolate Macadamia Nut Breve',
            itemImage: annihilator,
            itemPath: 'caramel-apple-rebel'
        },
        {
            id: 5,
            itemName: 'kicker',
            itemDescription: 'Irish Cream Breve',
            itemImage: kicker,
            itemPath: 'caramel-apple-rebel'
        },
        {
            id: 6,
            itemName: 'cocomo',
            itemDescription: 'Coconut Mocha',
            itemImage: cocomo,
            itemPath: 'caramel-apple-rebel'
        },
        {
            id: 7,
            itemName: 'double torture',
            itemDescription: 'Extra Double Shot Vanilla Mocha',
            itemImage: doubleTort,
            itemPath: 'caramel-apple-rebel'
        },
        {
            id: 8,
            itemName: '9-1-1',
            itemDescription: '6-shot Irish Cream Breve',
            itemImage: nineOneOne,
            itemPath: 'caramel-apple-rebel'
        },
    ]

}