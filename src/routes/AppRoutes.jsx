import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/Homepage"
import EventCardPage from "../pages/EventCardPage/EventCardPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import EventList from "./../pages/EventlistPage/Eventlist"
import ProfilePage from "../pages/ProfilePage/ProfilePage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/eventos" element={<EventList />} />
            <Route path="/detalles" element={<EventCardPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
export default AppRoutes