import "./Navigation.css"

import iconImg from "./../../assets/img/iconPag2.png"
import { Link } from "react-router-dom"
const Navigation = () => {
    return (
        <div className="Navigation">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid justify-content-between">
                    <Link to={"/"}> <img src={iconImg} alt="iconImage" /></Link>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/eventos"}><li>Events</li></Link>
                    <Link to={"/perfil"}><li>Profile</li></Link>
                </div>
            </nav >
        </div >
    )
}
export default Navigation