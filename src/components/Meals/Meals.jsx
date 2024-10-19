import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {

    const mealsAll = useLoaderData();
    const meals = mealsAll.meals;

    return (
        <div> 
            <h1 className="text-3xl my-5 text-center font-semibold ">  All Meals Here  :  {meals.length}</h1>
            <div className="grid grid-cols-2     gap-4">
                {
                    meals.map(meal => <Meal meal={meal} key={meal.idMeal}></Meal>)
                }
            </div>
        </div>

    );
};

export default Meals;