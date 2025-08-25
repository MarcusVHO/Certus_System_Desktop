import LoginForm from "./components/loginForm";

export default function Login() {
    return (
      <section className="h-dvh">
        {/*---------------------------- fundo da dhl --------------------------------*/}
        <div className="absolute inset-0 bg-yellow-500 flex justify-center items-center flex-col">
          <img src="/assets/DHL_icon.png" alt="" className="w-[100vh]" />
          <h1 className=" text-red-700 font-bold text-5xl uppercase tracking-tight px-4 py-2 inline-block">
            Nós movemos o mundo
          </h1>
        </div>

        {/*-------------------------- overlay branco  -------------------------------*/}
        <div className="relative h-full z-10 bg-white/60 flex flex-col items-center justify-center">
          <LoginForm />
        </div>
      </section>
    );
}