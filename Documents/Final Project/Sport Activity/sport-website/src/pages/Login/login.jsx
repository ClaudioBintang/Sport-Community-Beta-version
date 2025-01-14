import { useState } from "react"
import Navigation from "../../components/Navigation/navbar"

const Login = () => {
    const [email, setEmail] = useState('')

    
    return (
        <>
        <Navigation/>
        <h2 className="text-2xl font-semibold">login page</h2>
        </>
    )
}
export default Login