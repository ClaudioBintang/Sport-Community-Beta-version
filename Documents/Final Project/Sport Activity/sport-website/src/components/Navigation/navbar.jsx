import { Link } from "react-router-dom"
const Navigation = () => {
    return (
        <>
        <div className="flex justify-around items-center gap-5">
        <Link to="/" className="font-medium">Home</Link>
        <Link to="/sport" className="font-medium">Sport</Link>
        <Link to="/login" className="font-medium">Login</Link>
        <Link to="/register" className="font-medium">Register</Link>
        </div>
        </>
    )
}
export default Navigation