import { Container, Row, Col } from "react-bootstrap"
import EventsList from "../../components/EventList/EventList"
import "./ProfilePage.css"
import { LiaDrupal } from "react-icons/lia";


const ProfilePage = () => {
    return (
        <div className="ProfilePage">
            <Container>
                <Row>
                    <Col xs="5">
                        <div className="attendantcard">
                            <h1><LiaDrupal /></h1>
                            <h4>Admins</h4>

                        </div>
                        <hr />
                        <div><EventsList /></div>
                    </Col>
                    <Col style={{
                        backgroundColor: '#1c040468',
                        boxShadow: ' 5px 6px rgba(0, 0, 0, 0.1)',
                        border: '1px rgb(87, 18, 18) solid'
                    }}>

                        <div className="DescriptionDIV">
                            <Row>
                                <Col xs>
                                    <h2>MARTA QUIROGA</h2>
                                    <h4>Administradora de PacoFiestas</h4>
                                </Col>
                                <Col>
                                    <h2>JOHN SEBASTIAN</h2>
                                    <h4>Administrador de PacoFiestas</h4>
                                </Col>
                            </Row>


                            <hr />
                            <h4>El desarrollo de esta página web ha sido un desafío enriquecedor. Desde el inicio, me enfrenté a la tarea de aprender y aplicar tecnologías nuevas como React, JavaScript y CSS. A medida que avanzaba, me encontré con varios obstáculos, que me pusieron a prueba y me llevaron a profundizar en la documentación y las mejores prácticas de desarrollo.

                                Uno de los mayores retos fue la gestión del estado y la interactividad de la página. Sin embargo, cada dificultad resuelta nos permitió mejorar nuestras habilidades y entender mejor cómo funciona el desarrollo web. Hubo momentos de frustración, especialmente cuando no lograbamos hacer que ciertas funcionalidades funcionaran, pero cada error fue una oportunidad de aprendizaje.

                                La satisfacción de ver la página funcionando al final ha sido increíble.

                            </h4>

                        </div>

                    </Col>


                </Row>
            </Container>

        </div >

    )
}
export default ProfilePage