import Image from "next/image"
import cryptoImg from "@/public/crypto.jpg"

export default function page(){
    return(
        <section className="flex justify-center min-h-screen ">
            <div className="w-full p-4 md:w-[50%] text-justify flex flex-col gap-4">
                <Image src={cryptoImg} alt="crypto" className="rounded-md"/>
                <div className="flex flex-col gap-3">
                <h1 className="text-2xl sm:text-5xl">Apa itu crypto dan blokchain ?</h1>
                <p>Cryptocurrency atau crypto adalah bentuk mata uang digital yang menggunakan teknologi kriptografi untuk mengamankan transaksi serta mengatur pembuatan unit baru. Tidak seperti uang konvensional yang dikendalikan bank sentral, crypto berjalan di atas sistem terdesentralisasi bernama blockchain. Karena tidak memiliki bentuk fisik, seluruh nilai dan pergerakannya disimpan dalam bentuk data yang dicatat di jaringan komputer di seluruh dunia.</p>
                <p>Blockchain sendiri adalah sebuah database terdistribusi yang menyimpan catatan transaksi secara terbuka. Setiap transaksi yang terjadi dikumpulkan dalam sebuah blok, kemudian blok tersebut ditambahkan ke rangkaian blok sebelumnya, membentuk sebuah rantai data yang tidak bisa diubah. Desain ini membuat blockchain transparan, aman, dan tahan manipulasi, karena tidak ada satu pihak pun yang memegang kontrol penuh atas jaringan. Pada saat seseorang melakukan transaksi crypto, permintaan transaksi tersebut disebarkan ke ribuan komputer di jaringan. Komputer-komputer ini kemudian memverifikasi keabsahan transaksi menggunakan algoritma kriptografi. Setelah dianggap valid, transaksi dimasukkan ke dalam blok dan blok tersebut ditambahkan ke blockchain melalui mekanisme konsensus seperti Proof of Work atau Proof of Stake.</p>
                <p>Crypto hadir dalam berbagai jenis. Bitcoin adalah kripto pertama yang diciptakan sebagai mata uang digital murni. Ethereum kemudian membawa konsep smart contract yang memungkinkan pengembang membuat aplikasi terdesentralisasi. Ada juga stablecoin seperti USDT dan USDC yang dirancang mengikuti nilai dolar agar lebih stabil. Selain itu, banyak token digunakan sebagai bagian dari ekosistem tertentu, misalnya untuk membayar biaya transaksi atau memberikan hak suara dalam pengembangan sebuah platform.</p>
                <p>Keberadaan crypto menawarkan banyak kelebihan, seperti transaksi internasional yang cepat, biaya yang relatif rendah, sistem yang aman, serta transparansi penuh karena semua aktivitas tercatat di blockchain. Namun crypto juga memiliki kekurangan, seperti harga yang sangat fluktuatif, risiko penipuan, serta kebutuhan pemahaman teknis yang lebih tinggi dibandingkan aset tradisional. Di Indonesia, crypto sudah legal sebagai aset yang boleh diperdagangkan dan berada di bawah pengawasan Bappebti, namun tidak diperbolehkan sebagai alat pembayaran.</p>
                <p>Masa depan crypto masih terus berkembang. Teknologi blockchain kini digunakan dalam keuangan terdesentralisasi (DeFi), game berbasis blockchain, penyimpanan data terdistribusi, hingga infrastruktur Web3. Perkembangannya yang pesat membuat crypto tidak hanya dilihat sebagai alat investasi, tetapi juga sebagai fondasi untuk teknologi internet generasi berikutnya.</p>
                </div>
            </div>
        </section>
    )
}