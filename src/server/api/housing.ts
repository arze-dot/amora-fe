import { IRs_Get } from "@/lib/get.type";

interface HousingData {
    id: number,
    name: string;
    created_at: string;
    updated_at: string;
}
const APIS_Housing = async () => {
    const data: IRs_Get<HousingData> = await fetch(process.env.SERVER_API + '/housings', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) =>
        res.json()
    ).then(res => res).catch(err => err)
    return data
}

export default APIS_Housing;
