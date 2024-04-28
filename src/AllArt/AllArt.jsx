import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { Link } from "react-router-dom";


const AllArt = () => {
    const { crafts } = useContext(AuthContext);

    return (
        <div>
            <div>
                <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-bold mt-9"><span className="text-red-500">All</span> Art & Craft</h1>
            </div>

            <div className="container px-4 mx-auto sm:px-8">
                <div className="py-8">
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
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

                                    {
                                        crafts.map(craft => <tr key={craft._id}>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {craft.username}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-left text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {craft.itemName}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {craft.subcategory}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                                    </span>
                                                    <span className="relative">
                                                        {craft.price}
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <Link to={`/details/${craft._id}`} className="text-indigo-600 hover:text-indigo-900">
                                                    View Details
                                                </Link>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllArt;