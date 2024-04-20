import React from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"

export default function HostVans() {
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    const hostVansEls = vans.map(van => (
        <Link to={`${van.id}`} key={van.id}>
            <div className="flex md:flex-col md:items-start items-center gap-5 md:gap-2 mt-6 bg-blue-50 md:bg-white p-4 md:p-0 rounded-md " >
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} className="h-[90px] w-[90px] rounded-md md:w-full md:h-full"/>
                <div>
                    <h3 className="font-bold text-lg">{van.name}</h3>
                    <p className="text-sm"><span className="font-bold text-lg">${van.price}</span>/day</p>
                </div>
            </div>
        </Link>
    ))

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section className="text-gray-950 mt-10">
            <h1 className="text-3xl font-bold mb-4">Your listed vans</h1>
            <div className="mb-16">
                {
                    vans.length > 0 ? (
                        <section className="md:grid md:grid-cols-custom md:gap-6">
                            {hostVansEls}
                        </section>

                    ) : (
                            <div className="h-[300px] flex">
                                <div className="h-8 w-8 rounded-full border-4 border-t-blue-500 animate-spin m-auto"></div>
                            </div>
                        )
                }
            </div>
        </section>
    )
}