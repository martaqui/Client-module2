import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "../pages/HomePage/Homepage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import EventsPage from "../pages/EventsPage/EventsPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import EventDetailsPage from "../pages/EventDetailsPage/EventDetailsPage"
import NewAttendantPage from "../pages/NewAttendantPage/NewAttendantPage"
import CreateEventPage from "../pages/CreateEventsPage/CreateEventsPage"
import EditAttendantsPage from "../pages/EditAttendantsPage/EditAttendantsPage"
import EditEventFormPage from "../pages/EditEventFormPage/EditEventFormPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import NopePage from "../pages/nopeMrfishPage/NopePage"
import { AuthContext } from "../contexts/auth.context"
import { useContext } from "react"


const AppRoutes = () => {
    const { loggedUser } = useContext(AuthContext);
    return (

        <Routes>
            <Route path="/" element={loggedUser ? <Navigate to="/eventos" /> : <LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/eventos" element={<EventsPage />} />
            <Route path="/eventos/detalles/:eventId" element={loggedUser ? <EventDetailsPage /> : <NopePage />} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/evento/:eventId/registro" element={<NewAttendantPage />} />
            <Route path="/crear/evento" element={<CreateEventPage />} />
            <Route path="/editar/:eventId/evento" element={<EditEventFormPage />} />
            <Route path="/editar/asistente/:id" element={<EditAttendantsPage />} />
            <Route path="/evento/:id/editar" element={<EditEventFormPage />} />ç
            <Route path="/fish" element={<NopePage />} />


            <Route path="*" element={<NotFoundPage />} />
        </Routes>

    )
}
export default AppRoutes