import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import { getVan } from "../../api"

export default function VanDetail() {
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()
    const location = useLocation()

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])
    
    if (loading) {
        return (
            <div className="h-screen flex">
                <div className="m-auto border-slate-200 border-t-blue-600 border-4 rounded-full h-10 w-10 animate-spin"></div>
            </div>
        )
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const search = location.state?.search || "";
    const type = location.state?.type || "all";
    
    return (
        <section className="mx-4 mt-24 mb-16 text-gray-950">
            <Link
                to={`..${search}`}
                relative="path"
                className="bg-gray-100 py-1 px-2.5 rounded-md w-max flex items-center gap-2 hover:bg-gray-200"
                >
                <p>&larr; </p>
                <p>Back to all vans</p>
            </Link>
            
            {van && (
                <div>
                    <img src={van.imageUrl} className="mt-6 rounded-lg "/>
                    <div className="flex items-center justify-between mt-4">
                        <h2 className="text-[2rem] font-bold">{van.name}</h2>
                        <p className="text-sm px-2 py-0.5 border-2 rounded-full inline-block">
                            {van.type}
                        </p>
                    </div>
                    <p className="mt-2"><span className="font-bold text-2xl tracking-wide">${van.price}</span>/day</p>
                    <button className="bg-blue-600 w-full text-white py-3 rounded-md mt-4 font-bold tracking-wide">Rent this van</button>
                    <h3 className="text-xl font-bold mt-8 border-t-2 border-gray-200 pt-6 ">Van description</h3>
                    <p className="text-gray-800">{van.description}</p>
                </div>
            )}
        </section>
    )
}