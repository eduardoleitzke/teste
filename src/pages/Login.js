import React from "react";
import UserCard from "../components/UserCard";
import axios from "axios";
import { useState } from "react"
import {useNavigate} from "react-router-dom"
function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginMessage, setLoginMessage] = useState("")
    const [emailVerification, setEmailVerification] = useState(false)
    const navigate = useNavigate()
    function emailValue(e) {
        setEmail(e.target.value)
        console.log(email)
    }

    function passwordValue(e) {
        setPassword(e.target.value)
        console.log(password)
    }

    function sendLoginEmail(e) {
        e.preventDefault()
      
        axios.post("http://localhost:3001/login", { password, email })
        .then(res => {
            setLoginMessage(res.data.msg)
            setEmailVerification(res.data.user.verification)
            if(emailVerification === true){
                navigate("/profile")
            }
        }
        )
    }
    return (
        
        <div className="container">
            <p className={loginMessage === "Usuário/Senha Inválidos" ? "p_error" : "p_fine"}>{loginMessage}</p>
            <UserCard>
                    
                        <input onChange={(e) => emailValue(e)} placeholder="email" type="email" />
                        <input onChange={(e) => passwordValue(e)} placeholder="password" type="password" />
                        <button onClick={(e) => { sendLoginEmail(e) }}>Entrar</button>
                 
                
                <a href="/registrar">Registre-se</a>
            </UserCard>
        </div>
    )
}

export default Login