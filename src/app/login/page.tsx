'use server'

import CE_Form from "./$element/client.form";

export default async function Login() {
    return (
        <main className="flex items-center justify-center w-screen h-screen bg-slate-100">
            <div className="bg-white py-8 px-7 flex flex-col items-center justify-center rounded-md">
                <p className="font-bold underline mb-4">
                    AMORA DASHBOARD
                </p>
                <p className="font-thin">
                    Please login to continue!
                </p>
                <CE_Form />

            </div>

        </main>
    );
}
