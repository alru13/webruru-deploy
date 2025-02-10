import Link from "next/link"

const Damage = ({ api }) => {
    return (
        <div className="px-4">
            {api.data?.map((dmg) => {
                return (

                    <Link key={dmg.id} href={`/damage/4-tak/${dmg.id}`} className="cursor-pointer hover:text-color-header">
                        <div className="px-4">

                            <span className="flex items-center py-4">
                                <span className="h-px flex-1 bg-color-dark"></span>
                            </span>
                            <h4 className="text-lg/tight font-medium text-gray-900">{dmg.kerusakan}</h4>
                            <h3 className="mt-0.5 text-gray-700">{dmg.gejala}</h3>

                        </div>
                    </Link>


                )
            })}
        </div>
    )
}

export default Damage