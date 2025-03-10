'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    

    // untuk input dengan tekan Enter dan klik
    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        
        if(!keyword || keyword.trim() == "") return

        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/kerusakan/4-tak/${keyword}`)
        }

    }

    return (
        <div className="relative px-8">
            {/* <input 
                placeholder="Masukan gejala yang ada..." 
                className="w-64 rounded-md border-color-dark py-2 shadow-sm" 
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            
            
            <button className="px-3 absolute py-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button> */}
            <iframe
    src="https://www.chatbase.co/chatbot-iframe/sLnXf5wtx8PtGxOs1vl9w"
    width="100%"
    className="height: 100%; h-96"
    frameBorder="0"
></iframe>
        </div>
    )
}

export default InputSearch
