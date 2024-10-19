import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="">
            <NavLink to='/'>  <button className="mr-20 text-xl p-2 btn">Home</button></NavLink>
            <NavLink to='/meals'>  <button className="btn text-xl p-2"
            >Meals</button></NavLink>
            <NavLink to='/Comments'>  <button className="btn text-xl p-2
            ml-20"> Comments</button></NavLink>

        </div>
    );
};

export default Header;