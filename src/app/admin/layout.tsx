import { ReactNode } from "react";
import { menu } from "../constant/menu";
import ACT_LOGOUT from "./$action/action.logout";
import CE_BtnLogout from "./$element/client.button.logout";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function DashboardLayout({
    children
}: { children: ReactNode }) {
    return (
        <div className="w-screen max-h-screen flex items-start justify-start overflow-x-hidden">
            {/* Sidebar */}
            <section className="w-[300px] min-w-[300px] max-w-[300px] border-r h-screen hidden lg:block ">
                <div className="h-[70px] w-full flex items-center justify-center font-bold border-b px-9">
                    AMORA DASHBOARD
                </div>
                <div className="flex flex-col items-start justify-start gap-4 px-9 pt-5">
                    {
                        menu.map((item, index) => {
                            return (
                                <Link className="w-full cursor-pointer py-2 px-3 border rounded-md hover:bg-slate-200 " key={index} href={item.path}>{item.title}</Link>
                            )
                        })
                    }

                </div>
            </section>
            <div className="flex flex-col items-start justify-start w-full">
                {/* Navbar  */}
                <section className="w-full h-[70px] border-b flex items-center justify-between px-4">
                    <div className="cursor-pointer">
                        <Icon fontSize={30} icon="mdi:hamburger-open" />
                    </div>
                    <CE_BtnLogout />
                </section>
                <div className="w-full p-5 overflow-x-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}