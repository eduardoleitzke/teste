import React from "react";
import UserCard from "../components/UserCard";
import { useState, useContext } from "react"
import axios from "axios";

import { DataContext } from "../context/dataContext";
function Register(props) {
    const { registerMessage } = useContext(DataContext)
    const [registerMessageValue, setRegisterMessageValue] = registerMessage
    const [email, setEmail] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [nome, setNome] = useState("")
    const [password, setPassword] = useState("")
    const [cpf, setCpfValue] = useState("")
    // const [verification, setVerification] = useState(false)
    

    function emailValue(e) {

        setEmail(e.target.value)
    }

    function sobrenomeValue(e) {
        setSobrenome(e.target.value)
    }

    function nomeValue(e) {
        setNome(e.target.value)
    }

    function passwordValue(e) {
        setPassword(e.target.value)
    }

    function cpfValue(e) {
        setCpfValue(e.target.value)
    }


    function registerDate() {


      
        axios.post("http://localhost:3001/register", { email, nome, sobrenome, password, cpf }).then(res => {console.log(res)  
             setRegisterMessageValue(res.data.msg)
            //  setVerification(true)
        })
    
   
}
    return (

        <div className="container">
            {/* <div className={!verification ? "show_card" : "hide_card"}> */}
            <div className="show_card">
                <UserCard width={800}>
                    <input onChange={(e) => emailValue(e)} placeholder="email" type="email" />
                    <div className="nome_sobrenome">
                        <input onChange={(e) => nomeValue(e)} placeholder="nome" type="text" />
                        <input onChange={(e) => sobrenomeValue(e)} placeholder="Sobrenome" type="text" />
                    </div>
                    <input onChange={(e) => cpfValue(e)} placeholder="cpf" type="cpf" />
                    <input onChange={(e) => passwordValue(e)} placeholder="senha" type="password" />
                    <button onClick={(e) => registerDate(e)}>Cadastrar</button>
                    <p>{registerMessageValue}</p>
                </UserCard>
            </div>
            {/* <div className={verification ? "" : "hide_verification"}>
                <h4>Por Favor confirme seu email para finalizar se cadastro...Você será redirecionado em breve</h4>
                <p>Caso não seja redirecionado clique  <a href="http://localhost:3001/profile">Aqui</a></p>
            </div>  */}
        </div>
    )
}

export default Register