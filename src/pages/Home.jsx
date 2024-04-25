import React from "react"
import { Link } from "react-router-dom"

// react icons
import { TbTruckReturn } from "react-icons/tb"
import { BiPaperPlane } from "react-icons/bi"
import { VscCallOutgoing } from "react-icons/vsc"
import { PiCoinsDuotone } from "react-icons/pi"

// images
import exploreVan from "../assets/images/home-page-explore-van.jpg"
import rentVan from "../assets/images/home-page-rent-van.jpg"

export default function Home() {
    return (
        <>
            <section className="home-container h-screen bg-homePage text-white flex text-center bg-center bg-cover bg-no-repeat px-8 md:px-12">
                <div className="flex flex-col items-center justify-center gap-5 m-auto lg:w-[750px]">
                    <h1 className=" text-4xl md:text-[2.7rem] xl:text-[3.35rem] font-extrabold leading-tight tracking-wide xl:tracking-wider">You got the travel plans, we got the travel vans.</h1>
                    <p className="text-slate-50 md:text-lg xl:text-xl xl:mt-2 xl:leading-relaxed">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <Link to="vans" className="bg-blue-600 hover:bg-blue-700 active:bg-blue-600 transition w-full px-28 py-3 font-bold text-lg md:text-xl xl:text-2xl tracking-wide rounded-md md:w-auto  md:tracking-wider">Find your van</Link>
                </div>
            </section>

            <section role="customer service" className="text-gray-950 px-4 md:px-8 lg:px-0 xl:px-0 py-20 xl:py-28 lg:max-w-[900px] xl:max-w-[1300px] lg:mx-auto">
                <h2 className="text-center font-bold text-[1.6rem] md:text-[2rem] xl:text-4xl tracking-wide leading-snug md:text-gray-900 mb-8 md:mb-12 xl:mb-16">The leading road trip service in India</h2>
                <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 md:gap-8">
                    <li className="flex items-start gap-5">
                        <div>
                            <TbTruckReturn className="text-blue-600 text-4xl md:text-[2.3rem] mt-0"/>
                        </div>
                        <div>
                            <h3 className="font-semibold tracking-wide mb-0.5 xl:mb-1.5 md:text-[1.1rem] xl:text-xl md:font-semibold md:leading-snug">Flexible cancellation up to 72h prior to your journey</h3>
                            <p className="text-gray-800 text-sm leading-normal md:text-base">Cancel your trip for a full refund up to 20 days or opt for an 85% value voucher up to 72h before your pick-up date!</p>
                        </div>
                    </li>

                    <li className="flex items-start gap-5">
                        <div>
                            <BiPaperPlane className="text-blue-600 text-4xl md:text-[2.3rem] mt-1.5 md:mt-1"/>
                        </div>
                        <div>
                            <h3 className="font-semibold tracking-wide mb-0.5 xl:mb-1.5 md:text-[1.1rem] xl:text-xl md:font-semibold">One-way trips are available</h3>
                            <p className="text-gray-800 text-sm leading-normal md:text-base">Discover India effortlessly with one-way trips from the Himalayas to Kanyakumari. Start your adventure today and explore the diverse landscapes.</p>
                        </div>
                    </li>

                    <li className="flex items-start gap-5">
                        <div>
                            <VscCallOutgoing className="text-blue-600 text-4xl md:text-[2.3rem] mt-2"/>
                        </div>
                        <div>
                            <h3 className="font-semibold tracking-wide mb-0.5 xl:mb-1.5 md:text-[1.1rem] xl:text-xl md:font-semibold">RAC Breakdown Cover</h3>
                            <p className="text-gray-800 text-sm leading-normal md:text-base">Our collaboration with RAC ensures 24/7 nationwide breakdown coverage to ensure your adventure stays on course.</p>
                        </div>
                    </li>

                    <li className="flex items-start gap-5">
                        <div>
                            <PiCoinsDuotone className="text-blue-600 text-4xl md:text-[2.3rem] mt-0.5 md:mt-0"/>
                        </div>
                        <div>
                            <h3 className="font-semibold tracking-wide mb-0.5 xl:mb-1.5 md:text-[1.1rem] xl:text-xl md:font-semibold">Book now, pay later!</h3>
                            <p className="text-gray-800 text-sm leading-normal md:text-base">With our highly flexible cancellation policy for campervans, you're only required to pay the complete booking amount 20 days before your trip begins.</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="px-4 md:px-8 pb-20 text-gray-950 lg:px-0">
                <div className="rounded-md overflow-hidden shadow-md bg-blue-100 grid md:grid-cols-2 lg:rounded-none">
                    <div className="h-[250px] md:h-[auto]">
                        <img src={exploreVan} alt="photo of a yellow van parked in parking lot, sea on background" className="w-full h-full object-cover"/>
                    </div>
                    <div className="px-6 md:px-8 py-10 lg:max-w-[500px] xl:max-w-[600px] lg:place-self-center">
                        <h2 className="text-[1.7rem] md:text-3xl xl:text-4xl font-bold tracking-wide md:leading-snug xl:leading-[1.4]">Check out all of the Vanlife models!</h2>
                        <p className="text-gray-800 mt-4 mb-10 leading-normal xl:text-lg">Explore our range of Vanlife Camper models and locate your ideal travel home that fulfills all your desires and turns your travel dreams into reality. We provide a varied assortment of campervans from well-known manufacturers such as Knaus, Fiat, VW, and many others.</p>
                        <Link to="vans" className="text-white xl:text-lg bg-blue-600 font-bold tracking-wide w-full block text-center py-3 rounded-md hover:bg-blue-700 active:bg-blue-600 lg:w-[320px] xl:w-[350px] lg:mx-auto">Find your van</Link>
                    </div>
                </div>

                <div className="mt-10 md:mt-12 rounded-md overflow-hidden shadow-md bg-blue-100 grid md:grid-cols-2 lg:rounded-none lg:mt-0">
                    <div className="h-[250px] md:h-[auto] md:order-1">
                        <img src={rentVan} alt="photo of van parked in driveway" className="w-full h-full object-cover object-bottom"/>
                    </div>
                    <div className="px-6 md:px-8 py-10 lg:max-w-[500px] xl:max-w-[600px] lg:place-self-center">
                        <h2 className="text-[1.7rem] md:text-3xl xl:text-4xl font-bold tracking-wide leading-[1.4] md:leading-snug xl:leading-[1.4]">Do you own a campervan?<br /> Generate more than ₹50,000 monthly!</h2>
                        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold"></h2>
                        <p className="text-gray-800 mt-4 mb-10 leading-normal xl:text-lg">Have you thought about generating income during the times when your campervan is not in use? Register your vehicle for free and make it available for rent whenever you choose.</p>
                        <Link to="." className="text-white xl:text-lg bg-blue-600 font-bold tracking-wide w-full block text-center py-3 rounded-md hover:bg-blue-700 active:bg-blue-600 lg:w-[320px] xl:w-[350px] lg:mx-auto">Rent out my campervan</Link>
                    </div>
                </div>
            </section>
        </>
    )
};