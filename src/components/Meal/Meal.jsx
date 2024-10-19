import { Link } from "react-router-dom";
const Meal = ({ meal }) => {
    const { idMeal, strMeal, strCategory, strArea, strMealThumb
    } = meal;

    return (
        <div className=" bg-cyan-800 rounded-xl p-4 m-4 text-center text-xl font-medium">
            <div className=""> <img className="md:w-96 mx-auto mb-4 rounded-md" src={strMealThumb} alt="" /></div>
            <h2> Id : {idMeal}</h2>
            <p> Name : {strMeal}</p>
            <p> Item : {strCategory}</p>
            <p> Country : {strArea}</p>
            <Link to={`/meal/${idMeal}`}><button className="btn text-xl mt-4"> Meal Details</button></Link>
        </div>
    );
};

export default Meal;