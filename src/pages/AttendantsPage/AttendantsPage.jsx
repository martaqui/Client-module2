import { Container } from "react-bootstrap"
import AttendantsForm from "../../components/AttendantsForm/AttendantsForm"

const AttendantsPage = () => {
    return (
        <div className="AttendantsPage">
            <Container>
                <AttendantsForm />
            </Container>
        </div>
    )
}
export default AttendantsPage