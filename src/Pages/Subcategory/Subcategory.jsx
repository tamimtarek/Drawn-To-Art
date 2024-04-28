import { Link } from "react-router-dom";



const Subcategory = ({category}) => {
    const {_id ,image, item_name, subcategory_name, short_description, price, customization, processing_time, stockStatus} = category;
    

    return (
        <Link to={`/category/${subcategory_name}`}>

            <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
                <div className="w-[80%] px-4 py-4 mt-6 bg-white rounded-lg shadow-lg  dark:bg-gray-800">
                    <img src={image} className=" p-4 m-auto h-60" alt="" />
                    <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                        {subcategory_name}
                    </h3>
                    <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                        {item_name}
                    </p>
                    <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                        {stockStatus}
                    </p>
                    <div className="flex-shrink-0">
                        <div className="flex items-center btn justify-center w-2/4 h-10 mx-auto text-white bg-indigo-500 rounded-md">
                            <Link to={`/artCategory/${_id}`}>View Details</Link>
                        </div>
                    </div>
                </div> 
            </div>

        </Link>
    );
};

export default Subcategory;