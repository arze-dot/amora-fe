'use server'
import { APIS_Login } from "@/server/api/login"
import { cookies } from "next/headers"

interface IRq_Login {
    username: string,
    password: string
}
const ACT_LOGIN = async (prop: IRq_Login) => {
    const data: any = await APIS_Login(prop)
    cookies().set('token', data.token)
    return data
}

export default ACT_LOGIN