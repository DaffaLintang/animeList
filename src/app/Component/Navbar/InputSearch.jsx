"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

import { useRef } from "react"

const InputSearch = () =>{
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        if(!searchRef.current.value || searchRef.current.value.trim() == ""){
            return
        } 
        else if(event.key === "Enter" || event.type === "click"){
            event.preventDefault()
            router.push(`/Search/${searchRef.current.value}`)
        }
    }
    return (
        <div className="relative">
            <input placeholder="Cari Anime..." className="p-2 rounded w-full" ref={searchRef} onKeyDown={handleSearch}/>
            <button className="absolute top-2 end-2 " onClick={ handleSearch}>
                <MagnifyingGlass size={24}/>
            </button>
        </div>
    )
}

export default InputSearch