import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const EventForm = () => {
    const [eventData, setEventDate] = useState({
        title: '',
        genres: '',
        capacity: 0,
        price: 0,
        date: '',
        location: '',
        zipcode: '',
        street: '',
        city: '',
        vip: false,
        description: '',
        minAge: ''
    });

    const handleEventChange = e => {
        const { name, value } = e.target;
        setEventDate({ ...eventData, [name]: value });
    };

    return (
        <div className="classname">
            <Container>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={8} controlId="formEventName">
                            <Form.Label>Nombre del evento</Form.Label>
                            <Form.Control type="text" value={eventData.title} onChange={handleEventChange} name="title" />
                        </Form.Group>

                        <Form.Group as={Col} xs={2} controlId="formEventCapacity">
                            <Form.Label>Aforo</Form.Label>
                            <Form.Control type="number" min={1} value={eventData.capacity} onChange={handleEventChange} name="capacity" />
                        </Form.Group>

                        <Form.Group as={Col} xs={2} controlId="formEventPrice">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" min={0} value={eventData.price} onChange={handleEventChange} name="price" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} xs={8} controlId="formEventAgeRequirement">
                            <Form.Label>Requerimiento de Edad</Form.Label>
                            <Form.Control type="number" placeholder="Edad mínima (e.g., 18)" min={0} value={eventData.minAge} onChange={handleEventChange} name="minAge" />
                        </Form.Group>

                        <Form.Group as={Col} xs={4} controlId="formEventVipReserved">
                            <Form.Label>Reservados VIP</Form.Label>
                            <Form.Select
                                name="vip"
                                value={eventData.vip ? "Disponible" : "No Disponible"}
                                onChange={(e) =>
                                    setEventDate({ ...eventData, vip: e.target.value === "Disponible" })
                                }
                            >
                                <option value="No Disponible">No Disponible</option>
                                <option value="Disponible">Disponible</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group controlId="formEventDescription">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows={3} required value={eventData.description} onChange={handleEventChange} name="description" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formEventLocation">
                        <Form.Label>Ubicación del Evento</Form.Label>
                        <Form.Control placeholder="1234 Calle Principal" required value={eventData.location} onChange={handleEventChange} name="location" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formEventDate">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" required value={eventData.date} onChange={handleEventChange} name="date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formEventCity">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control required value={eventData.city} onChange={handleEventChange} name="city" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formEventZip">
                            <Form.Label>Código Postal</Form.Label>
                            <Form.Control required value={eventData.zipcode} onChange={handleEventChange} name="zipcode" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formEventGenre">
                            <Form.Label>Género</Form.Label>
                            <Form.Select
                                required
                                name="genres"
                                value={eventData.genres}
                                onChange={handleEventChange}
                            >
                                <option value="">Selecciona un género</option>
                                <option value="Techno">Techno</option>
                                <option value="Reguetón">Reguetón</option>
                                <option value="Electrónica">Electrónica</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default EventForm;