import { Server } from "lucide-react";


export default function HeaderApp() {
    return (
      <header className="w-full h-[64px] flex items-center shadow-md  p-4 gap-5 border-b border-gray-200 text-gray-900 font-bold px-[56px]">
        <img
          src="/assets/DHL_icon.png"
          alt=""
          className="size-[60px] w-[100px] "
        />

        <h1 className="text-[18px] font-semibold">Certus System</h1>

        {/*Informacoes*/}
        <h3 className="ml-auto">Marcus Vinicius Hilário de Oliveira</h3>

        <div className="ml-auto relative group">
          <Server />

          <span 
          className="absolute left-1/2 top-full mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity"
          >
            online
          </span>
        </div>
      </header>
    );
}