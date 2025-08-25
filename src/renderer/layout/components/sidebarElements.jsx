import { SidebarItem } from "flowbite-react";


export function ItemSidebarChildren({text, icon, func}) {





    return (
        <SidebarItem icon={icon} onClick={func} className={`px-7 h-[36px]  hover:bg-gray-500/20 rounded-md w-full`}>
             
             {text}

        </SidebarItem>
    )

}
export function ItemSidebar({text, icon, func}) {





    return (
        <SidebarItem icon={icon} onClick={func} className={`px-3 h-[46px]  hover:bg-gray-500/20 rounded-md w-full`}>
             
             {text}

        </SidebarItem>
    )

}