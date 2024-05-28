import { ReactNode } from "react"

interface CE_ButtonProps {
    children: ReactNode;
    type: "submit" | "submit" | "button";
    onClick?: () => void;
}

export default function CE_Button(props: CE_ButtonProps) {
    return (
        <button className="w-full border py-3 px-3 rounded-md text-white bg-slate-500 font-bold" type={props.type} onClick={props.onClick}>
            {props.children}
        </button>
    )
}