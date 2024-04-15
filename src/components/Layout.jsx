import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen selection:bg-blue-300 max-w-[500px] mx-auto bg-white">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}