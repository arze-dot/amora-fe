'use client'

import CE_Button from "./client.button"
import CE_Input from "./client.input"
import CE_InputPassword from "./client.input.password"

export default function CE_Form() {
    return (
        <form className="mt-12 w-[300px] flex flex-col items-start justify-start gap-4">
            <CE_Input onChange={(e) => { }} placeholder="Please input your username" type='text' label={'Username'} />
            <CE_InputPassword onChange={(e) => { }} />
            <div className="w-full mt-10">
                <CE_Button>
                    SUBMIT
                </CE_Button>
            </div>
        </form>
    )
}