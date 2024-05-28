'use client'

import { useRouter } from "next/navigation";
import CE_Button from "./client.button"
import CE_Input from "./client.input"
import CE_InputPassword from "./client.input.password"
import { FormEvent } from "react";

export default function CE_Form() {

    const router = useRouter();

    const submitLogin = (e: FormEvent) => {
        e.preventDefault()
        router.push('/admin')
    }


    return (
        <form className="mt-12 w-[300px] flex flex-col items-start justify-start gap-4" onSubmit={submitLogin} >
            <CE_Input onChange={(e) => { }} placeholder="Please input your username" type='text' label={'Username'} required />
            <CE_InputPassword onChange={(e) => { }} />
            <div className="w-full mt-10">
                <CE_Button type="submit" >
                    SUBMIT
                </CE_Button>
            </div>
        </form>
    )
}