import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import List from "./List";


const MyList = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/crafts/${user.email}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [user]);
    return (
        <div>
            <div>
                <h1 className="text-xl md:text-2xl lg:text-4xl mb-9 text-center font-bold mt-9">
                    <span className="text-red-500 mb-6">My</span> Art & Craft</h1>
                <form >
                    <details  className="dropdown">
                        <summary className="m-1 btn">Customization</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Yes</a></li>
                            <li><a>No</a></li>
                        </ul>
                    </details>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto justify-center items-center">
                {
                    items.map(item => <List key={item._id} item={item} items={items} setItems={setItems}></List>)
                }
            </div>

        </div>
    );
};

export default MyList;