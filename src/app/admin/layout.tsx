import { ReactNode } from "react";
import CE_BtnLogout from "./$element/client.button.logout";
import { Icon } from "@iconify/react/dist/iconify.js";
import CE_Sidebar from "./$element/client.sidebar";
import CE_Navbar from "./$element/client.navbar";

export default function DashboardLayout({
    children
}: { children: ReactNode }) {
    return (
        <div className="w-screen max-h-screen flex items-start justify-start overflow-x-hidden">
            <CE_Sidebar />
            <div className="flex flex-col items-start justify-start w-full">
                <CE_Navbar />
                <div className="w-full p-5 overflow-x-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}