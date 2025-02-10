import Link from "next/link"
import InputSearch from "@/components/InputSearch/4Tak"

const Page = () => {
    return (
        <>
            <div className="grid-cols-1 container mx-auto items-center py-6 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <h1 className="font-semibold text-4xl p-4">
                Start Fail

                </h1>

            <InputSearch/>
            <h1 className="font-semibold text-2xl p-4">
                    Bagian Sistem yang Kemungkinan Rusak :
                </h1>
                <Link href={'/search/kerusakan/4-tak/sfail/mesin/fail'} className="inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
                    Komponen Mesin Utama
                </Link>

                <Link href={'/search/kerusakan/4-tak/sfail/bakar/fail'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
                    Sistem Bahan Bakar
                </Link>

                <Link href={'/search/kerusakan/4-tak/sfail/start/fail'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
                    Sistem Start
                </Link>

                <Link href={'/search/kerusakan/4-tak/sfail/intake/fail'} className= "inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">
                    Sistem Intake dan Exhaust
                </Link>
            </div>
        </>
    )
}

export default Page