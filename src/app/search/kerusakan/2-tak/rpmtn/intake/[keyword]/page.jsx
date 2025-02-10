import Damage from "@/components/Damages/4Tak"
import InputSearch from "@/components/InputSearch/4Tak"
import { getDamageResponse } from "@/libs/api-libs"

const Page = async ({ params }) => {
    const { keyword } = params

    const decodedKeyword = decodeURI(keyword)

    const searchDamage = await getDamageResponse("search/kerusakan/4-tak/intake", `q=${keyword}`)

    return (
        <>
            <section>
                <div className="grid-cols-1 container mx-auto items-center pt-6 pb-4 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <h1 className="font-semibold text-4xl p-4">Pencarian Kerusakan Pada Sistem Intake dan Exhaust</h1>
                    <h3 className="font-semibold text-2xl px-4 mb-8">Putaran Mesin (RPM) Tidak Mesin</h3>
                    <InputSearch/>
                    <Damage api={searchDamage} />
                </div>

            </section>
        </>
    )
}

export default Page