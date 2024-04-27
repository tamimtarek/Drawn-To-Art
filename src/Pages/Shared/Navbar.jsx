import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allArt">All Art & Craft</NavLink></li>
        <li><NavLink to="/addArtCraft">Add Art & Craft</NavLink></li>
        <li><NavLink to="/mylist">My Art List</NavLink></li>
    </>

    const handleLogout = e => {
        e.preventDefault();
        return logOut();
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="font-extrabold lg:text-3xl">DRAWN TO ART</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end z-10">
                {
                    user ? <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10">
                            {
                                user && <button><img src={user.photoURL} alt="" title={user.displayName} className="rounded-full" /></button>
                            }
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user && <Link className="btn" to="/login"><button onClick={handleLogout}>Log Out</button></Link>
                        }
                    </ul>
                </div> : <ul className="menu menu-horizontal px-1">
                       <li><NavLink to="/login">Login</NavLink></li>
                       <li><NavLink to="/register">Register</NavLink></li>
                    </ul>
                }
            </div>
        </div>
    );
};

export default Navbar;