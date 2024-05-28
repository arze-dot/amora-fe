'use client'

import { ChangeEvent, useState } from "react";

interface CE_InputPasswordProps {
    label?: string;
    onChange: (e: ChangeEvent) => void;
    required?: boolean
}
export default function CE_InputPassword(props: CE_InputPasswordProps) {
    const [show, setShow] = useState(false)
    return (
        <div className="w-full flex flex-col items-start justify-start gap-2">
            <p className="text-[14px]">Password</p>
            <div className="flex items-center justify-start border w-full rounded-md pr-3">
                <input className="p-3 rounded-md w-full focus:border-none focus:outline-none" onChange={props.onChange} placeholder={'Please input your password'} type={show ? 'text' :
                    'password'
                } required={props.required} />

                <p className="font-bold text-[12px] text-blue-900" onClick={() => setShow(!show)}>show</p>

            </div>
        </div>
    )
}