import AttendantsForm from "../../components/AttendantsForm/AttendantsForm"
import { Col, Row, Container } from "react-bootstrap"
import { useContext } from "react"
import { useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth.context";

const NewAttendantPage = () => {
    const { loggedUser } = useContext(AuthContext)


    if (loggedUser) {
        return <Navigate to={'/fish'} />
    }

    return (
        <div className="NewAttendantPage">

            <Container >

                <Row>
                    <Col>
                        <h1>Confirma tu asistencia al evento aquí!</h1>
                    </Col>

                    <Col>
                        <h2>Disfruta compartiendo tus gustos!</h2>
                    </Col>
                </Row>

                <br />

                <AttendantsForm />

            </Container>
        </div>
    )
}
export default NewAttendantPage