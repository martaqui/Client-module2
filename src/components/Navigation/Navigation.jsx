import "./Navigation.css"
import { Link } from "react-router-dom"
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap"
import EventsGlobalFilter from "../EventsGlobalFilter/EventsGlobalFilter";
import { ICONIMG } from "../../consts/image-paths";
import { LiaBinocularsSolid } from "react-icons/lia";
import { LiaDrupal } from "react-icons/lia";
import { LiaCampgroundSolid } from "react-icons/lia";



const Navigation = () => {
    return (
        <div className="Navigation" >
            <Navbar className="bg-body-tertiary" >
                <Container >
                    <Navbar.Brand href="#home">
                        <img src={ICONIMG} alt="icon" />
                    </Navbar.Brand>

                    <EventsGlobalFilter />

                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link href="#home">Home  <LiaCampgroundSolid /></Nav.Link>
                        <Nav.Link href="#features">Events  <LiaBinocularsSolid /></Nav.Link>
                        <Nav.Link href="#pricing">Profile  <LiaDrupal /></Nav.Link>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div >
    )
}
export default Navigation