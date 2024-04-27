import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const Root = () => {
    return (
        <div className="bg-base-300 lg:w-[1280px] mx-auto">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-316px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;