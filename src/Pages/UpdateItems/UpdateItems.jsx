import { useContext } from "react";
import{AuthContext} from "../../AuthProvider/AuthProvider"
import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateItems = () => {
    const {user} = useContext(AuthContext);
    const crafts = useLoaderData();
    const {id} = useParams();
   const craftdetails = crafts.find(data => data._id === id);
   const { itemName, photoURL, description,  price, processing_time, rating, stockStatus, subcategory, customization } = craftdetails;
    const handleUpdate = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const itemName = form.get("name");
        const subcategory = form.get("subcategory_Name");
        const photoURL = form.get("photoUrl");
        const price = form.get("price");
        const description = form.get("short_description");
        const rating = form.get("rating");
        const customization = form.get("customization");
        const processing_time = form.get("processing_time");
        const stockStatus = form.get("stockStatus");
        const username = user.displayName;
        const email = user.email;
        const allInput = { itemName, subcategory, photoURL, price, description, rating, customization, processing_time, stockStatus, username, email };
        fetch(`https://drawn-to-art-server.vercel.app/crafts/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(allInput),
        })
            .then(res => res.json())
            .then(data => { 
                console.log(data);
                if(data.modifiedCount){
                    Swal.fire({
                        title:"Success",
                        text: "Updated Successfully",
                        icon: "success",
                        confirmButtonText: "Cool"
                    })
                }

            })
    }

    return (
        <div className=" bg-base-200">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center  mb-8">
                <span className="text-red-600">Update</span> Your Craft</h2>
            <div className="hero-content">
                <div className=" w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="lg:flex w-full gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={itemName}  placeholder="Item Name" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Subcategory_Name</span>
                                </label>
                                <input type="text" defaultValue={subcategory} placeholder="subcategory_Name" name="subcategory_Name" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="lg:flex w-full gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="PhotoURL" defaultValue={photoURL} name="photoUrl" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" defaultValue={price} placeholder="Price" name="price" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="lg:flex w-full gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>
                                <input type="text" defaultValue={description} placeholder="Short description" name="short_description" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" defaultValue={rating} placeholder="Rating" name="rating" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="lg:flex w-full gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Customization</span>
                                </label>
                                <input type="text" defaultValue={customization} placeholder="Customization" name="customization" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Processing Time
                                    </span>
                                </label>
                                <input type="text" defaultValue={processing_time} placeholder="Processing Time" name="processing_time" className="input input-bordered w-full" required />
                            </div>
                        </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input type="text" defaultValue={stockStatus} placeholder="Stock Status" name="stockStatus" className="input input-bordered w-full" required />
                            </div> 
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Update Items</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItems;