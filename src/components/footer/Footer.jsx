import "./Footer.css";
import iconImg from "./../../assets/img/iconPag2.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="Footer">
            <footer className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid justify-content-between">

                    <Link to={"/"}><li></li></Link>
                    <Link to={"/eventos"}><li>derechos reservados</li></Link>
                    <Link to={"/perfil"}><li>Profile</li></Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
