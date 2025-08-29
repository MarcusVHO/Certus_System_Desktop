import { Outlet } from "react-router-dom";
import HeaderApp from "./components/header";
import SidebarApp from "./components/sidebar";
import { ContextProvider } from "./hooks/Context.jsx";

export default function Layout() {
 
  return (
    <section className=" h-screen flex flex-col">
      <ContextProvider>
        {/*---------------------------- fundo da dhl --------------------------------*/}
        <div className="absolute inset-0 bg-yellow-500 flex justify-center items-center">
          <img src="/assets/DHL_icon.png" alt="" className="w-[100vh]" />
        </div>

        {/*-------------------------- overlay branco  -------------------------------*/}
        <div className="relative flex-1 z-10 bg-white/90 flex flex-col">
          <HeaderApp />

          <div className="flex flex-1 overflow-hidden">
            <SidebarApp />
              {/* Aqui é onde as rotas filhas vão renderizar */}

              <div className="flex-1 flex flex-col overflow-y-auto">
                <Outlet />
            </div>
          </div>
        </div>
      </ContextProvider>
    </section>
  );
}
