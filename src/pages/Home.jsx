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
            <section className="home-container h-screen bg-homePage text-white flex flex-col items-center justify-center text-center bg-center bg-cover bg-no-repeat px-8 gap-5">
                <h1 className=" text-4xl font-extrabold leading-tight tracking-wide">You got the travel plans, we got the travel vans.</h1>
                <p className="text-slate-50">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="vans" className="bg-blue-600 w-full py-3 font-bold text-lg tracking-wide rounded-md">Find your van</Link>
            </section>

            <section role="customer service" className="px-4 py-20">
                <h2 className="text-center font-bold text-2xl mb-8">The leading road trip service in India</h2>
                <ul className="flex flex-col gap-4">
                    <li className="flex items-start gap-5">
                        <div>
                            <TbTruckReturn className="text-blue-600 text-4xl mt-1"/>
                        </div>
                        <div>
                            <h3 className="font-medium mb-0.5">Flexible cancellation up to 72h prior to your journey</h3>
                            <p className="text-slate-700 text-sm leading-normal">Cancel your trip for a full refund up to 20 days or opt for an 85% value voucher up to 72h before your pick-up date!</p>
                        </div>
                    </li>

                    <li className="flex items-start gap-5">
                        <div>
                            <BiPaperPlane className="text-blue-600 text-4xl mt-1.5"/>
                        </div>
                        <div>
                            <h3 className="font-medium mb-0.5">One-way trips are available</h3>
                            <p className="text-slate-700 text-sm leading-normal">Collect and return your campervan at over 70 locations spanning North America, Europe, and Oceania.</p>
                        </div>
                    </li>

                    <li className="flex items-start gap-5">
                        <div>
                            <VscCallOutgoing className="text-blue-600 text-4xl mt-2"/>
                        </div>
                        <div>
                            <h3 className="font-medium mb-0.5">RAC Breakdown Cover</h3>
                            <p className="text-slate-700 text-sm leading-normal">Our collaboration with RAC ensures 24/7 nationwide breakdown coverage to ensure your adventure stays on course.</p>
                        </div>
                    </li>

                    <li className="flex items-start gap-5">
                        <div>
                            <PiCoinsDuotone className="text-blue-600 text-4xl mt-0.5"/>
                        </div>
                        <div>
                            <h3 className="font-medium mb-0.5">Book now, pay later!</h3>
                            <p className="text-slate-700 text-sm leading-normal">With our highly flexible cancellation policy for campervans, you're only required to pay the complete booking amount 20 days before your trip begins.</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="px-4 pb-20 ">
                <div className="rounded-md overflow-hidden shadow-md bg-blue-100">
                    <img src={exploreVan} alt="photo of a yellow van parked in parking lot, sea on background" className="w-full h-[250px] object-cover"/>
                    <div className="px-4 py-6">
                        <h2 className="font-bold text-2xl">Check out all of the Vanlife models!</h2>
                        <p className="mt-4 mb-10 leading-normal text-slate-700">Explore our range of Vanlife Camper models and locate your ideal travel home that fulfills all your desires and turns your travel dreams into reality. We provide a varied assortment of campervans from well-known manufacturers such as Knaus, Fiat, VW, and many others.</p>
                        <Link to="vans" className="w-full block text-center bg-blue-600 text-white py-3 font-bold  tracking-wide rounded-md">Find your van</Link>
                    </div>
                </div>

                <div className="mt-12 rounded-md overflow-hidden shadow-md bg-blue-100">
                    <img src={rentVan} alt="photo of van parked in driveway" className="w-full h-[250px] object-cover object-bottom"/>
                    <div className="px-4 py-6">
                        <h2 className="font-bold text-2xl">Do you own a campervan ?</h2>
                        <h2 className="font-bold text-2xl">Generate more than ₹50,000 monthly!</h2>
                        <p className="mt-4 mb-10 leading-normal text-slate-700">Have you thought about generating income during the times when your campervan is not in use? Register your vehicle for free and make it available for rent whenever you choose.</p>
                        <Link to="." className="w-full block text-center bg-blue-600 text-white py-3 font-bold  tracking-wide rounded-md">Rent out my campervan</Link>
                    </div>
                </div>
            </section>
        </>
    )
};