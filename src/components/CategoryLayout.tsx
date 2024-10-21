import { useParams } from "react-router-dom";

import { seasonalDrinks } from "../menu-data/seasonal-drinks";

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
        seasonal: seasonalDrinks
    };

    const categoryData = category ? dataMap[category] : { title: 'Category Not Found', description: '', items: [] };

    return(
        <div>
            <h2>{categoryData.title}</h2>
            <p>{categoryData.description}</p>
            <div>
                {categoryData.items.map((individual) => (
                    <div>
                        <img src={individual.itemImage}/>
                        <p className="text-orange-600">{individual.itemName}</p>
                        <p className="text-orange-600">{individual.itemDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}