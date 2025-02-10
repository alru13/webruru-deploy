import { getDamageResponse } from "@/libs/api-libs"

const Page = async ({ params: {id} }) => {
    const damage = await getDamageResponse(`kerusakan-4-tak/${id}`)

    return (
        <>
            <div className="flow-root p-4 grid-cols-1 container mx-auto items-center overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <h3 className="py-5  font-semibold text-4xl">Detail SDS Mesin 4 Tak</h3>
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Gejala Kerusakan</dt>
                        <dd className="text-gray-700 sm:col-span-2">{damage.data.gejala}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Kemungkinan Letak Kerusakan</dt>
                        <dd className="text-gray-700 sm:col-span-2">{damage.data.kerusakan}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Solusi</dt>
                        <dd className="text-gray-700 sm:col-span-2">{damage.data.solusi}</dd>
                    </div>

                    
                </dl>
            </div>
        </>
    )
}

export default Page