import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddCraft = () => {
    const { user } = useContext(AuthContext);
    const handleAddItem = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const itemName = form.get("itemName");
        const subcategory = form.get("subcategory_Name");
        const photoURL = form.get("photoURL");
        const price = form.get("price");
        const description = form.get("short_description");
        const rating = form.get("rating");
        const customization = form.get("customization");
        const processing_time = form.get("processing_time");
        const stockStatus = form.get("stockStatus");
        const username = user.displayName;
        const email = user.email;
        const allInput = { itemName, subcategory, photoURL, price, description, rating, customization, processing_time, stockStatus, username, email };
        console.log(allInput);
        fetch("http://localhost:5000/crafts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(allInput),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast.success("Craft Added Successfully")
            e.target.reset();
        })
        
    }
        return (
            <div className=" bg-base-200">
                <div className="hero-content">
                    <div className=" w-full shadow-2xl bg-base-100">
                        <h1 className="text-xl lg:text-5xl font-black text-center mt-5"><span className="text-red-500">Add</span> Your Product</h1>
                        <form onSubmit={handleAddItem} className="card-body">
                            <div className="lg:flex w-full gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Item Name</span>
                                    </label>
                                    <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Subcategory_Name</span>
                                    </label>
                                    <input type="text" placeholder="subcategory_Name" name="subcategory_Name" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="lg:flex w-full gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" placeholder="PhotoURL" name="photoURL" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className="lg:flex w-full gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Stock Status</span>
                                    </label>
                                    <input type="text" placeholder="Stock Status" name="stockStatus" className="input input-bordered w-full" required />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className="lg:flex w-full gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Customization</span>
                                    </label>
                                    <input type="text" placeholder="Customization" name="customization" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Processing Time</span>
                                    </label>
                                    <input type="text" placeholder="Processing Time" name="processing_time" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>
                                <input type="text" placeholder="Short description" name="short_description" className="input input-bordered w-full h-24" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        );
    };


    export default AddCraft;