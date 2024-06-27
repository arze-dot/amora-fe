'use client'

import { emitter } from "@/app/$navigator/client.emitter"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { E_Housing } from "../$action/constant"

let firstLoad = true
const CE_DialogCreate = () => {

    const [open, setOpen] = useState<boolean>(false);

    const hideDialog = () => {
        setOpen(false)
    }

    const showDialog = () => {
        setOpen(true)
    }

    useEffect(() => {
        if (firstLoad) {
            emitter.on(E_Housing.SHOW_DIALOG_CREATE, showDialog)
            firstLoad = false
        }
        return () => {
            emitter.removeAllListeners(E_Housing.SHOW_DIALOG_CREATE)
            firstLoad = true
        }
    }, [])
    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 bg-black z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={hideDialog}
                    />
                )}
            </AnimatePresence>
            <motion.div
                id="sidebar"
                animate={{ right: open ? 0 : '-100%' }}
                className={
                    "fixed h-screen top-0 bottom-0 -right-full z-40 w-[350px] block " +
                    "flex flex-col " +
                    "bg-white border-r "
                }
            >
                <section className="w-[350px] border-r h-screen">
                    <div className="h-[70px] w-full flex items-center justify-center font-bold border-b px-9">
                        Add Housing
                    </div>

                </section>
            </motion.div>
        </>
    )
}

export default CE_DialogCreate