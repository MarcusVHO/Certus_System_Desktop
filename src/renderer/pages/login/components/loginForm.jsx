import { TextInput } from "flowbite-react";
import {Button} from "../../../components/ui/button"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LoginForm(props) {
    const [oneid, setOneid] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    async function handleLogin(e) {
      e.preventDefault();
      const res = await props.login(oneid, password)
      if(res) {
        console.log("Usuário logado")
        navigate("/home")
      }
    }

    //verifica tipo de erro e reage conforme ele 
    if (props.error.status == 401) {
      setMessage("Usúário ou Senha incorretos")
      props.error.status = null;
    } 
    return (
      <form
        className="w-auto min-w-[450px] h-auto shadow-2xl bg-white/90 shadow-gray-400/50 rounded-md p-4 gap-5 border border-gray-300 text-gray-900 font-bold px-[56px]"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col items-center w-full h-full text-[18px]">
          <h1>Bem Vindo</h1>
          {message ? <p className='text-red-500'>{message}</p> : <p className='text-gray-400'>É muito bom ter você por aqui!!</p>}

          <div className="w-full h-4/5 flex-col flex gap-10 py-10">
            <div className="flex flex-col">
              <label htmlFor="Oneid">Usuário</label>
              <input
                id="Oneid"
                type="text"
                placeholder="Digite seu usuário"
                className={message ? "h-12 px-4 rounded-lg shadow-sm border-b-2 border-red-500" : "h-12 px-4 rounded-lg shadow-sm border-b border-gray-200"}
                onChange={(e) => setOneid(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                className={message ? "h-12 px-4 rounded-lg shadow-sm border-b-2 border-red-500" : "h-12 px-4 rounded-lg shadow-sm border-b border-gray-200"}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit">
              {props.loading ? "Entrando...." : "Entrar"}
            </Button>
          </div>
        </div>
      </form>
    );
}