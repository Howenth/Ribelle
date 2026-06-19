import { NavLink } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import logo from "../assets/logo.svg";
import { useState } from "react";

function Navbar() {
    const [bag,setBag] = useState(false)
  return (
    <nav className="nav">
        <div className="nav-container">
            <div className="nav-item">
                <NavLink className="content-logo" to="/Home">
                    <img className="Logo" src={logo} alt="" />
                    <p className="text-logo">City Threads</p>
                </NavLink>
            </div>
            <div className="nav-item-1">
                <NavLink className="text-logo-2" to="/Home">
                Home
            </NavLink>

            <NavLink className="text-logo-2" to="/Shop">
                Shop
            </NavLink>

            <NavLink className="text-logo-2" to="/About">
                Our story
            </NavLink>
            </div>
            <div className="nav-item-2">
                <div>
                    <TbSearch className="icon-nav" />
                </div>
                <div>
                    <FiUser />
                </div>
                <div className="bag" onClick={()=>setBag(!bag)}>
                    <LuShoppingBag />
                    <div className={`bag-fo ${bag ? "bag-fo" : "bag-hidden"}`}>
                        <div>a</div>
                        <span className="bag-count">Total: <span>0</span></span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;