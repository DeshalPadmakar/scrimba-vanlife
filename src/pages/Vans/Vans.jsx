import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [])

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id}>
            <Link
                to={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
            >
                <img src={van.imageUrl} className="rounded-md"/>
                <div className="md:mt-1">
                    <h3 className="font-semibold leading-tight mt-1.5">{van.name}</h3>
                    <p className="text-sm mt-0.5"><span className="font-semibold text-base">${van.price}</span>/day</p>
                </div>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if (loading) {
        return (
            <div className="h-screen flex">
                <div className="m-auto border-slate-200 border-t-blue-600 border-4 rounded-full h-10 w-10 animate-spin"></div>
            </div>
        )
    }
    
    if (error) {
        return (
            <div className="h-screen flex">
                <h1>There was an error: {error.message}</h1>
            </div>
        )
    }

    return (
        <div className="mt-24 mb-16 mx-4 md:mx-8 text-gray-900 lg:mx-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore our van options</h1>
            <div role="filter list" className="flex flex-wrap items-center gap-2">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `text-sm px-2 py-0.5 border-2 rounded-full transition hover:bg-blue-200 hover:border-blue-200 ${typeFilter === "simple" ? "border-blue-300 font-semibold" : "border-gray-200"}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `text-sm px-2 py-0.5 border-2 rounded-full transition hover:bg-blue-200 hover:border-blue-200 ${typeFilter === "luxury" ? "border-blue-300 font-semibold" : "border-gray-200"}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `text-sm px-2 py-0.5 border-2 rounded-full transition hover:bg-blue-200 hover:border-blue-200 ${typeFilter === "rugged" ? "border-blue-300 font-semibold" : "border-gray-200"}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="text-sm px-2 py-0.5 border-2 rounded-full border-red-200 transition hover:bg-red-200"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="grid grid-cols-2 md:grid-cols-custom gap-6 mt-10">
                {vanElements}
            </div>
        </div>
    )
}