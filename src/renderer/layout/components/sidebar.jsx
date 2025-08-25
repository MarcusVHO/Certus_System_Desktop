import {
  Sidebar,
  SidebarCollapse,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
} from "flowbite-react";
import {
  CalendarRange,
  FileText,
  Forklift,
  Home,
  Package2,
  Settings,
  ShieldUser,
  Table2,
  Truck,
  Users,
} from "lucide-react";
import { ItemSidebar, ItemSidebarChildren } from "./sidebarElements";

export default function SidebarApp() {
  return (
    <Sidebar className="w-[250px] py-3 h-full shadow-md text-left border-b border-gray-200 text-gray-900 font-bold flex flex-col justify-between">
      {/*------------------------ Logo da sidebar ---------------------------------*/}
      <SidebarLogo className=" h-[46px] px-4 w-full flex-shrink-0">
        <div className="flex items-center gap-1">
          <img src="assets/icon_app.png" className="w-10" />
          <h1 className="text-[18px] font-bold">Página Inicial</h1>
        </div>
      </SidebarLogo>
      {/*------------------------ Logo da sidebar ---------------------------------*/}

      {/*------------------------ Items da classe principal ---------------------------------*/}
      <SidebarItems className="w-full p-0 flex-1 overflow-y-auto flex flex-col  justify-between">
        {/*------------------------ Items da Principais ---------------------------------*/}
        <SidebarItemGroup className=" w-full p-0 py-5">
          <h3 className="px-3 py-2 text-sm text-gray-500">Principal</h3>

          {/*Pagina inicial*/}
          <ItemSidebar text="Página Inicial" icon={Home} func={null} />

          {/*Paginas pmd*/}
          <SidebarCollapse
            icon={Package2}
            label="PMD"
            className="px-3 h-[46px] gap-[8px] hover:bg-gray-500/20 rounded-md w-full"
          >
            <ItemSidebarChildren
              text="Programação"
              icon={CalendarRange}
              func={null}
            />

            <ItemSidebarChildren text="Separação" icon={Forklift} func={null} />

            <ItemSidebarChildren text="Relação" icon={Table2} func={null} />
          </SidebarCollapse>

          {/*Paginas recebimento*/}
          <SidebarCollapse
            icon={Truck}
            label="Recebimento"
            className="px-3 h-[46px] gap-[8px] hover:bg-gray-500/20 rounded-md w-full"
          >
            <ItemSidebarChildren
              text="Nota Fiscal"
              icon={FileText}
              func={null}
            />
          </SidebarCollapse>
        </SidebarItemGroup>
        {/*------------------------ Items da Principais ---------------------------------*/}

        {/*------------------------ Items da Administração ---------------------------------*/}
        <SidebarItemGroup>
          <h3 className="px-3 py-2 text-sm text-gray-500">Andministração</h3>
          <SidebarCollapse
            icon={ShieldUser}
            label="ADM"
            className="px-3 h-[46px] gap-[8px] hover:bg-gray-500/20 rounded-md w-full"
          >
            <ItemSidebarChildren text="Usuários" icon={Users} func={null} />
          </SidebarCollapse>
        </SidebarItemGroup>
        {/*------------------------ Items da Administração ---------------------------------*/}

        {/*------------------------ Items da Utilitários ---------------------------------*/}

        <div className="border-t border-gray-200 mt-2">
          <SidebarItems className="w-full p-0">
            <SidebarItemGroup>
              <ItemSidebar text="Configurações" icon={Settings} func={null} />
            </SidebarItemGroup>
          </SidebarItems>
        </div>

        {/*------------------------ Items da Utilitarios ---------------------------------*/}
      </SidebarItems>
      {/*------------------------ Items da classe principal ---------------------------------*/}

    </Sidebar>



  );
}
