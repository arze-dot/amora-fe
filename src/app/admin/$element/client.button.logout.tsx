'use client'

import CE_Button from "@/app/login/$element/client.button"
import ACT_LOGOUT from "../$action/action.logout"

export default function CE_BtnLogout() {
    return (
        <div className="w-[100px]">
            <CE_Button className="bg-red-500" type="button" onClick={() => ACT_LOGOUT()}>
                LOGOUT
            </CE_Button>
        </div>
    )
}