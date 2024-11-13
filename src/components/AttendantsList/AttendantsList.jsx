import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AttendantsCard from "../AttendantsCard/AttendantsCard"
import { Col, Row } from "react-bootstrap"
const API_URL = "http://localhost:5005"

const AttendantsList = () => {

    const [attendants, setAttendants] = useState([])

    const { eventId } = useParams()

    useEffect(() => {
        fetchAttendantsList()
    }, [])

    const fetchAttendantsList = () => {
        axios
            .get(`${API_URL}/attendants?eventId=${eventId}`)
            .then(response => setAttendants(response.data))
            .catch(err => console.log(err))
    }

    return (

        <div className="AttendantsList">
            <Row>
                {
                    attendants.map(elm => {
                        return (
                            <Col key={elm.id}>
                                <AttendantsCard {...elm} />
                            </Col>
                        )
                    })
                }
            </Row>

        </div>
    )
}
export default AttendantsList