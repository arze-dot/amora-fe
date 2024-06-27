import CE_DialogCreate from "./$element/client.dialog.housing.create"
import CE_Header from "./$element/client.housing.header"
import SE_Table from "./$element/server.housing.table"

export default function HousingPage() {

    return (
        <div>
            <CE_Header />
            <SE_Table />
            <CE_DialogCreate />
        </div>
    )
}