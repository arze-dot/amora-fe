import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode } from "react"

interface CE_ButtonProps {
    children: ReactNode;
    type: "submit" | "submit" | "button";
    onClick?: () => void;
    disabled?: boolean;
    className?: string
    loading?: boolean;
}

export default function CE_Button(props: CE_ButtonProps) {
    return (
        <button className={`flex items-center justify-center w-full border p-3  rounded-md text-white bg-slate-500 font-bold ${props.disabled || props.loading ? 'bg-gray-300' : ''}  ${props.className} `} type={props.type} onClick={props.onClick} disabled={props.disabled || props.loading}>
            {
                props.loading ?
                    <Icon icon="line-md:loading-loop" fontSize={30} /> :
                    props.children
            }
        </button>
    )
}