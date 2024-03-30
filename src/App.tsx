import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <main className="flex min-h-screen flex-col items-center justify-between">
                {/* Hero */}
                <div
                    className="w-screen h-screen"
                    style={{
                        backgroundImage: `url('/assets/images/white-cube-house.png')`,
                    }}
                >
                    {/* NAVBAR */}
                    <div className="w-full bg-transparent px-20 py-6 flex justify-between">
                        <h1 className="uppercase font-bold text-2xl text-white">
                            Amora
                        </h1>
                        <nav>
                            <ul className="flex space-x-10 text-white">
                                <li>About</li>
                                <li>Service</li>
                                <li>Testimonial</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </div>
                    {/* NAVBAR */}
                    <section className="mt-32 space-y-4">
                        <h1 className="text-3xl font-semibold text-center text-white">
                            Construction & Real <br /> Estate Development
                        </h1>
                        <p className="text-white text-center text-sm font-light">
                            Membangun Pondasi, Membangun Masa Depan
                            <br /> Mitra Anda dalam Kebanggaan Konstruksi
                        </p>
                    </section>
                </div>
                {/* Floating Text */}
                <section className="bg-[#286276] rounded-full p-3 px-20 -mt-8 text-white">
                    <p className="text-xs text-center">
                        Hunian, nyaman, asri dan elegant untuk kaum milenial.
                    </p>
                    <h3>Living in Friendly Environment and Milenial Vibes</h3>
                </section>
                {/* Company Information */}
                <section className="w-full min-h-screen flex justify-left items-center">
                    <img
                        src={"/assets/images/house-object.png"}
                        alt="House"
                        width={700}
                        height={700}
                        className="object-contain"
                    />
                    <section className="w-1/2 p-10 flex flex-col justify-center space-y-1">
                        <p>Tentang</p>
                        <h1 className="text-xl font-semibold">
                            PT Amora Gunung Mas
                        </h1>
                        <p className="pt-4">
                            PT AMORA GUNUNG MAS mulai berdiri pada tahun 2023
                            berdasarkan pada Akta Pendirian PT Pada tanggal 1
                            Maret 2023 nomor 03 dikantor Notaris Anesta
                            Chrisanti, S.H., M.Kn. Kami merupakan perusahaan
                            swasta dengan kualifikasi Kecil & Menengah yang
                            bergerak di bidang jasa konstruksi | sipil |
                            arsitektur | mekanikal & elektrikal | surveyor |
                            supplier | konsultan properti yaitu sebagai
                            pengembangan perumahan (Developer). Dengan dukungan
                            dari tenaga-tenaga ahli yang teruji dan
                            berpengalaman di bidangnya, kami memiliki visi untuk
                            turut serta dalam melaksanakan program pembangunan
                            nasional dengan mutu dan kualitas yang terjaga.
                            Sebagai komitmen kami dalam meningkatkan ku alitas
                            pelayanan, kami juga memiliki divisi perencanaan.
                            Sehingga kami dapat merefleksikan keinginan klien
                            kami dalam wujud desain yang tentunya tetap
                            memperhatikan kaidah- kaidah arsitektur. Kami tumbuh
                            berkat dukungan dan kerja keras dari seluruh staf
                            dan karyawan. Dengan kepercayaan besar yang
                            diberikan oleh para klien kami, kami selalu berusaha
                            memberikan pelayanan yang terbaik.Direktur
                            Utama,TARKIM FIRMAN PURBA
                        </p>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default App;
