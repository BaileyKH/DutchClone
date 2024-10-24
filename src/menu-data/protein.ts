import creamyVanilla from '/src/assets/images/menu/categories/protein/h_ice_brv_VANILLA_512.webp'
import saltedCaramel from '/src/assets/images/menu/categories/protein/h_ice_late_PROTEIN_LATTE_1500.png'
import saltedMocha from '/src/assets/images/menu/categories/protein/h_ice_PROTEIN_MOCHA_512.webp'

export const proteinCoffee = {
    title: "protein coffee",
    description: "Amp up your coffee! A good source of protein, high in calcium & no added sugars.",
    items: [
        {
            id: 1,
            itemName: 'creamy vanilla protein latte',
            itemDescription: 'Vanilla, Espresso & Protein Milk. A good source of protein, high in calcium, & no added sugars',
            itemImage: creamyVanilla,
            itemPath: 'caramel-pumpkin-brulee-breve'
        },
        {
            id: 2,
            itemName: 'salted caramel protein latte',
            itemDescription: 'Salted caramel, espresso, protein milk, & caramel drizzle. A good source of protein, high in calcium, & no added sugars.',
            itemImage: saltedCaramel,
            itemPath: 'caramel-pumpkin-brulee-breve'
        },
        {
            id: 3,
            itemName: 'salted caramel protein mocha',
            itemDescription: 'Salted caramel, espresso, chocolate, protein milk, & caramel drizzle. A good source of protein, high in calcium, & no added sugars.',
            itemImage: saltedMocha,
            itemPath: 'caramel-pumpkin-brulee-breve'
        },
        {
            id: 4,
            itemName: 'protein latte',
            itemDescription: 'Espresso, Protein Milk. A good source of protein, high in calcium, & no added sugars.',
            itemImage: creamyVanilla,
            itemPath: 'caramel-pumpkin-brulee-breve'
        },
    ]

}

