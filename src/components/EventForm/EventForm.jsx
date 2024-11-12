import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const EventForm = () => {

    const [eventData, setMovieDate] = useState({

    })

    return (
        <div className="classname">
            <Container>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={8} controlId="formEventName">
                            <Form.Label>Nombre del evento</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>

                        <Form.Group as={Col} xs={2} controlId="formEventCapacity">
                            <Form.Label>Aforo</Form.Label>
                            <Form.Control type="number" required min={1} />
                        </Form.Group>

                        <Form.Group as={Col} xs={2} controlId="formEventPrice">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" required min={0} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} xs={8} controlId="formEventAgeRequirement">
                            <Form.Label>Requerimiento de Edad</Form.Label>
                            <Form.Control type="number" placeholder="Edad mínima (e.g., 18)" min={0} />
                        </Form.Group>

                        <Form.Group as={Col} xs={4} controlId="formEventVipReserved">
                            <Form.Label>Reservados VIP</Form.Label>
                            <Form.Select defaultValue="Seleccionar...">
                                <option>Disponible</option>
                                <option>No Disponible</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group controlId="formEventDescription">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows={3} required />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formEventLocation">
                        <Form.Label>Ubicación del Evento</Form.Label>
                        <Form.Control placeholder="1234 Calle Principal" required />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formEventDate">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formEventCity">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formEventZip">
                            <Form.Label>Código Postal</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formEventGenre">
                            <Form.Label>Género</Form.Label>
                            <Form.Select required>
                                <option>Techno</option>
                                <option>Reguetón</option>
                                <option>Electrónica</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formEventPolicy">
                        <Form.Check type="checkbox" label="Acepto los términos y condiciones" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default EventForm;
