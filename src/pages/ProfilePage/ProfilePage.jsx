import { Container, Row, Col } from "react-bootstrap"
import AttendantsCard from "../../components/AttendantsCard/AttendantsCard"
import EventsList from "../../components/EventList/EventList"
import "./ProfilePage.css"
import LogInForm from "../../components/LogInForm/LogInForm"

const ProfilePage = () => {
    return (
        <div className="ProfilePage">
            <Container>
                <Row>
                    <Col xs="5">
                        <div className="attendantcard">

                        </div>
                        <hr />
                        <div><EventsList /></div>
                    </Col>
                    <Col style={{
                        backgroundColor: '#1c040468',
                        boxShadow: ' 5px 6px rgba(0, 0, 0, 0.1)',
                        border: '1px rgb(87, 18, 18) solid'
                    }}>

                        <div className="DescriptionDIV">

                        </div>

                    </Col>


                </Row>
            </Container>

        </div >

    )
}
export default ProfilePage