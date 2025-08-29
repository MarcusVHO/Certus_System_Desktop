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
  LogOut,
  Package2,
  Settings,
  ShieldUser,
  Table2,
  Truck,
  Users,
} from "lucide-react";
import { ItemSidebar, ItemSidebarChildren } from "./sidebarElements";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authHook";
import { useContexto } from "../hooks/Context";
import pranchetaIcon from "../../assets/prancheta.png"
import appIcon from "../../assets/icon_app.png"

// ...

export default function SidebarApp() {
  const { logout } = useAuth();
  const { setLoading } = useContexto();

  const navigate = useNavigate();

  //decodifica o token
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);

  //States
  const [admAllowed, setAdmAllowed] = useState();
  const [LocalImage, setImage] = useState();
  const [Local, setLocal] = useState("home");
  const [Title, setTitle] = useState();

  //splita o nome do usuário para uma melhor visualização
  let name = user.name;
  name = name.split(" ");

  //mostra apenas oque o usuário precisa ver
  useEffect(() => {
    if (user.role == "owner" || user.role == "admin") {
      setAdmAllowed(true);
    }
  }, [user.role]);

  //funcao de logout do sistema
  const uselogout = () => {
    setLoading(true);
    logout();
    navigate("/");
    setLoading(false);
  };
  




  useEffect(() => {
    switch(Local) {
      case "home":
        navigate("/home")
        setImage(appIcon)
        setTitle("Página Inicial");
        break
        
        case "program":
          navigate("/pmd/program")
          setImage(pranchetaIcon);
          setTitle("Programação")
        break
    };
  }, [Local]);


  return (
    <Sidebar className="w-[250px] py-3 h-full shadow-md text-left border-b border-gray-200 text-gray-900 font-bold flex flex-col ">
      {/*------------------------ Logo da sidebar ---------------------------------*/}
      <SidebarLogo className=" h-[46px] px-4 w-full flex-shrink-0">
        <div className="flex items-center gap-1">
          <img src={LocalImage} className="w-10" />
          <h1 className="text-[18px] font-bold">{Title}</h1>
        </div>
      </SidebarLogo>
      {/*------------------------ Logo da sidebar ---------------------------------*/}

      {/*------------------------ Items da classe principal ---------------------------------*/}
      <SidebarItems className="w-full p-0 flex-1 overflow-y-auto flex flex-col  justify-between">
        {/*------------------------ Items da Principais ---------------------------------*/}
        <SidebarItemGroup className=" w-full p-0 py-5">
          <h3 className="px-3 py-2 text-sm text-gray-500">Principal</h3>

          {/*Pagina inicial*/}
          <ItemSidebar
            text="Página Inicial"
            icon={Home}
            func={() => {
              setLocal("home");
            }}
            active={Local === "home"}
          />

          {/*Paginas pmd*/}
          <SidebarCollapse
            icon={Package2}
            label="PMD"
            className="px-3 h-[46px] font-semibold gap-[8px] hover:bg-gray-500/20 rounded-md w-full"
          >
            <ItemSidebarChildren
              text="Programação"
              icon={CalendarRange}
              func={() => {
                setLocal("program");
              }}
              active={Local === "program"}
            />

            <ItemSidebarChildren text="Separação" icon={Forklift} func={null} />

            <ItemSidebarChildren text="Relação" icon={Table2} func={null} />
          </SidebarCollapse>

          {/*Paginas recebimento*/}
          <SidebarCollapse
            icon={Truck}
            label="Recebimento"
            className="px-3 font-semibold h-[46px] gap-[8px] hover:bg-gray-500/20 rounded-md w-full"
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
        {admAllowed ? (
          <SidebarItemGroup>
            <h3 className="px-3 py-2 text-sm text-gray-500">Andministração</h3>
            <SidebarCollapse
              icon={ShieldUser}
              label="ADM"
              className="px-3 font-semibold h-[46px] gap-[8px] hover:bg-gray-500/20 rounded-md w-full"
            >
              <ItemSidebarChildren text="Usuários" icon={Users} func={null} />
            </SidebarCollapse>
          </SidebarItemGroup>
        ) : (
          <div></div>
        )}
        {/*------------------------ Items da Administração ---------------------------------*/}

        {/*------------------------ Items da Utilitários ---------------------------------*/}

        <div className="border-t border-gray-200 mt-2 mb-2">
          <SidebarItems className="w-full p-0">
            <SidebarItemGroup>
              <ItemSidebar text="Configurações" icon={Settings} func={null} />
            </SidebarItemGroup>
          </SidebarItems>
        </div>

        {/*------------------------ Items da Utilitarios ---------------------------------*/}

        {/*------------------------ Items do Perfil ---------------------------------*/}
        <SidebarItemGroup className="mt-auto">
          <ItemSidebar
            icon={LogOut}
            text={
              <p>
                {name[0]} {name[1]}
              </p>
            }
            func={uselogout}
          />
        </SidebarItemGroup>
        {/*------------------------ Items do Perfil ---------------------------------*/}
      </SidebarItems>
      {/*------------------------ Items da classe principal ---------------------------------*/}
    </Sidebar>
  );
}
