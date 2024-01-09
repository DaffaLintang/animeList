'use client'
import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({title}) => {
    const router = useRouter()

    const handleBack = (e) => {
        e.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-4 ">
                <span className="text-color-primary cursor-pointer" onClick={handleBack}><ArrowSquareLeft size={32}/></span>
                <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
        </div>
    )
}

export default Header