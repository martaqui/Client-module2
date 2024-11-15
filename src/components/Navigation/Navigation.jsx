import "./Navigation.css"
import iconImg from "./../../assets/img/iconPag2.png"
import { Link } from "react-router-dom"
import { Form, Container, Row, Col } from "react-bootstrap"
import { RxPerson } from "react-icons/rx";
import EvenstsGlobalFilter from "../EventsGlobalFilter/EventsGlobalFilter";

const Navigation = () => {
    return (
        <div className="Navigation">
            <Container>
                {/* TODO */}
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">

                    <div className="container-fluid justify-content-between">
                        <Link to={"/"}>
                            <img src={iconImg} alt="iconImage" className="navbar-icon" />
                        </Link>

                        <EvenstsGlobalFilter />

                        <Row>
                            <Col xs="5">
                                <Link to={"/"}><li>Home</li></Link>
                            </Col>
                            <Col xs="5">
                                <Link to={"/eventos"}><li>Events</li></Link>
                            </Col>
                            <Col xs="10">
                                <Link to={"/"}><li><RxPerson /></li></Link>
                            </Col>
                        </Row>
                    </div>
                </nav >
            </Container>
        </div >
    )
}
export default Navigation