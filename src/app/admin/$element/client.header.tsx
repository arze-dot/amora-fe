import CE_Button from "@/app/login/$element/client.button";
import CE_Input from "@/app/login/$element/client.input";

export default function CE_Header() {
    return (
        <div className="w-[300px] flex items-center justify-start gap-2">
            <div className="min-w-[220px]">
                <CE_Input className="mb-2 pl-2 p-1" type='text' placeholder="Cari unit" name='search' />
            </div>
            <CE_Button className="w-[80px]" type='button'>
                search
            </CE_Button>
        </div>
    )
}