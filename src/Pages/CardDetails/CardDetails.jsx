import { useLoaderData, useParams } from "react-router-dom";




const CardDetails = () => {
   const allData = useLoaderData();
   const {id} = useParams();
   const craftdetails = allData.find(data => data._id === id);
   const { itemName, photoURL, description, email, price, processing_time, rating, stockStatus, subcategory, username } = craftdetails;
    
    
    return (
        <div>
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-center m-8"><span className="text-red-500">Craft</span> Details</h1>
            <div className="flex flex-col lg:flex-row p-3 gap-6 lg:w-[1220px] mx-auto justify-center items-center ">
                <img src={photoURL} alt="" />
                <div className="space-y-7 text-lg">
                    <p><span className="text-[#1F2937] lg:text-3xl font-extrabold">Item Name:</span><span className="lg:text-3xl font-bold"> {itemName}</span></p>
                    <p><span className="text-[#1F2937] font-bold">Subcategory:</span><span> {subcategory}</span></p>
                    <p><span  className="text-[#1F2937] font-bold">Price:</span><span> {price}</span></p>
                    <p><span className="text-[#1F2937] font-bold">Ratings:</span><span> {rating}</span></p>
                    <p><span className="text-[#1F2937] font-bold">Processing Time:</span><span> {processing_time}</span></p>
                    <p><span className="text-[#1F2937] font-bold">Stock Status:</span><span> {stockStatus}</span></p>
                    <p><span className="text-[#1F2937] font-bold">Author:</span><span> {username}</span></p>
                    <p><span className="text-[#1F2937] font-bold">Author Email:</span><span> {email}</span></p>
                    <p><span className="text-[#1F2937] font-bold">Description:</span><span> {description}</span></p>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;