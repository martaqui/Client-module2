import { Card } from 'react-bootstrap';

const EventCard = ({ cover, title, description }) => {

    return (
        <div className="EventCard">
            <Card className="bg-dark text-white">
                <Card.Img src={cover} alt="Card image" />
                <Card.ImgOverlay className="d-flex justify-content-center align-items-start">
                    <Card.Title className="text-center w-100">{title}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default EventCard;
