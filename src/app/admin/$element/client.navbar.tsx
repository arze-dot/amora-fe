'use client'

import { Icon } from "@iconify/react/dist/iconify.js";
import CE_BtnLogout from "./client.button.logout";
import { emitter } from "@/app/$navigator/client.emitter";
import { E_Navigator } from "../$action/constant";

const CE_Navbar = () => {

    const showSidebar = () => {
        emitter.emit(E_Navigator.SHOW_SIDEBAR)
    }
    return (
        <section className="w-full h-[70px] border-b flex items-center justify-between lg:justify-end px-4">
            <div className="cursor-pointer block lg:hidden">
                <Icon fontSize={30} icon="mdi:hamburger-open" onClick={() => showSidebar()} />
            </div>
            <CE_BtnLogout />
        </section>
    )
}
export default CE_Navbar;