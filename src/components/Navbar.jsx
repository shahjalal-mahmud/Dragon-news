import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div className="">{user && user.email}</div>
            <div className="nav space-x-3">
                <li className="btn rounded-none"><NavLink to="/">Home</NavLink></li>
                <li className="btn rounded-none"><NavLink to="about">About</NavLink></li>
                <li className="btn rounded-none"><NavLink to="career">Career</NavLink></li>
            </div>
            {
                user && user?.email ? <div className="login flex gap-2 items-center"> 
                <div className="">
                <img src={userIcon} alt="user-logo" />
                </div>
                <Link onClick={logOut} to="/auth/login" className="btn btn-neutral rounded-none px-10 font-semibold text-xl">Logout</Link>
            </div> : <div className="login flex gap-2 items-center"> 
                <div className="">
                <img src={userIcon} alt="user-logo" />
                </div>
                <Link to="/auth/login" className="btn btn-neutral rounded-none px-10 font-semibold text-xl">Login</Link>
            </div>
            }
            
        </div>
    );
};

export default Navbar;