import React from "react"
import { Link } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import { getHostVans } from "../../api"

export default function Dashboard() {
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    React.useEffect(() => {
        setLoading(true)
        getHostVans()
            .then(data => setVans(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    function renderVanElements(vans) {
        const hostVansEls = vans.map((van) => (
            <Link to={`vans/${van.id}`} key={van.id}>
            <div className="flex items-center gap-5 mt-6" >
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} className="w-[90px] h-[90px] rounded-md"/>
                <div>
                    <h3 className="font-bold">{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
            </Link>
        ))

        return (
            <section className="">
                {hostVansEls}
            </section>
        )
    }

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }

    if (error) {
        return <h1>Error: {error.message}</h1>
    }

    return (
        <>
            <section className="bg-blue-100 text-gray-950 mt-12 p-5 rounded-t-md">
                <div className="info">
                    <h1 className="text-2xl font-bold tracking-wide">Welcome!</h1>
                    <div className="flex justify-between items-center my-4">
                        <p>Income last <span>30 days</span></p>
                        <Link to="income" className="text-sm text-gray-700 hover:underline">Details</Link>
                    </div>
                    <h2 className="text-3xl font-bold">$2,260</h2>
                </div>
            </section>
            <section className="bg-blue-200 p-5 rounded-b-md flex items-center justify-between text-gray-950">
                <div className="flex items-center gap-6">
                    <h2 className="text-xl font-semibold">Review score</h2>
                    <div className="flex items-center gap-1">
                        <BsStarFill className="star text-blue-500" />
                        <p>
                            <span className="font-bold">5.0</span>/5
                        </p>
                    </div>
                </div>
                <Link to="reviews" className="text-sm hover:underline text-gray-700">Details</Link>
            </section>
            <section className="mt-12 mb-20 text-gray-950">
                <h2 className="text-xl font-bold">Your listed vans</h2>
                {
                    loading && !vans
                    ? <h1>Loading...</h1>
                    : (
                        <>
                            {renderVanElements(vans)}
                        </>
                    )
                }
                {/*<React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>*/}
            </section>
        </>
    )
}
