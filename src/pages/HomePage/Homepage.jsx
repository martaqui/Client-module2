import './HomePage.css'
import img from './../../assets/img/FirstElm.png'
import { Carousel, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const HomePage = () => {
    return (
        <div className="HomePage">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2019/10/15/03/16/black-and-white-4550471_1280.jpg"
                        alt="FirstImg"
                    />
                    <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
                        <div className="carousel-overlay">
                            <h3>Experiencias Únicas</h3>
                            <Link to="/eventos" className="btn btn-primary outline-light"  >Explorar</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/photos-premium/photo-noir-blanc-foule-lors-concert_662214-201160.jpg"
                        alt="SecondImg"
                    />
                    <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
                        <div className="carousel-overlay">
                            <h3>Encuentra tu Alma Gemela</h3>
                            <Link to="/eventos" className="btn btn-primary">Descubre Más</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://freerangestock.com/sample/44982/crowd-at-concert.jpg"
                        alt="ThirdIMG"
                    />
                    <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
                        <div className="carousel-overlay">
                            <h3>Disfruta con los Mejores</h3>
                            <Link to="/eventos" className="btn btn-primary">Únete</Link>
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

                    <Row className="mb-4">
                        <Col>
                            <div className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8jQaoNIKuzTFErH73ilq4n0-VXfOFr8AaCcXvsg_ptak65Dk43GhnOGZH-kyRcnjOZU&usqp=CAU" alt="Fiesta 1" className="img-custom rounded-top" />
                                <div className="card-body">
                                    <h4>Fiesta Electrónica en la Playa</h4>
                                    <p>¡Ven y disfruta de la mejor música electrónica junto al mar!</p>

                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <img src="https://i.pinimg.com/736x/b3/63/18/b36318b550f892c6612fcfc24bce8519.jpg" alt="Fiesta 2" className="img-custom rounded-top" />
                                <div className="card-body">
                                    <h4>Concierto de Rock</h4>
                                    <p>Vibra con los mejores conciertos de rock en vivo.</p>

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <div className="card">
                                <img src="https://media.istockphoto.com/id/92093747/photo/fans.jpg?s=612x612&w=0&k=20&c=71zIa7qnQYpcQ-PXp1c-LzXsCUiuS9udtCd5M3y6UBM=" alt="Fiesta 3" className="img-custom rounded-top" />
                                <div className="card-body">
                                    <h4>Festival de Techno</h4>
                                    <p>Los mejores DJs del mundo reunidos en una noche épica.</p>

                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <img src="https://media.istockphoto.com/id/498731269/photo/black-and-white-dj-and-crowd-in-nightclub.jpg?s=612x612&w=0&k=20&c=XE3Bo5LRCBLQhUmDy-A_wOAPJIL2_Gpj0ZFN04aO5Ro=" alt="Fiesta 4" className="img-custom rounded-top" />
                                <div className="card-body">
                                    <h4>Fiesta VIP Exclusiva</h4>


                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <img src="https://cdn.pixabay.com/photo/2019/10/22/16/02/black-and-white-4569096_1280.jpg" alt="Fiesta 5" className="img-custom rounded-top" />
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
