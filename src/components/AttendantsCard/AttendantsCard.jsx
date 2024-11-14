import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaTrashAlt } from 'react-icons/fa';
import { RxMagicWand } from "react-icons/rx";
import { Link } from 'react-router-dom';

const AttendantsCard = ({ id, name, lastName, avatar, onDelete }) => {
    return (
        <div className="AttendantsCard">
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={avatar} alt={`${name} ${lastName}`} />
                    <Card.Body>
                        <Card.Title>{name} {lastName}</Card.Title>
                        <Button variant="danger" onClick={onDelete} style={{ marginLeft: '10px' }}>
                            <FaTrashAlt />
                        </Button>
                        <Link to={`/edit/attendant/${id}/form`} o><Button variant="danger" style={{ marginLeft: '10px' }}>
                            <RxMagicWand />
                        </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default AttendantsCard;
