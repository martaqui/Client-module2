import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const AttendantsCard = ({ name, lastName, favouriteMusicGenre, genre, premium, avatar }) => {
    return (
        <div className="Attendantscard">
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={avatar} />
                    <Card.Body>
                        <Card.Title>{name}{lastName}</Card.Title>

                        <Link to={"/edit/attendants/form"}> <Button variant="primary">Editar Perfil</Button></Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default AttendantsCard