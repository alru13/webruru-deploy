import Link from "next/link"
import InputSearch from "@/components/InputSearch/4Tak"

const Page = () => {
    return (
        <>
            <div className="grid-cols-1 container mx-auto items-center py-6 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <h1 className="font-semibold text-4xl p-4">
                Mesin Overheat atau Peningkatan Suhu Mesin


                </h1>

            <InputSearch/>
            <h1 className="font-semibold text-2xl p-4">
                    Bagian Sistem yang Kemungkinan Rusak :
                </h1>
                <Link href={'/search/kerusakan/4-tak/ovrht/mesin/overheat'} className="inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
                    Komponen Mesin Utama
                </Link>

                <Link href={'/search/kerusakan/4-tak/ovrht/bakar/overheat'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
                    Sistem Bahan Bakar
                </Link>

                <Link href={'/search/kerusakan/4-tak/ovrht/pendingin/overheat'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
                    Sistem Pendingin
                </Link>

                <Link href={'/search/kerusakan/4-tak/ovrht/lumas/overheat'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
                    Sistem Pelumas
                </Link>

                <Link href={'/search/kerusakan/4-tak/ovrht/intake/overheat'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
                    Sistem Intake dan Exhaust
                </Link>
            </div>
        </>
    )
}

export default Page