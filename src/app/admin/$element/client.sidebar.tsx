'use client'

import { emitter } from "@/app/$navigator/client.emitter";
import { menu } from "@/app/constant/menu";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { E_Navigator } from "../$action/constant";


let firstLoad = true
const CE_Sidebar = () => {
    const [open, setOpen] = useState<boolean>(false);

    const hideSidebar = () => {
        setOpen(false)
    }

    const showSidebar = () => {
        setOpen(true)
    }

    useEffect(() => {
        if (firstLoad) {
            emitter.on(E_Navigator.SHOW_SIDEBAR, showSidebar)
            firstLoad = false
        }
        return () => {
            emitter.removeAllListeners(E_Navigator.SHOW_SIDEBAR)
            firstLoad = true
        }
    }, [])
    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 bg-black z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={hideSidebar}
                    />
                )}
            </AnimatePresence>
            <motion.div
                id="sidebar"
                animate={{ left: open ? 0 : '-100%' }}
                className={
                    "fixed h-screen top-0 bottom-0 -left-full z-40 w-[300px] lg:static " +
                    "flex flex-col " +
                    "bg-white border-r "
                }
            >

                <section className="w-[300px] min-w-[300px] max-w-[300px] border-r h-screen">
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
            </motion.div>
        </>
    )
}

export default CE_Sidebar;