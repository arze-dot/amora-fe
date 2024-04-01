import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="flex min-h-screen flex-col items-center justify-between">
        {/* Hero */}
        <div
          className="h-screen w-screen"
          style={{
            backgroundImage: `url('/assets/images/white-cube-house.png')`
          }}>
          {/* NAVBAR */}
          <div className="flex w-full justify-between bg-transparent px-20 py-6">
            <h1 className="text-2xl font-bold uppercase text-white">Amora</h1>
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
            <h1 className="text-center text-3xl font-semibold text-white">
              Construction & Real <br /> Estate Development
            </h1>
            <p className="text-center text-sm font-light text-white">
              Membangun Pondasi, Membangun Masa Depan
              <br /> Mitra Anda dalam Kebanggaan Konstruksi
            </p>
          </section>
        </div>
        {/* Floating Text */}
        <section className="-mt-8 rounded-full bg-[#286276] p-3 px-20 text-white">
          <p className="text-center text-xs">
            Hunian, nyaman, asri dan elegant untuk kaum milenial.
          </p>
          <h3>Living in Friendly Environment and Milenial Vibes</h3>
        </section>
        {/* Company Information */}
        <section className="justify-left flex min-h-screen w-full items-center">
          <img
            src={'/assets/images/house-object.png'}
            alt="House"
            width={700}
            height={700}
            className="object-contain"
          />
          <section className="flex w-1/2 flex-col justify-center space-y-1 p-10">
            <p>Tentang</p>
            <h1 className="text-xl font-semibold">PT Amora Gunung Mas</h1>
            <p className="pt-4">
              PT AMORA GUNUNG MAS mulai berdiri pada tahun 2023 berdasarkan pada Akta Pendirian PT
              Pada tanggal 1 Maret 2023 nomor 03 dikantor Notaris Anesta Chrisanti, S.H., M.Kn. Kami
              merupakan perusahaan swasta dengan kualifikasi Kecil & Menengah yang bergerak di
              bidang jasa konstruksi | sipil | arsitektur | mekanikal & elektrikal | surveyor |
              supplier | konsultan properti yaitu sebagai pengembangan perumahan (Developer). Dengan
              dukungan dari tenaga-tenaga ahli yang teruji dan berpengalaman di bidangnya, kami
              memiliki visi untuk turut serta dalam melaksanakan program pembangunan nasional dengan
              mutu dan kualitas yang terjaga. Sebagai komitmen kami dalam meningkatkan ku alitas
              pelayanan, kami juga memiliki divisi perencanaan. Sehingga kami dapat merefleksikan
              keinginan klien kami dalam wujud desain yang tentunya tetap memperhatikan kaidah-
              kaidah arsitektur. Kami tumbuh berkat dukungan dan kerja keras dari seluruh staf dan
              karyawan. Dengan kepercayaan besar yang diberikan oleh para klien kami, kami selalu
              berusaha memberikan pelayanan yang terbaik.Direktur Utama,TARKIM FIRMAN PURBA
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
