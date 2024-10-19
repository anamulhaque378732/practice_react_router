import { useLoaderData } from "react-router-dom";


const CmtD = () => {

    const cmt = useLoaderData();
    const { body } = cmt
    return (
        <div className="my-10">
            <h2 className="text-xl font-medium text-center">{body}</h2>

        </div>
    );
};

export default CmtD;