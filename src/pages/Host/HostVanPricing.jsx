import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const { currentVan } = useOutletContext()
    return (
        <h3><span className="font-bold text-2xl">${currentVan.price}</span>/day</h3>
    )
}