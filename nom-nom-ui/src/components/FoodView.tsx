import React from 'react'; // we need this to make JSX compile
import { Food } from '../utils/DataService';

type FoodProps = {
    food: Food
}

type AllergenProps = {
    allergens: string[];
}

const Allergens = ({ allergens }: AllergenProps) =>  {
    const allergensList = allergens.map((allergenString, index) => <li key={index}>{allergenString}</li>);
    return <ul>{allergensList}</ul>;
}

export const FoodComponent = ({ food }: FoodProps) => <div>
    <ul>
        <li>Name: {food.name}</li>
        <li>Email: {food.email}</li>
        <li>Number: {food.number}</li>
        <li>Type: {food.type}</li>
        <li>Servings: {food.servings}</li>
        <li>address: {food.address}</li>
        <li>
            <Allergens allergens={food.allergens}></Allergens>
        </li>
    </ul>
</div>