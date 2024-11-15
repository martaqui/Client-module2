import AttendantsForm from "../../components/AttendantsForm/AttendantsForm"

const NewAttendantPage = () => {
    return (
        <div className="NewAttendantPage">

            <Container >

                <Row>
                    <Col>
                        <h1>Confirma tu asistencia al evento aqui!</h1>
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