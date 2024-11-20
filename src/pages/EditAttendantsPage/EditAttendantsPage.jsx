import { useContext } from "react"
import EditAttendantsForm from "../../components/EditAttendantsForm/EditAttendantsForm"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"

const EditAttendantsPage = () => {
    const { loggedUser } = useContext(AuthContext)
    if (!loggedUser) {
        return <Navigate to={'/fish'} />
    }
    return (
        <div className="EditAttendantsForm">
            <h1 style={{ margin: '10px', color: 'white' }}>EDITAR ASISTENTE</h1>

            <EditAttendantsForm />
        </div>
    )
}
export default EditAttendantsPage