import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Art from "./Art";


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
                            
                            {
                                crafts.map(craft =><Art key={craft._id} craft={craft}></Art>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllArt;