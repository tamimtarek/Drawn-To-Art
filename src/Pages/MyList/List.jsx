import { IoMdStarHalf } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const List = ({ item, items, setItems }) => {
    const { itemName, photoURL, price,  rating, stockStatus, customization, _id} = item;

    

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              fetch(`http://localhost:5000/crafts/${_id}`, {
                method: "DELETE",
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted',
                        'success'
                    )
                    const remainig = items.filter(it => it._id !== _id);
                    setItems(remainig);
                }
              })
            }
          });
    }

    return (

        <div className="flex items-center justify-center h-full w-96">
            <div className="w-full p-4">
                <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
                    <div className="prod-title">
                        <p className="text-2xl font-bold text-gray-900 uppercase">
                            {itemName}
                        </p>
                        <p className="text-sm text-gray-400 uppercase">
                        <span>Status:</span> {stockStatus}
                        </p>
                    </div>
                    <div className="prod-img">
                        <img src={photoURL} className="object-cover object-center w-full" />
                    </div>
                    <div className="grid gap-10 prod-info">
                        <div>
                            <ul className="flex flex-row items-center justify-between">
                                <li className="mr-4 last:mr-0">
                                    <span className=" p-1 transition duration-300 ease-in border-gray-500 rounded-lg flex items-center gap-1">
                                       <span>Ratings:</span> {rating}<IoMdStarHalf />
                                    </span>
                                </li>
                                <li className="mr-4 last:mr-0">
                                    <span className=" p-1 transition duration-300 ease-in border-gray-500 rounded-lg">
                                       <span>Customization:</span> {customization}
                                    </span>
                                </li>      
                            </ul>
                        </div>
                        <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                            <p className="text-xl font-bold">
                               {price}
                            </p>
                            <Link to={`/update/${_id}`}  className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                                Update
                            </Link>
                            <button onClick={()=>handleDelete(_id)} className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                                X
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default List;