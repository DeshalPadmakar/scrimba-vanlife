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
        <div className="mt-24 mx-4 min-h-[calc(100vh-96px)]">
            <nav className="flex gap-4 text-gray-950">
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                    className="hover:text-blue-600 hover:underline hover:decoration-blue-600 hover:underline-offset-[12px] hover:decoration-2 "
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="income"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    className="hover:text-blue-600 hover:underline hover:decoration-blue-600 hover:underline-offset-[12px] hover:decoration-2 "
                >
                    Income
                </NavLink>
                
                <NavLink
                    to="vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    className="hover:text-blue-600 hover:underline hover:decoration-blue-600 hover:underline-offset-[12px] hover:decoration-2 "
                >
                    Vans
                </NavLink>

                <NavLink
                    to="reviews"
                    style={({ isActive }) => isActive ? activeStyles : null}
                    className="hover:text-blue-600 hover:underline hover:decoration-blue-600 hover:underline-offset-[12px] hover:decoration-2 "
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}