import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';

const LogInForm = () => {
    const navigate = useNavigate();
    const { setloggedUSer } = useContext(AuthContext)
    const [logInData, setLogInData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setLogInData({ ...logInData, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (logInData.email === "martaqui@gmail.com" && logInData.password === "popino") {
            logInAdmin()
        } else {
            alert('pafueraaaaaa')
        }
    }
    const logInAdmin = () => {
        const admin = {
            id: 1,
            email: "martaqui@gmail.com",
            password: "popino"
        }
        setloggedUSer(admin)
    }
    return (
        <div className="className">
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" value={logInData.email} onChange={handleInputChange} name="email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" value={logInData.password} onChange={handleInputChange} name="password" />
                    </Col>
                </Form.Group>



                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button
                            type="submit"
                            className=" btn btn-outline-light AttendantsButton"
                            onClick={() => navigate('/')}
                        >Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}
export default LogInForm