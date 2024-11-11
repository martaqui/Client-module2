import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap"


const Navigation = () => {
    return (
        <div className="classname">
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/profile">Mi perfil</Nav.Link>
                            <NavDropdown title="Eventos" id="navbarScrollingDropdown">

                                <NavDropdown.Item href="#action4">
                                    Añadir eventos
                                </NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item href="/eventos">
                                    Ver eventos
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Buscar eventos"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navigation