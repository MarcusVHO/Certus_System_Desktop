import { Outlet } from "react-router-dom";
import HeaderApp from "./components/header";
import SidebarApp from "./components/sidebar";
import { ContextProvider } from "./hooks/Context.jsx";
export default function Layout() {
  

  return (
    <section className="h-screen flex flex-col">
      <ContextProvider>
        {/* fundo da DHL */}
        <div className="absolute inset-0 bg-yellow-500 flex justify-center items-center">
          <img src="/assets/DHL_icon.png" alt="" className="w-[100vh]" />
        </div>

        {/* overlay branco */}
        <div className="relative flex-1 z-10 bg-white/90 flex flex-col overflow-hidden">
          <HeaderApp />

          {/* Aqui é o container principal que divide sidebar e conteúdo */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar fixa com scroll independente */}
            <div className="w-64 h-full overflow-y-auto  shadow">
              <SidebarApp />
            </div>

            {/* Conteúdo principal com scroll independente */}
            <div className="flex-1 flex overflow-y-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </ContextProvider>
    </section>
  );
}
