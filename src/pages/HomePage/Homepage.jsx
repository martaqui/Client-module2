import './HomePage.css'
import img from './../../assets/img/FirstElm.png'
import { Carousel, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as IMAGE_PATH from '../../consts/image-paths'


const HomePage = () => {


    return (
        <div className="HomePage">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={IMAGE_PATH.CAROUSEL1}
                        alt="FirstImg"
                    />
                    <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
                        <div className="carousel-overlay">
                            <h3>Experiencias Únicas</h3>
                            <Link to="/eventos" className="btn btn-outline-light" >Explorar</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={IMAGE_PATH.CAROUSEL2}
                        alt="SecondImg"
                    />
                    <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
                        <div className="carousel-overlay">
                            <h3>Encuentra tu Alma Gemela</h3>
                            <Link to="/eventos" className="btn btn-outline-light">Descubre Más</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={IMAGE_PATH.CAROUSEL3}
                        alt="ThirdIMG"
                    />
                    <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
                        <div className="carousel-overlay">
                            <h3>Disfruta con los Mejores</h3>
                            <Link to="/eventos" className="btn btn-outline-light" >Únete</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <h1>Las mejores fiestas de techno</h1>
            <br />
            <div className="img-container">

                <Link to="/eventos">
                    <img
                        src={img}
                        alt="elemets"
                        style={{
                            width: '500px'
                        }}
                    />
                </Link>
            </div>
            <br />

            <br />
            <section style={{ backgroundColor: 'black' }}>
                <h2 style={{ color: 'white', fontSize: 45 }}>encuentra tus eventos favoritos</h2>
                <article>

                    <Row className="mb-4 Imgsbott">
                        <Col>
                            <div className="card">
                                <img src={IMAGE_PATH.CARDIMG1}
                                    alt="Fiesta 1" className="img-custom rounded-top" />
                                <div className="card-body">
                                    <h4>Fiesta techno en la Playa</h4>
                                    <p>¡Ven y disfruta de la mejor música electrónica junto al mar!</p>

                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <img src={IMAGE_PATH.CARDIMG2} alt="Fiesta 2" className="img-custom rounded-top" />
                                <div className="card-body">
                                    <h4>Concierto de Rock</h4>
                                    <p>Vibra con los mejores conciertos de rock en vivo.</p>

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-4 Imgsbott">
                        <Col>
                            <div className="card">
                                <img src={IMAGE_PATH.CARDIMG3} />
                                <div className="card-body">
                                    <h4>Festival de Techno</h4>
                                    <p>Los mejores DJs del mundo reunidos en una noche épica.</p>

                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <img src={IMAGE_PATH.CARDIMG4} alt="Fiesta 4" className="img-custom rounded-top" />
                                <div className="card-body">
                                    <h4>Fiesta VIP Exclusiva</h4>


                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <img src={IMAGE_PATH.CARDIMG5} alt="Fiesta 5" className="img-custom rounded-top" />
                                <div className="card-body">
                                    <h4>After Party en la Ciudad</h4>
                                    <p>La fiesta nunca para, ven al after party más cool.</p>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </article>
            </section>


        </div>
    )
}

export default HomePage
