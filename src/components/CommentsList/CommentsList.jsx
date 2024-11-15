import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

const CommentsList = () => {
    const [comments, setComments] = useState([]);
    const { eventId } = useParams();
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchComments();
    }, [eventId]);

    const fetchComments = () => {
        axios
            .get(`${API_URL}/comments?eventId=${eventId}`)
            .then((response) => {
                setComments(response.data);
            })
            .catch((err) => console.log(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            eventId: eventId,
            name: name,
            message: message,
        };


        axios
            .post(`${API_URL}/comments`, newComment)
            .then((response) => {
                setComments([...comments, response.data]);
                setName("");
                setMessage("");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="Comments">

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Tu nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Comentario</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Escribe tu comentario"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar Comentario
                </Button>
            </Form>


            <h2>Comentarios para el evento {eventId}</h2>
            <Row>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            <strong>{comment.name}</strong>: {comment.message} <br />
                        </li>
                    ))}
                </ul>
            </Row>
        </div>
    );
};

export default CommentsList;

