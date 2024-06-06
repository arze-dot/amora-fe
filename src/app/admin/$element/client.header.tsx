import CE_Button from "@/app/$element/client.button";
import CE_Input from "@/app/$element/client.input";

export default function CE_Header() {
    return (
        <div className="w-[250px] flex items-center justify-start gap-2">
            <CE_Input className="mb-2 pl-2 p-1" type='text' placeholder="Cari unit" />
            <CE_Button className="w-[80px]" type='button'>
                search
            </CE_Button>
        </div>
    )
}