import { Link } from "react-router-dom";
import img1 from "../../assets/img2.jpg"

const Cards = ({ craft }) => {
    const { itemName, photoURL, description, email, price, processing_time, rating, stockStatus, subcategory, username, _id } = craft;
    return (


        <div className="w-full h-full p-2 m-auto bg-white shadow-lg rounded-2xl">
            <img src={photoURL} alt="adidas" className=" p-4 m-auto h-60" />
            <div className="p-4 m-3 bg-[#1F2937] rounded-lg">
                <p className="text-xl font-bold text-white ">
                    {itemName}
                </p>
                <p className="text-xs text-gray-50">
                    {subcategory}
                </p>
                <div className="flex items-center justify-between ">
                    <p className="text-white">
                        {price}
                    </p>
                    <Link to={`/details/${_id}`} type="button" className="btn outline-none text-base font-medium text-white bg-pink-500 hover:bg-pink-700">
                        View Details
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default Cards;