import './HomePage.css';
import img from './../../assets/img/FirstElm.png';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import * as IMAGE_PATH from '../../consts/image-paths';
import { motion } from 'framer-motion';
import { AuthContext } from "../../contexts/auth.context"
import { useContext, useEffect } from 'react';



const HomePage = () => {

    const { loggedUser } = useContext(AuthContext)

    const fadeInUp = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    const hoverEffect = {
        scale: 1.05,
        transition: { duration: 0.3 },
    };

    const carouselEffect = {
        hidden: { opacity: 0.8, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        transition: { duration: 1 },
    };



    const navigate = useNavigate();


    if (!loggedUser) {
        // navigate('/fish');
        return <Navigate to={'/fish'} />
    }



    return (
        <div className="HomePage">
            <motion.div
                variants={carouselEffect}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                <Carousel>
                    <Carousel.Item>
                        <motion.img
                            className="d-block w-100"
                            src={IMAGE_PATH.CAROUSEL1}
                            alt="FirstImg"
                            whileHover={{ scale: 1.02 }}
                        />
                        <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
                            <div className="carousel-overlay">
                                <motion.h3 whileHover={{ scale: 1.1 }}>Experiencias Únicas</motion.h3>
                                <Link to="/eventos" className="btn btn-outline-light">Explorar</Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <motion.img
                            className="d-block w-100"
                            src={IMAGE_PATH.CAROUSEL2}
                            alt="SecondImg"
                            whileHover={{ scale: 1.02 }}
                        />
                        <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
                            <div className="carousel-overlay">
                                <motion.h3 whileHover={{ scale: 1.1 }}>Encuentra tu Alma Gemela</motion.h3>
                                <Link to="/eventos" className="btn btn-outline-light">Descubre Más</Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <motion.img
                            className="d-block w-100"
                            src={IMAGE_PATH.CAROUSEL3}
                            alt="ThirdIMG"
                            whileHover={{ scale: 1.02 }}
                        />
                        <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
                            <div className="carousel-overlay">
                                <motion.h3 whileHover={{ scale: 1.1 }}>Disfruta con los Mejores</motion.h3>
                                <Link to="/eventos" className="btn btn-outline-light">Únete</Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </motion.div>

            <motion.div
                className="content"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1 }}
            >

                <motion.h1 whileHover={{ scale: 1.05 }}>Las mejores fiestas de techno</motion.h1>
                <div className="img-container">
                    <Link to="/eventos">
                        <motion.img
                            src={img}
                            alt="elements"
                            style={{ width: '500px' }}
                            whileHover={hoverEffect}
                        />
                    </Link>
                </div>
            </motion.div>



            <motion.section
                style={{ backgroundColor: 'black' }}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1 }}
            >
                <h2 style={{ color: 'white', fontSize: 45 }}>Encuentra tus eventos favoritos</h2>
                <article >
                    <Row className="mb-4 g-4">
                        {[
                            { img: IMAGE_PATH.CARDIMG1, title: "Fiesta techno en la Playa", desc: "¡Ven y disfruta de la mejor música electrónica junto al mar!" },
                            { img: IMAGE_PATH.CARDIMG2, title: "Concierto de Rock", desc: "Vibra con los mejores conciertos de rock en vivo." },
                            { img: IMAGE_PATH.CARDIMG3, title: "Festival de Techno", desc: "Los mejores DJs del mundo reunidos en una noche épica." },
                        ].map((card, i) => (
                            <Col key={i}>
                                <motion.div
                                    className="card custom-card"
                                    variants={fadeInUp}
                                    whileHover={hoverEffect}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 1 }}
                                >
                                    <Link to={"/eventos"} >
                                        <img src={card.img} alt={card.title} className="img-custom rounded-top" />
                                        <div className="card-body">
                                            <h4>{card.title}</h4>
                                            <p>{card.desc}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </article>
            </motion.section>
        </div>
    );
};

export default HomePage;
