import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
    const comments = useLoaderData()
    return (
        <div className="mx-10 text-center my-10">
            <h2 className="text-center text-xl">  Comments :  {comments.length}</h2>
            <h className="text-3xl  text-center   font-semibold"> This is comment Section</h>
            <div className=" grid gap-4  md:grid-cols-5">

                {
                    comments.map(comment => <Comment comment={comment} key={comment.id}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;