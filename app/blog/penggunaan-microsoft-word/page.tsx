import Image from "next/image"
import wordImg from "@/public/word.jpg"


export default function page(){
    return(
        <section className="flex justify-center min-h-screen bg-[#F0F0F0] ">
            <div className="w-full p-4 md:w-[50%] text-justify flex flex-col gap-4">
                <Image src={wordImg} alt="crypto" className="rounded-md"/>
                <div className="flex flex-col gap-3">
                <h1 className="text-1xl sm:text-5xl">Penggunaan Microsoft Word yang Baik dan Benar</h1>
                <p>Microsoft Word merupakan salah satu aplikasi pengolah kata yang paling populer dan banyak digunakan di dunia, baik untuk keperluan akademik, profesional, maupun pribadi. Agar dapat memaksimalkan fungsi Word, pengguna perlu memahami cara penggunaannya yang baik dan benar.</p>
                <p>Hal pertama yang perlu diperhatikan adalah struktur dokumen. Setiap dokumen sebaiknya memiliki judul, subjudul, dan paragraf yang tersusun rapi. Penggunaan fitur Heading di Word sangat membantu dalam membuat struktur yang jelas, sehingga memudahkan navigasi dokumen, baik saat membaca maupun saat membuat daftar isi otomatis. Selain itu, pengguna disarankan untuk memanfaatkan styles untuk konsistensi format teks, seperti jenis font, ukuran, dan warna. Hal ini tidak hanya membuat dokumen lebih profesional, tetapi juga mempermudah perubahan format secara keseluruhan tanpa harus mengubah satu per satu bagian teks</p>
                <p>Selanjutnya, penggunaan font dan ukuran huruf harus diperhatikan agar dokumen nyaman dibaca. Font standar seperti Times New Roman, Arial, atau Calibri dengan ukuran 11–12 pt biasanya direkomendasikan untuk teks utama. Sementara itu, line spacing atau jarak antar baris sebaiknya diatur antara 1,15 hingga 1,5 agar teks tidak terlalu padat dan mata tidak cepat lelah saat membaca.</p>
                <p>Microsoft Word juga menyediakan berbagai tools untuk efisiensi kerja, seperti spell check, grammar check, dan fitur pencarian kata. Penggunaan tools ini membantu mengurangi kesalahan penulisan dan mempercepat proses penyuntingan. Selain itu, fitur track changes sangat berguna bagi mereka yang bekerja dalam tim, karena memungkinkan setiap anggota tim melihat perubahan yang dilakukan pada dokumen secara jelas.</p>
                <p>Selain itu, penting untuk memahami cara menyimpan dokumen dengan benar. Pengguna disarankan untuk menyimpan dokumen dalam format .docx untuk kompatibilitas, dan menggunakan fitur autosave atau cloud storage seperti OneDrive agar data tidak hilang jika terjadi kesalahan komputer. Penggunaan header, footer, dan page number juga menambah profesionalitas dokumen, terutama untuk laporan atau skripsi.</p>
                <p>Terakhir, penggunaan Microsoft Word yang baik dan benar juga mencakup penggunaan gambar, tabel, dan grafik secara tepat. Setiap elemen visual harus mendukung isi teks, tidak berlebihan, dan ditempatkan dengan rapi agar dokumen tetap mudah dibaca. Fitur caption dan reference juga disarankan untuk memberikan keterangan yang jelas pada setiap tabel atau gambar.</p>
                <p>Dengan memahami dan menerapkan prinsip-prinsip di atas, pengguna dapat membuat dokumen Word yang profesional, rapi, dan mudah dibaca. Penggunaan Microsoft Word yang baik dan benar tidak hanya meningkatkan kualitas dokumen, tetapi juga efisiensi kerja, baik untuk individu maupun tim.</p>
                </div>
            </div>
        </section>
    )
}