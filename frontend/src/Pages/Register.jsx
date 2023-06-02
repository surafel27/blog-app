import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
const Register = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
    });
    const [err, setError] = useState(null)
    const navigate = useNavigate()

const handleChange = e =>{
setInputs(prev=>({ ...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Axios.post("http://localhost:8800/api/auth/register", inputs)
      navigate('/login')
    console.log(res)
    } catch(err) {
        setError(err.response.data)
    }
}
    return ( 
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder="Full Name" name="fullName" onChange={handleChange} />
                <input required type="email" placeholder="Email" name="email" onChange={handleChange} />
                <input required type="text" placeholder="Phone Number" name="phoneNumber" onChange={handleChange} />
                <input required type="password" placeholder="password" name="password" onChange={handleChange} />
                <button onClick={handleSubmit}>Register</button>
               {err && <p>{err}</p>}
                <span>Do you have an account? <Link to="/login">Register</Link></span>
            </form>
        </div>
    )
}
export default Register;