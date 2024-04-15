import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { currentVan } = useOutletContext()
    
    return (
        <section className="host-van-detail-info">
            <h4 className="font-semibold mt-4">Name</h4>
            <p>{currentVan.name}</p>
            <h4 className="font-semibold mt-4">Category</h4>
            <p>{currentVan.type}</p>
            <h4 className="font-semibold mt-4">Description</h4>
            <p>{currentVan.description}</p>
            <h4 className="font-semibold mt-4">Visibility</h4>
            <p>Public</p>
        </section>
    )
}