import Footer from "./components/footer/Footer";
import Navbar from "./components/Navigation/Navigation"
import AppRoutes from "./routes/AppRoutes"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="classname">
      <Navbar />

      <AppRoutes />
      <Footer />
    </div>

  )

}

export default App
