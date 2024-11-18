import "./Navigation.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import EventsGlobalFilter from "../EventsGlobalFilter/EventsGlobalFilter";
import { ICONIMG } from "../../consts/image-paths";
import { LiaDrupal, LiaCampgroundSolid, LiaBinocularsSolid } from "react-icons/lia";
import { motion } from "framer-motion";


const Navigation = () => {
    return (
        <div className="Navigation">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <Navbar className="bg-body-tertiary" expand="lg">

                    <Container>

                        <Navbar.Brand as={Link} to={`/`}>
                            <img src={ICONIMG} alt="icon" />
                        </Navbar.Brand>

                        <EventsGlobalFilter />

                        <Navbar.Toggle aria-controls="navbar-nav" />

                        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                            <Nav.Link as={Link} to={`/`}>Home  <LiaCampgroundSolid /></Nav.Link>
                            <Nav.Link as={Link} to={`/eventos`}>Events  <LiaBinocularsSolid /></Nav.Link>
                            <Nav.Link as={Link} to={`/perfil`}>Profile  <LiaDrupal /></Nav.Link>
                        </Navbar.Collapse>


                    </Container>

                </Navbar>
            </motion.div>
        </div>
    );
};

export default Navigation;
