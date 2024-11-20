import React, { useState, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { DiLinux } from "react-icons/di";

import './AdminLogAlert.css';
import { AuthContext } from '../../contexts/auth.context';
function AdminLogAlert() {
    const [show, setShow] = useState(false);
    const { loggedUser, login, logout } = useContext(AuthContext);

    const handleToggleAdmin = () => {
        if (loggedUser) {
            logout();
        } else {
            login('logeao');
        }
        setShow(true);
    };

    return (
        <div className="AdminLogAlert">
            <Row>
                <Col md={6} className="mb-2">
                    <DiLinux onClick={handleToggleAdmin} className="mb-2" />

                    <Toast
                        onClose={() => setShow(false)}
                        show={show}
                        delay={3000}
                        autohide
                    >
                        <Toast.Body variant="dark">
                            <small>
                                {loggedUser ? "Saliste del modo admin" : "Ahora eres admin B)"}
                            </small>
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
    );
}

export default AdminLogAlert;
