import Link from "next/link"

const DamageSystem = ( system ) => {
    return (
        <div>
            
            <Link href={`/search/kerusakan/4-tak/gas/${system}`} className="inline-block rounded px-8 py-3 text-m font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring">{system}</Link>
        </div>
    )
}

export default DamageSystem