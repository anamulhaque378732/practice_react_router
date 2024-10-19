import { useLoaderData } from "react-router-dom";


const MealDetails = () => {
    const mealAll = useLoaderData();
    const meal = mealAll.meals[0];
    console.log(meal.strIngredient14);
    
    return (
        <div className="p-4  my-10 rounded-lg bg-amber-100 ">
            <p className="text-xl font-medium text-black">{meal.strInstructions}</p>
            <div>
                <h2 className="text-center  text-4xl  text-black my-5 font-medium">Ingredient of meal !!</h2>
                <p className="text-black text-center font-medium text-2xl">{meal.strTags}</p>
                <div className="grid gap-4 mt-10  mx-auto md:grid-cols-2">
                    <div className=" border-red-100 grid md:grid-cols-2 rounded-2xl bg-lime-200 p-4">
                        <ol>
                            <li> 1.{meal.strIngredient1}</li>
                            <li> 2.{meal.strIngredient2}</li>
                            <li> 3.{meal.strIngredient3}</li>
                            <li> 4.{meal.strIngredient4}</li>
                        </ol>
                        <ol>
                            <li> 5.{meal.strIngredient5}</li>
                            <li> 6.{meal.strIngredient6}</li>
                            <li> 7.{meal.strIngredient7}</li>
                            <li> 8.{meal.strIngredient8}</li>
                        </ol>
                    </div>
                    <div className=" border-red-100 grid md:grid-cols-2 rounded-2xl bg-lime-200 p-4">
                        <ol>
                            <li> 9.{meal?.strIngredient9}</li>
                            <li> 10.{meal?.strIngredient10}</li>
                            <li> 11.{meal?.strIngredient11}</li>
                            <li> 12.{meal?.strIngredient12}</li>
                        </ol>
                        <ol>
                            <li> 13.{meal?.strIngredient13}</li>
                            <li> 14.{meal?.strIngredient14}</li>
                            <li> 15.{meal?.strIngredient15}</li>

                        </ol>
                    </div>
                </div>
                
            </div>


        </div>
    );
};

export default MealDetails;