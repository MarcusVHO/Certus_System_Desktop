
import HeaderApp from "./components/header";
import SidebarApp from "./components/sidebar";



export default function Layout({children}) {
    return (
      <section className=" h-dvh">
        {/*---------------------------- fundo da dhl --------------------------------*/}
        <div className="absolute inset-0 bg-yellow-500 flex justify-center items-center">
          <img src="/assets/DHL_icon.png" alt="" className="w-[100vh]" />
        </div>

        {/*-------------------------- overlay branco  -------------------------------*/}
        <div className="relative h-full z-10 bg-white/90 flex flex-col">
         <HeaderApp />

          <div className="flex h-full flex-1 overflow-hidden">
            <SidebarApp />
            <div className="flex-1 overflow-y-auto">{children}</div>
          </div>
        </div>
      </section>
    );
}