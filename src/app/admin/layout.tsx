import { ReactNode } from "react";
import { menu } from "../constant/menu";

export default function DashboardLayout({
    children
}: { children: ReactNode }) {
    return (
        <div className="max-w-screen max-h-screen flex items-start justify-start">
            {/* Sidebar */}
            <section className="w-[350px] max-w-[350px] border-r h-screen ">
                <div className="h-[70px] w-full flex items-center justify-center font-bold border-b px-9">
                    AMORA DASHBOARD
                </div>
                <div className="flex flex-col items-start justify-start gap-4 px-9 pt-5">
                    {
                        menu.map((item, index) => {
                            return (
                                <div className="w-full cursor-pointer py-2 px-3 border rounded-md hover:bg-slate-200 " key={index}>{item.title}</div>
                            )
                        })
                    }

                </div>
            </section>
            <div className="flex flex-col items-start justify-start w-full">
                {/* Navbar  */}
                <section className="w-full h-[70px] border-b flex items-center justify-between px-4">
                    <div>
                        SHOW
                    </div>
                    <div>
                        Admin
                    </div>
                </section>
                <div className="w-full p-5">
                    {children}
                </div>
            </div>
        </div>
    )
}