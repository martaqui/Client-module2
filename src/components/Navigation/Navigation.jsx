import "./Navigation.css"
import iconImg from "./../../assets/img/iconPag2.png"
import { Link } from "react-router-dom"
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap"
import { RxPerson } from "react-icons/rx";
import EvenstsGlobalFilter from "../EventsGlobalFilter/EventsGlobalFilter";

const Navigation = () => {
    return (
        <div className="Navigation">
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}
export default Navigation