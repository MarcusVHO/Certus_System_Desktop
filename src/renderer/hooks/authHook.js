import { useState } from "react";
import api from "../services/api.js"
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";



//Autenticação de usuário 
export function useAuth() {
    const [loadingStatus, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    //funcao responsavel por logar usuário
    async function login(oneid, password) {
        setLoading(true)
        if(!oneid || !password) {
            return ({error: "Todos os campos são obrigatórios!"})
        }

        try { // Faz autehnticacao do usuário na api
            const userData = await api.post("/users/login", {
                oneid: oneid,
                password: password
            })

            if(userData.data.token) {
                localStorage.setItem("token", userData.data.token)
                navigate("/home")
                return ("Usuário logado") 
            }

        } catch(error) {
            console.log(error)
            setError(error)
            
        }finally {
            setLoading(false)
        }
    }
    async function logout() {
        try {
            setLoading(true)
            const token = localStorage.getItem("token")
            const user = jwtDecode(token)
            localStorage.removeItem("token")
            const result = await api.post("/users/logout", {
                id: user.id
            })
            console.log(result)
        } catch(error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return {loadingStatus, login, error, logout}
}





