import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"

// firebase
import { auth } from "../pages/Login"
import { signOut } from "firebase/auth"

// React icons
import { FaRegCircleUser } from "react-icons/fa6"
import { MdArrowOutward } from "react-icons/md"

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const activeStyles = {
        color: "#2563eb",
        fontWeight: "700",
        letterSpacing: "0.025em",
        backgroundColor: "#eff6ff",
        margin: "0 -1rem",
        padding: "0.5rem 1rem"
    }
    const user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()

    function toggleNav() {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    function signOutUser() {
        signOut(auth)
            .then(() => {
                localStorage.removeItem("user")
                toggleNav()
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <header className="w-full h-16 p-4 bg-white flex items-center fixed shadow-md max-w-[500px]">
            <nav className="w-full flex justify-between items-center gap-4">
                
                {/* logo */}
                <Link 
                    className=" text-3xl font-extrabold uppercase text-blue-600" to="/"
                    >
                    #VanLife
                </Link>

                {/* hamburger */}
                <button 
                    className={`z-10 order-1 outline-0`}
                    onClick={toggleNav}
                    >
                    <div 
                        className={`rounded w-7 h-[3px] bg-gray-500 duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${isOpen && "-rotate-45 translate-y-[5px]"}`}
                    >
                    </div>
                    <div 
                        className={`rounded w-7 h-[3px] bg-gray-500 my-1 duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${isOpen && "opacity-0"} `}>
                    </div>
                    <div 
                        className={`rounded w-7 h-[3px] bg-gray-500 duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${isOpen && "rotate-45 -translate-y-2"}`}>
                    </div>
                </button>

                {/* overlay */}
                <div 
                    className={`fixed top-0 left-0 w-screen min-h-screen bg-gray-800/25 backdrop-blur-sm ${!isOpen && "hidden"}`}
                    onClick={toggleNav}
                >
                </div>

                {/* mobil nav */}
                <div className={`text-gray-900 w-2/3 h-screen bg-white duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] fixed top-0 right-0 ${!isOpen ?  "translate-x-full" : "translate-x-0" }`}>
                    <div className="px-4 pt-4 pb-6 bg-blue-100 sm:hidden">

                        {user?.photo 
                            ? <img src={user.photo} alt="profile photo of user" className="w-[35px] h-[35px] mb-2"/>
                            : <FaRegCircleUser className="w-[35px] h-[35px] mb-2"/>
                        }
                        
                        <h1 className="text-lg font-bold tracking-wide">{user?.name ? `${user.name}` : "Guest"}</h1>
                        {user && <h1 className="text-sm tracking-wide">{user.email}</h1>}
                        {!user && 
                            <Link 
                                to="login" 
                                onClick={toggleNav}
                                className="block bg-blue-600 text-white text-center py-2 font-bold tracking-wide rounded-md mt-4"
                                >
                                Log in / Sign up
                            </Link>
                        }

                    </div>

                    <div className="mx-4">
                        <h1 className="text-2xl font-bold tracking-wide border-b pb-2 mt-6 mb-2.5">
                            Navigation <MdArrowOutward className="inline-block"/>
                        </h1>
                        <div className="flex flex-col text-xl ">
                            <NavLink
                                to="/"
                                style={({ isActive }) => isActive ? activeStyles : null}
                                onClick={toggleNav}
                                className="text-gray-900 py-2 font-normal"
                                >
                                Home
                            </NavLink>
                            <NavLink
                                to="/vans"
                                style={({ isActive }) => isActive ? activeStyles : null}
                                onClick={toggleNav}
                                className="text-gray-900 py-2 font-normal"
                                >
                                Vans
                            </NavLink>
                            {/* <NavLink
                                to="/host"
                                style={({ isActive }) => isActive ? activeStyles : null}
                                onClick={toggleNav}
                                className="text-gray-900 py-2"
                                >
                                Host
                            </NavLink> */}
                            <NavLink
                                to="/about"
                                style={({ isActive }) => isActive ? activeStyles : null}
                                onClick={toggleNav}
                                className="text-gray-900 py-2 font-normal"
                                >
                                About
                            </NavLink>
                        </div>

                        <h1 className="text-2xl font-bold tracking-wide border-b pb-2 mt-6 mb-2.5">
                            User <MdArrowOutward className="inline-block"/>
                        </h1>
                        <div className="flex flex-col text-xl">
                            <NavLink 
                                to="/host"
                                end
                                style={({ isActive }) => isActive ? activeStyles : null}
                                onClick={toggleNav}
                                className="text-gray-900 py-2 font-normal" 
                                >
                                Dashboard
                            </NavLink>
                            <NavLink 
                                to="/host/vans"
                                end
                                style={({ isActive }) => isActive ? activeStyles : null}
                                onClick={toggleNav}
                                className="text-gray-900 py-2 font-normal"
                                >
                                Your Vans
                            </NavLink>
                            <NavLink 
                                to="/host/income"
                                end
                                style={({ isActive }) => isActive ? activeStyles : null}
                                onClick={toggleNav}
                                className="text-gray-900 py-2 font-normal"
                                >
                                Income
                            </NavLink>
                            <NavLink 
                                to="/host/reviews"
                                end
                                style={({ isActive }) => isActive ? activeStyles : null}
                                onClick={toggleNav}
                                className="text-gray-900 py-2 font-normal"
                                >
                                Reviews
                            </NavLink>
                            {user && 
                                <button 
                                    onClick={signOutUser}
                                    className="text-gray-900 py-2 font-normal text-left"
                                    >
                                    Log out
                                </button>
                            }
                        </div>

                    </div>
                    
                </div>
            </nav>
        </header>
    )
}