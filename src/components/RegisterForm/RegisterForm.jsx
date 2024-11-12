import { useState } from "react"

const RegisterForm = () => {

    const [registerData, setRegisterData] = useState({
        id: '',
        eventid: '',
        name: '',
        lastName: '',
        birth: '',
        email: '',
        premium: '',
        dni: '',
        avatar: '',

    })
    return (
        <div className="RegisterForm">

        </div>
    )
}