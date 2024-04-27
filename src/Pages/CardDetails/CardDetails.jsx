import { useLoaderData, useParams } from "react-router-dom";




const CardDetails = () => {
   const allData = useLoaderData();
   const {id} = useParams();
   const craftdetails = allData.find(data => data._id === id);
   const { itemName, photoURL, description, email, price, processing_time, rating, stockStatus, subcategory, username } = craftdetails;
    
    
    return (
        <div>
            <div>
                <img src={photoURL} alt="" />
            </div>
        </div>
    );
};

export default CardDetails;