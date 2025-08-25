import { TextInput } from "flowbite-react";
import {Button} from "../../../components/ui/button"

export default function LoginForm() {
    return (
      <form className="w-auto min-w-[450px] h-auto shadow-2xl bg-white/90 shadow-gray-400/50 rounded-md p-4 gap-5 border border-gray-300 text-gray-900 font-bold px-[56px]">
        <div className="flex flex-col items-center w-full h-full text-[18px]">
          <h1>Bem Vindo</h1>
          <p className="text-gray-400">É muito bom ter você por aqui!!</p>

          <div className="w-full h-4/5 flex-col flex gap-10 py-10">
            <div className="flex flex-col">
              <label htmlFor="User">Usuário</label>
              <input
                id="User"
                type="text"
                placeholder="Digite seu usuário"
                className="h-12 px-4 rounded-lg shadow-sm border-b border-gray-200"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="User">Senha</label>
              <input
                id="User"
                type="text"
                placeholder="Digite sua senha"
                className="h-12 px-4 rounded-lg shadow-sm border-b border-gray-200"
              />
            </div>

            <Button>Entrar</Button>
          </div>
        </div>
      </form>
    );
}