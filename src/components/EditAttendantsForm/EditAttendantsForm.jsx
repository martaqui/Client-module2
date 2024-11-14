import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button, Col, Row } from 'react-bootstrap';


const API_URL = "http://localhost:5005";

const EditAttendantsForm = () => {

    const { attendantId } = useParams();
    const [attendantData, setAttendantData] = useState({})

    useEffect(() => {
        fetchAttendantData();
    }, [])

    const fetchAttendantData = () => {
        axios
            .get(`${API_URL}/attendants/${attendantId}`)
            .then(response => {
                setAttendantData(response.data)
            })
            .catch(err => console.log(err))
    }

    const handleAttendantSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="EditAttendantsForm">
            <Form>
                <Form onSubmit={handleAttendantSubmit} >
                    <Row className="mb-2">

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={attendantData.name} name="name" ></Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="name" value={attendantData.lastName} name="lastName" ></Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridGenreField">
                            <Form.Label>Género/s musicales favoritos</Form.Label>

                            <Button size='sm' variant='dark' >Añadir nuevo</Button>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={attendantData.email} name="email" ></Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control type="text" value={attendantData.birth} name="birth" ></Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Número de telefono</Form.Label>
                            <Form.Control type="number" value={attendantData.phone} name="phone" ></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={6} controlId="formGridState">
                            <Form.Label>Género</Form.Label>
                            <Form.Select
                                placeholder="Género"
                                value={attendantData.gender}

                                name={'gender'}
                            >
                                <option value="">Seleccionar género</option>
                                <option value="Mujer">Mujer</option>
                                <option value="Hombre">Hombre</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} xs={6} id="formGridCheckbox" className="d-flex align-items-center mt-3">
                            <Form.Check type="checkbox" label="Check me out if you are premium" />
                        </Form.Group>

                    </Row>
                    <Col> <Button variant="dark" className="btn btn-outline-light AttendantsButton" type="submit">
                        Actualizar perfil
                    </Button>
                    </Col>
                </Form>
            </Form>
        </div>
    )
}
export default EditAttendantsForm