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
        <section className="mx-4 md:mx-8 mt-24 mb-16 text-gray-950 xl:w-11/12 xl:max-w-[1300px] xl:mx-auto">
            <Link
                to={`..${search}`}
                relative="path"
                className="bg-gray-100 py-1 px-2.5 rounded-md w-max flex items-center gap-2 hover:bg-gray-200"
                >
                <p>&larr; </p>
                <p>Back to all vans</p>
            </Link>
            
            {van && (
                <div className="md:grid md:grid-cols-5 lg:grid-cols-2 md:gap-10 md:relative ">
                    <img src={van.imageUrl} className="mt-6 rounded-lg md:col-span-3 lg:col-span-1 md:sticky md:top-24"/>
                    <div className="md:col-span-2 lg:col-span-1">
                        <div className="flex items-center justify-between mt-4">
                            <h2 className="text-[2rem] font-bold">{van.name}</h2>
                            <p className="text-sm px-2 py-0.5 border-2 rounded-full inline-block md:hidden">
                                {van.type}
                            </p>
                        </div>
                        <p className="mt-2"><span className="font-bold text-2xl tracking-wide">${van.price}</span>/day</p>
                        <button className="bg-blue-600 w-full text-white py-3 rounded-md mt-4 font-bold tracking-wide hover:bg-blue-700 active:bg-blue-600 transition">Rent this van</button>
                        <hr className="bg-gray-300 h-0.5 mt-12 mb-8 md:mt-6 md:mb-6"/>
                        <h3 className="text-xl md:text-[1.1rem] font-bold border-gray-200">Van Type</h3>
                        <p className="text-gray-800">{van.type}</p>
                        <h3 className="text-xl md:text-[1.1rem] font-bold border-gray-200 mt-4">Van description</h3>
                        <p className="text-gray-800">{van.description}</p>
                    </div>
                </div>
            )}
        </section>
    )
}