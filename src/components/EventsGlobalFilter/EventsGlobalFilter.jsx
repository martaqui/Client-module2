import axios from 'axios'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { TiChevronRight, TiCompass } from "react-icons/ti";
import ListGroup from 'react-bootstrap/ListGroup';


const API_URL = "http://localhost:5005"

const EventsGlobalFilter = () => {
    const [eventFilter, setEventFilter] = useState('')
    const [filteredResult, setFilteredResult] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        const value = e.target.value
        setEventFilter(value)

        setError(null)
        setFilteredResult([])

        if (value === '') return

        setLoading(true)
        axios
            .get(`${API_URL}/events`, { params: { title_like: value } })
            .then((response) => {
                setFilteredResult(response.data)
            })
            .catch((err) => {
                setError('Hubo un error al cargar los eventos.')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const resetSearchs = () => {
        setEventFilter('');
        setFilteredResult([]);
    }

    return (
        <div className="EventsGlobalFilter">

            <Form.Control
                type="text"
                placeholder="busqueda"
                className="mr-sm-2"
                value={eventFilter}
                onChange={handleChange}
            />

            {isLoading && <p>  <TiCompass /></p>}

            {error && <p style={{ color: 'red' }}>{error}</p>}


            {filteredResult.length > 0 ? (
                filteredResult.map((event) => (

                    <ListGroup.Item action variant="secondary">
                        <Link onClick={resetSearchs} to={`/eventos/detalles/${event.id}`}><TiChevronRight />{event.title}</Link>
                    </ListGroup.Item>
                ))
            ) : (
                !isLoading && eventFilter && <p>Este evento no existe</p>
            )}

        </div>
    )
}

export default EventsGlobalFilter
