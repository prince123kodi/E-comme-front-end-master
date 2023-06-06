import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    let [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/category")
            .then(async (ress) => {
                let record = await ress.json();
                if (record) {
                    setCategory(record);
                    console.log(record);
                }
                else {
                    console.log("record not found");
                }
            })
            .catch(err => {
                console.log("Something wrong");
            })
    }, setCategory)

    return (
        <div>
            <header>
                {/* Header Start */}
                <div className="header-area">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper">
                                {/* Logo */}
                                <div className="logo">
                                    <a href="index.html"><img src="../assets/img/logo/logo.png" alt /></a>
                                </div>
                                {/* Main-menu */}
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><NavLink to="/">Home</NavLink></li>                                            
                                            <li className="hot"><a href="#">Shop</a>
                                            <ul className="submenu">
                                                    {category && category.map((v, index) => {
                                                        return (
                                                            <li className="nav-item">
                                                                <NavLink className="nav-link" to={"/products/" + v.category}>{v.category}</NavLink>
                                                            </li>

                                                        )
                                                    })}
                                                </ul>
                                            </li>                                            
                                        </ul>
                                    </nav>
                                </div>
                                {/* Header Right */}
                                <div className="header-right main-menu ">
                                    <ul className="align-items-center">
                                        <li>
                                            <div className="nav-search search-switch">
                                                <span className="flaticon-search" />
                                            </div>
                                        </li>
                                        <li><a href="#"><span className="flaticon-user" /></a>
                                                <ul className="submenu d-block">
                                                    <li><NavLink to="/login">Login</NavLink></li>
                                                    <li><NavLink to="/register">Register</NavLink></li>
                                                    
                                                </ul>
                                            </li>
                                        <li><NavLink to="/add_cart"><span className="flaticon-shopping-cart" /></NavLink> </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Mobile Menu */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </header>
        </div>

    )
}

export default Header;