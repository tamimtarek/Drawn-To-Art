import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(!user){
        return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRoute;