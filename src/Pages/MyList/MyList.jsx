import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import List from "./List";


const MyList = () => {
    const {user} = useContext(AuthContext);
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/crafts/${user.email}`)
        .then(res =>res.json())
        .then(data => setItems(data));
    },[user]);
    return (
        <div>
            <div>
                <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-bold mt-9"><span className="text-red-500 mb-6">My</span> Art & Craft</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center items-center">
                {
                    items.map(item => <List key={item._id} item={item} items={items} setItems={setItems}></List>)
                }
            </div>

        </div>
    );
};

export default MyList;