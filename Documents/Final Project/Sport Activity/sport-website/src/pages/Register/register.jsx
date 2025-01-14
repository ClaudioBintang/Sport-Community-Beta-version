import axios from "axios"
import Navigation from "../../components/Navigation/navbar"
import { useEffect } from "react"

const Register = () =>{
    const handleRegist = async() => {
        try {
            response = await axios.post('https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/register',{
                "email": "bintang7@gmail.com",
                "name": "bintang tujuh masuk angin",
                "password": "user#1234",
                "c_password":"user#1234",
                "role": "user",
                "phone_number": ""
            }
        )
            console.log(response);
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handleRegist()
    }, [])
    return (
        <>
        <Navigation/>
        <h2>register page</h2>
        </>
    )
}
export default Register