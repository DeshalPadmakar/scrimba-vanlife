import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className=" text-gray-950 h-screen text-center flex flex-col justify-center items-center gap-6 mx-4">
            <h1 className="text-2xl sm:text-3xl font-bold">Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className="bg-gray-900 font-bold tracking-wide text-white w-full sm:w-fit sm:px-6 py-3 rounded-md">Return to Home</Link>
        </div>
    )
}
