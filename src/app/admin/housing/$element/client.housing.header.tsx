'use client'

import { emitter } from "@/app/$navigator/client.emitter"
import CE_Button from "@/app/login/$element/client.button"
import CE_Input from "@/app/login/$element/client.input"
import { E_Housing } from "../$action/constant"

const CE_Header = () => {

    const addHousing = () => {
        emitter.emit(E_Housing.SHOW_DIALOG_CREATE)
    }
    return (
        <div className="w-full flex items-center justify-between">
            <div className="w-[300px] flex items-center justify-start gap-2">
                <div className="min-w-[220px]">
                    <CE_Input className="mb-2 pl-2 p-1" type='text' placeholder="Cari unit" name='search' />
                </div>
                <CE_Button className="w-[80px] text-[14px]" type='button'>
                    search
                </CE_Button>
            </div>
            <div className="w-[150px]">
                <CE_Button className="text-[14px]" type="button" onClick={() => addHousing()}>
                    Add Housing
                </CE_Button>

            </div>
        </div>
    )
}

export default CE_Header