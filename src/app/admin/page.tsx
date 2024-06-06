import CE_Header from "./$element/client.header";
import SE_Table from "./$element/server.table";

export default async function Home() {
    return (
        <div className="w-full overflow-auto">
            <div className="w-full my-3">
                <CE_Header />
            </div>
            <SE_Table />
        </div>
    )
}