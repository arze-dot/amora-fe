'use client'
import CE_Button from "@/app/login/$element/client.button"
import { Icon } from '@iconify/react'
import { useState } from "react"

export default function CE_Pagination() {
    const [page, setPage] = useState<number>(1)
    const totalPage = 10
    const isNext = page !== totalPage
    const isPrev = page !== 1

    return (
        <div className="w-full flex items-center justify-end mt-3 gap-3">
            <div className="w-[50px]">
                <CE_Button type='button' disabled={!isPrev} onClick={() => setPage(page - 1)}>
                    <Icon icon="formkit:arrowleft" />
                </CE_Button>
            </div>
            <p>
                page {page} of {totalPage}
            </p>
            <div className="w-[50px]">
                <CE_Button type='button' disabled={!isNext} onClick={() => setPage(page + 1)}>
                    <Icon icon="formkit:arrowright" />
                </CE_Button>
            </div>
        </div>
    )
}