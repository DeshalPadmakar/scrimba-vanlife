import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const activeStyles = {
        color: "#2563eb",
        fontWeight: "bold",
        textDecoration: "underline",
        textUnderlineOffset: "12px",
        textDecorationThickness: "2px"
    }

    return (
        <div className="mt-24 mx-4 min-h-[calc(100vh-96px)] md:mx-8 lg:mx-10">
            <nav className="flex gap-4 lg:gap-6 text-gray-950">
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                    className="hover:text-blue-600 hover:underline hover:decoration-blue-600 hover:underline-offset-[12px] hover:decoration-2 md:text-[1.1rem]"
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="income"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    className="hover:text-blue-600 hover:underline hover:decoration-blue-600 hover:underline-offset-[12px] hover:decoration-2 md:text-[1.1rem]"
                >
                    Income
                </NavLink>
                
                <NavLink
                    to="vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    className="hover:text-blue-600 hover:underline hover:decoration-blue-600 hover:underline-offset-[12px] hover:decoration-2 md:text-[1.1rem]"
                >
                    Vans
                </NavLink>

                <NavLink
                    to="reviews"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    className="hover:text-blue-600 hover:underline hover:decoration-blue-600 hover:underline-offset-[12px] hover:decoration-2 md:text-[1.1rem]"
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}