import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/Homepage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import EventsPage from "../pages/EventsPage/EventsPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import EventDetailsPage from "../pages/EventDetailsPage/EventDetailsPage"
import FormUserPage from "../pages/FormUser/FormUserPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/eventos" element={<EventsPage />} />
            <Route path="/eventos/detalles/:eventId" element={<EventDetailsPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/:eventId/perfil/registro" element={<FormUserPage />} />


            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
export default AppRoutes