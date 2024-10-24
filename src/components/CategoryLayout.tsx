import { Link, useParams } from "react-router-dom";

import backArrow from '/src/assets/images/menu/chevron-left.svg'

import { seasonalDrinks } from "../menu-data/seasonal-drinks";
import { dutchFavorites } from "../menu-data/dutch-favs";
import { proteinCoffee } from "../menu-data/protein";
import { blendedFreeze } from "../menu-data/blended";
import { classicCoffees } from "../menu-data/classics";
import { dutchSmoothie } from "../menu-data/smoothies";
import { snackFood } from "../menu-data/snacks";

interface CategoryData {
    title: string;
    description: string;
    items: {
        id: number;
        itemName: string;
        itemDescription: string;
        itemImage: string;
        itemPath: string;
    }[];
}

export const CategoryLayout = () => {

    const { category } = useParams<Record<string, string | undefined>>();

    const dataMap: { [key: string]: CategoryData } = {
        seasonal: seasonalDrinks,
        favorites: dutchFavorites,
        protein: proteinCoffee,
        blended: blendedFreeze,
        snacks: snackFood,
        classics: classicCoffees,
        smoothies: dutchSmoothie
    };

    const categoryData = category ? dataMap[category] : { title: 'Category Not Found', description: '', items: [] };

    return(
        <main>
            <div className="my-20 py-8">
                <div className="flex items-center px-2">
                    <img src={backArrow} className="w-[40px]"/>
                    <Link to='/menu' className="text-orange-600 text-lg" aria-label="redirect back to full menu">Full menu</Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="px-4 mb-10 text-center">
                        <h1 className="my-5 text-6xl text-orange-600 font-bold uppercase">{categoryData.title}</h1>
                        <h2 className="my-5 text-orange-600 text-lg uppercase">{categoryData.description ? categoryData.description : ''}</h2>
                    </div>
                    <div className="flex justify-center flex-wrap mx-auto max-w-[1440px]">
                        {categoryData.items.map(item => (
                            <Link key={item.id} to='/inprogress' className="flex flex-row-reverse justify-between items-center basis-auto border border-orange-600/25 rounded-lg m-4 py-5 pl-5 overflow-hidden w-full max-h-[196px] max-w-md min-w-[285px] hover:border-orange-600 hover:scale-110 transition-all ease-in-out" aria-label={`redirect to ${item.itemName}`}>
                                <img src={item.itemImage} className="w-full max-w-[190px] min-h-[190px]"/>
                                <div className="min-h-[154px] text-left w-full min-w-[112px]">
                                    <h3 className="text-xl font-bold text-orange-600 uppercase mt-5 mb-3">{item.itemName}</h3>
                                    <p className="text-orange-600 text-sm">{item.itemDescription}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

{/* <h2>{categoryData.title}</h2>
            <p>{categoryData.description}</p>
            <div>
                {categoryData.items.map((individual) => (
                    <div>
                        <img src={individual.itemImage}/>
                        <p className="text-orange-600">{individual.itemName}</p>
                        <p className="text-orange-600">{individual.itemDescription}</p>
                    </div>
                ))}
            </div> */}