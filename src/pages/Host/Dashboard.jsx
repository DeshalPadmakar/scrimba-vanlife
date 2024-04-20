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
                <div className="flex items-center gap-5 md:gap-2 mt-6 md:flex-col md:items-start" >
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} className="w-[90px] h-[90px] rounded-md md:w-full md:h-full"/>
                    <div>
                        <h3 className="font-bold tracking-wide md:text-[1.1rem]">{van.name}</h3>
                        <p className="text-sm md:text-base"><span className="font-bold md:font-semibold md:text-[1.1rem]">${van.price}</span>/day</p>
                    </div>
                </div>
            </Link>
        ))

        return (
            <section className="md:grid md:grid-cols-custom md:gap-6 md:pb-8">
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
            <section className="bg-blue-100 text-gray-950 mt-12 p-5 md:-mx-8 md:p-8 rounded-t-md md:rounded-none">
                <div className="info">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-wide md:tracking-normal">Welcome!</h1>
                    <div className="flex justify-between items-center my-4">
                        <p>Income last <span>30 days</span></p>
                        <Link to="income" className="text-sm text-gray-700 hover:underline">Details</Link>
                    </div>
                    <h2 className="text-3xl md:text-[2.75rem] md:mt-6 font-bold">$2,260</h2>
                </div>
            </section>
            <section className="bg-blue-200 p-5 md:p-8 rounded-b-md flex items-center justify-between text-gray-950 md:-mx-8 md:rounded-none">
                <div className="flex items-center gap-6">
                    <h2 className="text-xl md:text-[1.4rem] font-semibold">Review score</h2>
                    <div className="flex items-center gap-1 md:text-lg">
                        <BsStarFill className="text-blue-500 md:text-2xl" />
                        <p className="md:mt-1">
                            <span className="font-bold">5.0</span>/5
                        </p>
                    </div>
                </div>
                <Link to="reviews" className="text-sm hover:underline text-gray-700">Details</Link>
            </section>
            <section className="mt-12 mb-20 text-gray-950">
                <h2 className="text-[1.4rem] font-bold md:text-2xl">Your listed vans</h2>
                {
                    loading && !vans
                    ? <h1>Loading...</h1>
                    : (
                        <div>
                            {renderVanElements(vans)}
                        </div>
                    )
                }
                {/*<React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>*/}
            </section>
        </>
    )
}
