import { Link } from "react-router-dom"
const Navigation = () => {
    return (
        <>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/sport">Sport</Link>
        </>
    )
}
export default Navigation