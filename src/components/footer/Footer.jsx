import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-center py-4">
            <Container>
                <div className="social-buttons">
                    <Button
                        className="rounded-circle mx-2 p-3"
                        style={{ backgroundColor: '#000', borderColor: '#000' }}
                    >
                        <FontAwesomeIcon icon={faFacebookF} color="white" />
                    </Button>
                    <Button
                        className="rounded-circle mx-2 p-3"
                        style={{ backgroundColor: '#000', borderColor: '#000' }}

                    >
                        <FontAwesomeIcon icon={faInstagram} color="white" />
                    </Button>
                    <Button
                        className="rounded-circle mx-2 p-3"
                        style={{ backgroundColor: '#000', borderColor: '#000' }}
                    >
                        <FontAwesomeIcon icon={faTwitter} color="white" />
                    </Button>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
