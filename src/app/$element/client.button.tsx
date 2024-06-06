import { ReactNode } from "react"

interface CE_ButtonProps {
    children: ReactNode;
    type: "submit" | "submit" | "button";
    onClick?: () => void;
    disabled?: boolean;
    className?: string
}

export default function CE_Button(props: CE_ButtonProps) {
    return (
        <button className={`w-full border py-2 px-3 text-[12px] rounded-md text-white bg-slate-500 font-bold ${props.disabled ? 'bg-gray-300' : ''}  ${props.className} `} type={props.type} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
    )
}