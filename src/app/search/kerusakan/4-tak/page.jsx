import Link from "next/link"
import InputSearch from "@/components/InputSearch/4Tak"

const Page = () => {
    return (
        <>
            <div className="grid-cols-1 container mx-auto items-center py-6 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <h1 className="font-semibold text-4xl p-4">
                    Cari Kerusakan Pada Mesin 4 Tak...

                </h1>

            <InputSearch/>
            <h1 className="font-semibold text-2xl p-4">
                    Gejala yang Terlihat :
                </h1>
                <Link href={'/search/kerusakan/4-tak/gas/'} className="inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">Gas Buang Tidak Normal</Link>
                <Link href={'/search/kerusakan/4-tak/bahan/'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">Konsumsi Bahan Bakar Berlebih</Link>
                <Link href={'/search/kerusakan/4-tak/suaratn/'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">Menghasilkan Suara Tidak Normal</Link>
                <Link href={'/search/kerusakan/4-tak/ovrht/'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">Mesin Overheat atau Peningkatan Suhu Mesin</Link>
                <Link href={'/search/kerusakan/4-tak/mttm/'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">Mesin Tiba-Tiba Mati</Link>
                <Link href={'/search/kerusakan/4-tak/rpmtn/'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">Putaran Mesin (RPM) Tidak Normal</Link>
                <Link href={'/search/kerusakan/4-tak/lumastn/'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">Penunjuk Minyak Lumas Tidak Normal</Link>
                <Link href={'/search/kerusakan/4-tak/sfail/'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">Start Fail</Link>
                <Link href={'/search/kerusakan/4-tak/peneff/'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">Penurunan Efisiensi Mesin</Link>


            </div>
        </>
    )
}

export default Page