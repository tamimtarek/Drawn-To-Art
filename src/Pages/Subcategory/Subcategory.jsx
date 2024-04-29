import { Link } from "react-router-dom";



const Subcategory = ({ category }) => {
  const { _id, image, rating, item_name, subcategory_name, short_description, price, customization, processing_time, stockStatus } = category;


  return (
    <Link to={`/category/${subcategory_name}`}>

      <div className="m-auto overflow-hidden rounded-lg shadow-lg h-90 cursor-pointer 0">
        <a href="#" className="block w-full h-full">
          <img alt="blog photo" src={image} className="object-cover h-80 w-full " />
          <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="font-medium text-indigo-500 text-md">
              {item_name}
            </p>
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              <span className="font-bold">Category:</span>  {subcategory_name}
            </p>
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              <span className="font-bold">Customization:</span>  {customization}
            </p>
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              <span className="font-bold">Processing Time:</span>  {processing_time}
            </p>
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              <span className="font-bold">Stock Status:</span>  {stockStatus}
            </p>
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              <span className="font-bold">Description:</span>  {short_description}
            </p>
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              <span className="font-bold">Price:</span>  {price}
            </p>
            <div className="flex flex-wrap items-center mt-4 justify-starts">

              <Link to={`/artCategory/${_id}`} className="text-xs font-bold btn mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                View Details
              </Link>
            </div>

          </div>
        </a>
      </div>

    </Link>
  );
};

export default Subcategory;