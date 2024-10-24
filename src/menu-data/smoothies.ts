import strawberry from '/src/assets/images/menu/categories/smoothies/h_bln_shk_STRAWBERRY_512.webp'
import mango from '/src/assets/images/menu/categories/smoothies/h_bln_smo_MANGO_512.webp'
import greenApple from '/src/assets/images/menu/categories/smoothies/Blended_Smoothie_Green_Apple_HERO.webp'

export const dutchSmoothie = {
    title: "Smoothies",
    description: "Fruit smoothie blended with your fave flavors.",
    items: [
        {
            id: 1,
            itemName: 'strawberry',
            itemDescription: 'Strawberry',
            itemImage: strawberry,
            itemPath: 'caramel-pumpkin-brulee-breve'
        },
        {
            id: 2,
            itemName: 'mango',
            itemDescription: 'Mango',
            itemImage: mango,
            itemPath: 'caramel-pumpkin-brulee-breve'
        },
        {
            id: 3,
            itemName: 'green apple',
            itemDescription: 'Green Apple',
            itemImage: greenApple,
            itemPath: 'caramel-pumpkin-brulee-breve'
        },
    ]
}