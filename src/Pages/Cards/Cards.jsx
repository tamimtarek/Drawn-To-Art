import { Link } from "react-router-dom";
import { IoMdStarHalf } from "react-icons/io";
import { Slide } from "react-awesome-reveal";

const Cards = ({ craft }) => {
    const { itemName, photoURL, price, rating, subcategory, _id } = craft;
    return (


        <Slide>
            <div className="w-full h-full p-2 m-auto bg-white shadow-lg rounded-xl">
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
                        <p className="text-white flex items-center gap-2">
                            {rating}<IoMdStarHalf />
                        </p>
                        <Link to={`/details/${_id}`} type="button" className="btn outline-none text-base font-medium text-white bg-pink-500 hover:bg-pink-700">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </Slide>


    );
};

export default Cards;