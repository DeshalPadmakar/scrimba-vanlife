import React from "react"
import { Link } from "react-router-dom"

// accordion component
import Accordion from "./Accordion/index.jsx"

// react icons 
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"

export default function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="px-4 pt-16 grid gap-11 md:px-8 md:grid-cols-2 md:pb-6 lg:px-10"> 
                <section>
                    <h1 className="text-xl md:text-lg font-bold mb-2 md:mb-1 leading-none">#VANLIFE</h1>
                    <ul className="flex flex-col gap-1">
                        <li>
                            <Link to="about" className="hover:text-blue-600 text-sm">About us</Link>
                        </li>
                        <li>
                            <Link to="vans" className="hover:text-blue-600 text-sm">Vans</Link>
                        </li>
                        <li>
                            <Link to="host" className="hover:text-blue-600 text-sm">List your van</Link>
                        </li>
                        <li>
                            <Link to="contact" className="hover:text-blue-600 text-sm">Contact us</Link>
                        </li>
                    </ul>
                </section>

                <section role="FAQs" className="md:order-2">
                    <h1 className="text-xl md:text-lg font-bold mb-2 md:mb-1 leading-none">FAQs</h1>
                    <div className="">
                        <Accordion>
                            <Accordion.Title className="w-full">
                                Can I get a discount for last-minute hire?
                            </Accordion.Title>
                            <Accordion.Body>
                                Absolutely! We're all about spontaneous adventures. While we can't promise last-minute discounts, we do have some great deals for those who embrace the unexpected. Check out our current promotions and hit the road with a smile!
                            </Accordion.Body>
                        </Accordion>

                        <Accordion>
                            <Accordion.Title>
                                What if I need to cancel?
                            </Accordion.Title>
                            <Accordion.Body>
                                Change of plans? No worries! If you cancel 20 or more days before your pick-up, you get a full refund. For cancellations 72 hours to 20 days prior, choose between a 50% refund or a travel voucher (full value with a 15% fee). Unfortunately, within 72 hours, no refunds or vouchers. We appreciate your understanding and flexibility!
                            </Accordion.Body>
                        </Accordion>

                        <Accordion>
                            <Accordion.Title>
                                Can I return my campervan to a different location?
                            </Accordion.Title>
                            <Accordion.Body>
                                Yes, we offer one-way rentals for those who like to mix up their journey. Just let us know in advance, and we'll make sure your road trip ends right where you want it to.
                            </Accordion.Body>
                        </Accordion>
                    </div>
                </section>

                <section role="short summary about us" className="md:order-1">
                    <h1 className="text-xl md:text-lg font-bold mb-2 md:mb-1 leading-none">Vanlife</h1>
                    <p className="text-sm text-gray-700">Explore India's beauty at your own pace with our high-quality campervans. Whether renting or buying, our user-friendly platform ensures a seamless journey. Begin your unforgettable adventure today!</p>
                </section>

                <section role="newsletter section" className="md:order-3">
                    <h1 className="text-xl md:text-lg font-bold mb-2 md:mb-1 leading-none">Subscribe to our newsletter</h1>
                    <p className="text-sm text-gray-700" >Stay informed by subscribing to receive periodic notifications about the latest campervan rental promotions, exclusive deals, and informative news!</p>
                    <form className="flex flex-col gap-4 mt-4">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="E-mail" 
                            required
                            className="block text-sm w-full px-3 py-2 rounded-md outline-1 outline-gray-400 transition hover:bg-blue-100"
                        />
                        <button className="text-sm uppercase border px-3 py-2 rounded-md border-blue-600 text-blue-600 font-bold tracking-wider transition hover:text-white hover:bg-blue-600">subscribe</button>
                    </form>
                </section>
            </div>

            <section role="developer info" className="flex flex-col gap-2 py-8 mt-8 text-center bg-gray-800 text-sm text-gray-100">
                <p>Website developed by <span className="font-bold">Deshal Padmakar</span></p>
                <div className="flex gap-3 text-xl justify-center items-center">
                    <a href="mailto:cdeshalpadmakar@gmail.com"><IoMdMail className="hover:text-blue-200"/></a>
                    <a href="https://www.linkedin.com/in/deshalpadmakar/" target="_blank"><FaLinkedin className="hover:text-blue-200" /></a>
                    <a href="https://github.com/deshalpadmakar" target="_blank"><FaGithub className="hover:text-blue-200" /></a>
                    <a href="https://twitter.com/deshalpadmakar" target="_blank"><FaTwitter className="hover:text-blue-200" /></a>
                </div>
            </section>
        </footer>
    )
}