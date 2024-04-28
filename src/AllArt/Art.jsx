import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const Art = ({ craft }) => {
    const { itemName, price, rating, subcategory, _id, username, email } = craft;
    return (
        <table className="min-w-full leading-normal">
            <thead>
                <tr>
                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                        User
                    </th>
                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                        Item Name
                    </th>
                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                        Subcategory
                    </th>
                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                        Price
                    </th>
                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {username}
                            </p>
                        </div>
                    </td>
                    <td className="px-5 py-5 text-left text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {itemName}
                        </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {subcategory}
                        </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                            <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                            </span>
                            <span className="relative">
                                {price}
                            </span>
                        </span>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <Link to={`/details/${_id}`} className="text-indigo-600 hover:text-indigo-900">
                            View Details
                        </Link>
                    </td>
                </tr>

            </tbody>
        </table>
    );
};

export default Art;