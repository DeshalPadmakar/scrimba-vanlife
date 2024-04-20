import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { getVan } from "../../api"

export default function HostVanDetail() {
    const [currentVan, setCurrentVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setCurrentVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const activeStyles = {
        color: "#2563eb",
        fontWeight: "bold",
        textDecoration: "underline",
        textUnderlineOffset: "12px",
        textDecorationThickness: "2px"
    }

    return (
        <section className="mt-10">
            <Link
                to=".."
                relative="path"
                className="bg-gray-100 py-1 px-2.5 rounded-md w-max flex items-center gap-2 hover:bg-gray-200"
                >
                <p>&larr; </p>
                <p>Back to all vans</p>
            </Link>
            {currentVan &&
                <section className="text-gray-950 mt-8 mb-16">
                    <div className=" md:grid md:grid-cols-2 md:gap-8 md:bg-blue-100 md:-mx-8 md:p-8">
                        <img src={currentVan.imageUrl} className="rounded-lg" />
                        <div className="">
                            <div className="flex items-center justify-between mt-4">
                                <h3 className="text-[2rem] font-bold">{currentVan.name}</h3>
                                <p className="text-sm px-2 py-0.5 border-2 rounded-full inline-block md:hidden">
                                    {currentVan.type}
                                </p>
                            </div>
                            <h4 className="mt-2"><span className="font-bold text-2xl tracking-wide">${currentVan.price}</span>/day</h4>
                        </div>
                    </div>
                    <nav className="flex gap-4 mt-8 mb-6">
                        <NavLink
                            to="."
                            end
                            style={({ isActive }) => isActive ? activeStyles : null}
                            className="hover:text-blue-600 hover:underline hover:decoration-blue-600 hover:underline-offset-[12px] hover:decoration-2"
                            >
                            Details
                        </NavLink>
                        <NavLink
                            to="pricing"
                            style={({ isActive }) => isActive ? activeStyles : null}
                            className="hover:text-blue-600 hover:underline hover:decoration-blue-600 hover:underline-offset-[12px] hover:decoration-2"
                            >
                            Pricing
                        </NavLink>
                        <NavLink
                            to="photos"
                            style={({ isActive }) => isActive ? activeStyles : null}
                            className="hover:text-blue-600 hover:underline hover:decoration-blue-600 hover:underline-offset-[12px] hover:decoration-2"
                            >
                            Photos
                        </NavLink>
                    </nav>
                    <Outlet context={{ currentVan }} />
                </section>}
        </section>
    )
}
