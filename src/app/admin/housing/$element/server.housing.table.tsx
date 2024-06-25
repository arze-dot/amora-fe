'use server'

import CE_Button from "@/app/login/$element/client.button";
import CE_Pagination from "./client.housing.pagination";
import APIS_Housing from "@/server/api/housing";
import moment from "moment";
import { Icon } from "@iconify/react/dist/iconify.js";

export default async function SE_Table() {
    const data = await APIS_Housing()
    const pickData = [
        {
            title: 'No',
            selector: 'id'
        },
        {
            title: 'Nama Perumahan',
            selector: 'name'
        },
        {
            title: 'Dibuat',
            selector: 'created_at'
        },
        {
            title: 'Diubah',
            selector: 'updated_at'
        },
    ];


    return (
        <div className="w-full">
            <div className={
                "flex w-full justify-between " +
                "border rounded-[10px]  " +
                "overflow-auto"
            } >
                {
                    pickData.map((item, index) => {
                        return (
                            <>
                                <div className="flex flex-col text-sm text-center flex-shrink-0 ">
                                    <span className="flex items-center justify-center h-[52px] p-[12px] flex-shrink-0 bg-[#F8F9F9]">
                                        {item.title}
                                    </span>


                                    {
                                        data.data.map((itm, idx) => {

                                            let value = itm[item.selector as keyof typeof itm]
                                            if (item.selector === 'updated_at' || item.selector === "created_at") {
                                                value = moment(value).format('DD MMM YYYY , hh:mm:ss')
                                            }
                                            return (
                                                <div className="flex items-center h-[52px] p-[12px]  odd:bg-[#F8F9F9] flex-shrink-0 ">
                                                    <span >
                                                        {value}
                                                    </span>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                                <div className="flex flex-col text-sm text-center w-full">
                                    {Array(data?.data.length ? data?.data?.length + 1 : 1).fill('').map((_, itemIdx) => (
                                        <div key={itemIdx} className="flex w-full items-center h-[52px] odd:bg-[#F8F9F9]" />
                                    ))}
                                </div>
                            </>
                        )
                    })
                }
                <div className="sticky right-0 flex flex-col text-sm text-center w-fit flex-shrink-0">
                    <span className="flex items-center justify-center h-[52px] p-[12px] bg-[#F8F9F9]">
                        Aksi
                    </span>
                    {
                        data?.data?.map(() => {
                            return (
                                <div className="flex items-center h-[52px] p-[12px] border-l even:bg-white odd:bg-[#F8F9F9] flex-shrink-0 ">
                                    <CE_Button type='button'>
                                        <Icon icon="tabler:edit" fontSize={20} />
                                    </CE_Button>
                                    <CE_Button type='button'>
                                        <Icon icon="material-symbols:delete" fontSize={20} />
                                    </CE_Button>
                                </div>
                            )
                        })
                    }

                </div>


            </div >
            <CE_Pagination />
        </div>

    )
}