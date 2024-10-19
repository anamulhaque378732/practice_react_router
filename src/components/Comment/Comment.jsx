
import { Link } from "react-router-dom";
const Comment = ({ comment }) => {
    const { id,name, email } = comment;
    return (
        <div className="bg-indigo-700 flex flex-col rounded-lg p-4 ">
            <div className="">
                <p>Name : {name}</p>
                <p> Email : {email}</p>
                <Link to={`/comment/${id}`}>  <button className="btn my-4 text-xl p-2">  Comment Details</button></Link>
            </div>
        </div>
    );
};

export default Comment;