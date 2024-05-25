'use client'

import { ChangeEvent } from "react";

interface CE_InputProps {
    label?: string;
    placeholder?: string;
    onChange: (e: ChangeEvent) => void;
    type: string;
}
export default function CE_Input(props: CE_InputProps) {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-2">
            <p className="text-[14px]">{props.label}</p>
            <input className="border p-3 rounded-md w-full" onChange={props.onChange} placeholder={props.placeholder} type={props.type} />
        </div>
    )
}