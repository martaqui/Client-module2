import { Container, Col, Row } from "react-bootstrap"
import EventsList from "../../components/EventList/EventList"
import { motion } from "framer-motion"

const LoginPage = () => {
    return (
        <div className="LoginPage">
            <Container>
                <Row>
                    <Col xs="5">
                        <div><EventsList /></div>
                    </Col>

                    <Col style={{
                        backgroundColor: '#1c040468',
                        boxShadow: ' 5px 6px rgba(0, 0, 0, 0.1)',
                        border: '1px rgb(87, 18, 18) solid'
                    }}>

                        <motion.div className="DescriptionDIV"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>hola</h1>
                        </motion.div>
                    </Col>


                </Row>
            </Container>        </div >
    )
}

export default LoginPage