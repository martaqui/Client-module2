import { Navigate } from 'react-router-dom';
import EditEventForm from './../../components/EditEventform/EditEventForm';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth.context';

const EditEventFormPage = () => {
    const { loggedUser } = useContext(AuthContext)
    if (!loggedUser) {
        return <Navigate to={'/fish'} />
    }
    return (
        <div className="EditEventForm">
            <h1 style={{ margin: '49px', color: 'white' }}>EDITAR EVENTO</h1>
            <EditEventForm />
        </div>
    );
};

export default EditEventFormPage;
