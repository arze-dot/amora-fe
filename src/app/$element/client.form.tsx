'use client'

import { useRouter } from "next/navigation";
import CE_Button from "./client.button"
import CE_Input from "./client.input"
import CE_InputPassword from "./client.input.password"
import { ChangeEvent, FormEvent, useState } from "react";
import { APIS_Login } from "@/server/api/login";

interface LoginFormType {
    username: string;
    password: string;
}
export default function CE_Form() {

    const router = useRouter();

    const [loginForm, setLoginForm] = useState<LoginFormType>({
        username: '',
        password: ''
    })

    const submitLogin = async (e: FormEvent) => {
        e.preventDefault()
        const result = await APIS_Login(loginForm);
        console.log(result)
        // router.push('/admin')
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }


    return (
        <form className="mt-12 w-[300px] flex flex-col items-start justify-start gap-4" onSubmit={submitLogin} >
            <CE_Input onChange={handleChange} placeholder="Please input your username" type='text' label={'Username'} name='username' required />
            <CE_InputPassword onChange={handleChange} name='password' />
            <div className="w-full mt-10">
                <CE_Button type="submit" >
                    SUBMIT
                </CE_Button>
            </div>
        </form>
    )
}