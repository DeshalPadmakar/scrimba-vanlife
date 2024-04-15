
// ================== Firebase Auth ==================

import { app } from "../api"
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth"

export const auth = getAuth(app)


// ================== React ==================

import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "", userName: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const [isNewUser, setIsNewUser] = React.useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from || "/host"

    function toggleIsNewUser() {
        setIsNewUser(prevIsNewUser => !prevIsNewUser)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        if(isNewUser) signUp()
        else signIn()
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function signUp() {
        const { email, password, userName } = loginFormData
        createUserWithEmailAndPassword(auth, email, password)
            .then( userCredential => {
            })
            .catch( error => {
                console.error(error.message)
                // show toast if error
            })
            .finally( () => {
                setStatus("idle")
                updateProfile(auth.currentUser, {
                    displayName: userName
                })
                .then( () => {
                    const {email, displayName, photoURL} = auth.currentUser
                    const user = {
                        email: email,
                        name: displayName,
                        photo: photoURL
                    }
                    localStorage.setItem("user", JSON.stringify(user))
                    navigate(from, { replace: true })
                } )
                .catch( error => console.log(error.message) )
            })
    }

    function signIn() {
        const {email, password} = loginFormData
        signInWithEmailAndPassword(auth, email, password)
            .then( userCredential => {
                const user = {
                    email: userCredential.user.email,
                    name: userCredential.user.displayName,
                    photo: userCredential.user.photoURL
                }
                localStorage.setItem("user", JSON.stringify(user))
                navigate(from, { replace: true })
            })
            .catch( error => {
                console.log(error.code)
                // show toast if error
            })
            .finally( () => {
                setStatus("idle")
            })
    }

    return (
        <div className="h-screen px-4 pt-24 flex flex-col text-gray-950 ">
            {
                location.state?.message &&
                    <h3 className="text-center mb-2 text-red-500">{location.state.message}</h3>
            }
            <h1 className="text-center text-2xl font-bold tracking-wide ">{isNewUser ? "Sign Up" : "Sign In"}</h1>
            {
                error?.message &&
                    <h3 className="text-center my-2 text-red-500">{error.message}</h3>
            }

            <form onSubmit={handleSubmit} className="flex flex-col mt-6 gap-3">
                {isNewUser && 
                    <input
                        name="userName"
                        onChange={handleChange}
                        type="text"
                        placeholder="Full name"
                        value={loginFormData.userName}
                        required
                        className="text-gray-950 border-2 border-gray-400 rounded p-3 focus:outline-blue-600"
                    />
                }
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                    required
                    className="text-gray-950 border-2 border-gray-400 rounded p-3 focus:outline-blue-600"
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    required
                    className="text-gray-950 border-2 border-gray-400 rounded p-3 focus:outline-blue-600"
                />
                <button
                    disabled={status === "submitting"}
                    className="bg-blue-600 py-3 rounded-md mt-4 text-white font-bold tracking-wide"
                    >
                    {isNewUser 
                        ? status === "submitting" ? "Signing Up..." : "Sign Up"
                        : status === "submitting" ? "Logging In..." : "Log in"
                        
                    }
                </button>

                <div className="mt-8 text-center gap-8">
                    <p>{isNewUser ? "Already have an account?" : "New to #Vanline?"}</p>
                    <button
                        type="button"
                        className="text-blue-600 font-semibold mt-1 tracking-wide"
                        onClick={toggleIsNewUser}
                        >
                        {isNewUser ? "Sign In" : "Sign up"}
                    </button>
                </div>
                
            </form>
        </div>
    )

}