import React from "react"
import bgImg from "../assets/images/about.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="mt-16">
            <div className="h-[250px] bg-aboutPage bg-cover flex">
                <h1 className="m-auto text-slate-50 text-4xl font-bold tracking-wide">About us</h1>
            </div>
            <div className="px-4 pt-8 pb-12">
                <div className="text-slate-700 ">
                    <h2 className="text-2xl font-bold leading-normal text-slate-950 bg-blue border-b border-slate-200 pb-8">Don't squeeze in a sedan when you could relax in a van.</h2>
                    <p className="mt-8">Welcome to <span className="font-bold">#VANLIFE</span>, your one-stop destination for campervan adventures. Whether you're a seasoned campervan enthusiast or a curious newcomer, we're here to make your road trip dreams a reality.</p>
                    <p className="mt-4">At Vanlife, we believe in the transformative power of van life. It's an opportunity to escape the ordinary, embrace the open road, and connect with nature on a deeper level. It's about forging new paths, discovering hidden gems, and creating memories that will last a lifetime.</p>

                    <h3 className="mt-8 text-normal text-slate-900 font-bold">Rent a Campervan</h3>
                    <p className="">Our comprehensive fleet of campervans caters to every need and budget. From compact pop-top vans to spacious motorhomes, we have the perfect vehicle to suit your adventure plans. Each campervan is meticulously maintained and equipped with all the essentials for a comfortable and enjoyable journey.</p>

                    <h3 className="mt-8 text-normal text-slate-900 font-bold">Host Your Campervan</h3>
                    <p className="">If you own a campervan that's not in constant use, why not share it with others and earn some extra income? With #VANLIFE, you can list your campervan for rent and reach a wide network of potential renters. We handle the booking process, payments, and insurance, so you can sit back and relax while earning passive income.</p>

                    <h3 className="mt-8 text-normal text-slate-900 font-bold">Our Community</h3>
                    <p className="">Join our vibrant community of campervan enthusiasts and connect with fellow adventurers. Share your experiences, exchange tips, and discover new destinations along the way. We're here to support you every step of your van life journey.</p>

                    <h3 className="mt-8 text-normal text-slate-900 font-bold">Embrace the #VANLIFE Experience</h3>
                    <p className="">#VANLIFE is more than just renting a campervan; it's a lifestyle. It's about embracing the freedom of the open road, exploring new horizons, and living life on your own terms. Let us be your guide as you embark on your unforgettable #VANLIFE adventure.</p>
                </div>
                <div className="font-bold text-2xl bg-blue-100 p-8 mt-12 rounded overflow-hidden">
                    <h3>Your destination is waiting.<br />Your van is ready.</h3>
                    <Link className="mt-4 font-semibold text-lg bg-blue-600 text-white px-4 py-2 rounded-md inline-block" to="/vans">Explore our vans</Link>
                </div>
            </div>
        </div>
    );
}