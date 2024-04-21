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
            <section className="text-gray-950 mt-12 lg:grid lg:grid-cols-2 lg:gap-6">
                <Link 
                    to="income" 
                    className="block bg-blue-100 lg:bg-blue-200 md:-mx-8 lg:mx-0 p-5 md:p-8 lg:p-10 rounded-t-md md:rounded-none hover:bg-blue-500 hover:text-white transition duration-200"
                    >
                    <div>
                        <h1 className="text-2xl md:text-3xl lg:text-[1.8rem] font-bold tracking-wide md:tracking-normal">Welcome!</h1>
                        <p className="mt-4 mb-2">Income (last 30 days)</p>
                        <h2 className="text-3xl md:text-[2.75rem] md:mt-6 font-bold">$2,260</h2>
                    </div>
                </Link>
                <Link 
                    to="reviews" 
                    className="block bg-blue-200 lg:bg-blue-100 md:-mx-8 lg:mx-0 p-5 md:p-8 lg:p-10 rounded-b-md md:rounded-none group hover:bg-blue-500 hover:text-white transition duration-200"
                    >
                    <div className="flex lg:flex-col items-center lg:items-start gap-6">
                        <h2 className="text-xl md:text-[1.4rem] lg:text-[1.8rem] font-semibold lg:font-bold lg:tracking-wide">Review score</h2>
                        <div className="flex items-center gap-1 lg:gap-2 md:text-lg lg:text-3xl lg:mt-auto">
                            <BsStarFill className="text-blue-500 md:text-2xl group-hover:text-white" />
                            <p className="md:mt-1">
                                <span className="font-bold">5.0</span>/5
                            </p>
                        </div>
                    </div>
                </Link>
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
