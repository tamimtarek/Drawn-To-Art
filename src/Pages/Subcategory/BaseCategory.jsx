

const BaseCategory = ({ cate }) => {
    const { image, item_name,rating, subcategory_name, short_description, price, customization, processing_time, stockStatus } = cate;


    return (
        <div>

            <div className="m-auto overflow-hidden rounded-lg shadow-lg h-90 w-[90%] cursor-pointer 0">
                <a href="#" className="block w-full h-full">
                    <img alt="blog photo" src={image} className="object-cover h-80 w-full " />
                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                        <p className="font-medium text-indigo-500 text-md">
                            {item_name}
                        </p>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                          <span>Category:</span>  {subcategory_name}
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                          <span>Customization:</span>  {customization}
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                          <span>Processing Time:</span>  {processing_time}
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                          <span>Stock Status:</span>  {stockStatus}
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                          Description:  {short_description}
                        </p>
                        <div className="flex flex-wrap items-center mt-4 justify-starts">
                            <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                               <span>price:</span> {price}
                            </div>
                            <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                               ratings: {rating}
                            </div>
                        </div>
                    </div>
                </a>
            </div>


        </div>
    );
};

export default BaseCategory;