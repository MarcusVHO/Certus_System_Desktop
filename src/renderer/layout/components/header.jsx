import { Server } from "lucide-react";
import { useContexto} from "../hooks/Context.jsx";

export default function HeaderApp() {
  const { loading } = useContexto();
  return (
    <header className="w-full h-[64px] flex items-center shadow-md  p-4 gap-5 border-b border-gray-200 text-gray-900 font-bold px-[56px]">
      <img
        src="/assets/DHL_icon.png"
        alt=""
        className="size-[60px] w-[100px] "
      />

      <h1 className="text-[18px] font-semibold">Certus System</h1>

      {/*Informacoes*/}

      <div className="ml-auto flex items-center gap-8">
        {loading ? <div id="spinner"></div> : <div></div>}

        <div className=" relative group">
          <Server />
          <span className="absolute left-1/2 top-full mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity">
            online
          </span>
        </div>
      </div>
    </header>
  );
}
