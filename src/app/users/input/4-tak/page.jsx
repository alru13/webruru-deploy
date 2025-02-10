'use client'
import { useState } from "react"

const Page = () => {
    const [gejala, setGejala] = useState('')
    const [kerusakan, setKerusakan] = useState('')
    const [solusi, setSolusi] = useState('')
    const [bagian, setBagian] = useState('')
    const [response, setResponse] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/kerusakan-4-tak`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({gejala, kerusakan, solusi, bagian})
        })

        const result = await res.json()
        setResponse(result.message)
    }

    return (
        <div className="grid-cols-1 container mx-auto items-center py-6 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <h3 className="font-semibold text-4xl p-4">Input Data SDS Pada Mesin 4 Tak</h3>

            <form onSubmit={handleSubmit} className="p-2 mx-12 block text-sm font-medium" >
                <p className="px-4 mt-2 line-clamp-3 text-xl font-semibold">
                    Gejala :
                </p>
                <input
                    type="text"
                    placeholder="Masukan data gejala..."
                    value={gejala}
                    onChange={(e) => setGejala(e.target.value)}
                    className="mt-2 sm:w-1/2 w-full h-16 rounded-lg border-gray-200 shadow-sm sm:text-sm"

                />
                <p className="px-4 mt-2 line-clamp-3 text-xl font-semibold">
                    Kerusakan :
                </p>
                <input
                    type="text"
                    placeholder="Masukan data kerusakan..."
                    value={kerusakan}
                    onChange={(e) => setKerusakan(e.target.value)}
                    className="mt-2 sm:w-1/2 w-full h-16 rounded-lg border-gray-200 shadow-sm sm:text-sm"

                />
                <p className="px-4 mt-2 line-clamp-3 text-xl font-semibold">
                    Solusi :
                </p>
                <input
                    type="text"
                    placeholder="Masukan data solusi..."
                    value={solusi}
                    onChange={(e) => setSolusi(e.target.value)}
                    className="mt-2 sm:w-1/2 w-full h-16 rounded-lg border-gray-200 shadow-sm sm:text-sm mr-4"

                />

                <p className="px-4 mt-2 line-clamp-3 text-xl font-semibold">
                    Bagian :
                </p>
                <input
                    type="text"
                    placeholder="Masukan data bagian..."
                    value={bagian}
                    onChange={(e) => setBagian(e.target.value)}
                    className="mt-2 sm:w-1/2 w-full h-16 rounded-lg border-gray-200 shadow-sm sm:text-sm mr-4"

                />
                <button type="submit" className="rounded bg-color-gray hover:text-color-header px-3 py-1.5 text-sm font-semibold">Submit</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    )
}

export default Page