import "./Navigation.css"
import iconImg from "./../../assets/img/iconPag2.png"
import { Link } from "react-router-dom"
import { Form, Container, Row, Col } from "react-bootstrap"
import { RxPerson } from "react-icons/rx";

const Navigation = () => {
    return (
        <div className="Navigation">
            <Container>
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">

                    <div className="container-fluid justify-content-between">
                        <Link to={"/"}>
                            <img src={iconImg} alt="iconImage" className="navbar-icon" />
                        </Link>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="navbar-search me-2"
                            aria-label="Search"
                        />
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