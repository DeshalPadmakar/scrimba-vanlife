import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <React.StrictMode>
            <div className="flex flex-col bg-white min-h-screen selection:bg-blue-300">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </React.StrictMode>
    )
}