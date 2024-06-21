'use server'

import CE_Button from "@/app/login/$element/client.button";
import CE_Pagination from "./client.pagination";

export default async function SE_Table() {

    const pickData = [
        {
            title: 'No',
            selector: 'index'
        },
        {
            title: 'Nama Lengkap',
            selector: 'nama'
        },
        {
            title: 'Email',
            selector: 'email'
        },
        {
            title: 'Alamat',
            selector: 'alamat'
        },
        {
            title: 'Status',
            selector: 'status'
        },
        {
            title: 'Username',
            selector: 'username'
        },
        {
            title: 'Telepon',
            selector: 'telepon'
        },
        {
            title: 'Tanggal Lahir',
            selector: 'tanggal_lahir'
        },
        {
            title: 'Jenis Kelamin',
            selector: 'jenis_kelamin'
        },
        {
            title: 'Pekerjaan',
            selector: 'pekerjaan'
        }
    ];

    const data = [
        {
            index: 1,
            nama: 'John Doe',
            email: 'johndoe@gmail.com',
            alamat: 'Jl. Dimana pun',
            status: 'Aktif',
            username: 'johndoe',
            telepon: '081234567890',
            tanggal_lahir: '1990-01-01',
            jenis_kelamin: 'Laki-laki',
            pekerjaan: 'Software Engineer'
        },
        {
            index: 2,
            nama: 'Jane Smith',
            email: 'janesmith@yahoo.com',
            alamat: 'Jl. Kenangan No. 12',
            status: 'Aktif',
            username: 'janesmith',
            telepon: '081234567891',
            tanggal_lahir: '1985-05-15',
            jenis_kelamin: 'Perempuan',
            pekerjaan: 'Designer'
        },
        {
            index: 3,
            nama: 'Michael Johnson',
            email: 'michael.j@gmail.com',
            alamat: 'Jl. Harmoni No. 7',
            status: 'Tidak Aktif',
            username: 'michaelj',
            telepon: '081234567892',
            tanggal_lahir: '1980-07-20',
            jenis_kelamin: 'Laki-laki',
            pekerjaan: 'Manager'
        },
        {
            index: 4,
            nama: 'Emily Davis',
            email: 'emily.davis@hotmail.com',
            alamat: 'Jl. Merdeka No. 1',
            status: 'Aktif',
            username: 'emilydavis',
            telepon: '081234567893',
            tanggal_lahir: '1992-12-10',
            jenis_kelamin: 'Perempuan',
            pekerjaan: 'Teacher'
        },
        {
            index: 5,
            nama: 'David Wilson',
            email: 'davidwilson@gmail.com',
            alamat: 'Jl. Kemerdekaan No. 10',
            status: 'Aktif',
            username: 'davidwilson',
            telepon: '081234567894',
            tanggal_lahir: '1975-03-25',
            jenis_kelamin: 'Laki-laki',
            pekerjaan: 'Doctor'
        },
    ]


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
                                        data.map((itm, idx) => {

                                            const value = itm[item.selector as keyof typeof itm]
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
                                    {Array(data?.length ? data?.length + 1 : 1).fill('').map((_, itemIdx) => (
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
                        data?.map((item, itemIdx) => {
                            return (
                                <div className="flex items-center h-[52px] p-[12px] border-l even:bg-white odd:bg-[#F8F9F9] flex-shrink-0 ">
                                    <CE_Button type='button'>Edit</CE_Button>
                                    <CE_Button type='button'>Delete</CE_Button>
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