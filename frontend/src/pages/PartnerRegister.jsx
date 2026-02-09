import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom' 

export default function PartnerRegister() {
const navigate= useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    contactname: "",
    phonenumber: "",
    address: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post("http://localhost:3000/api/auth/user/foodpartner/signup", form,{withCredentials:true})
      alert("Signup Successful ✅")
      console.log(res.data)
      navigate('/')
        
    } catch (err) {
      
      console.log(err)
      console.log(err.response) // backend error console.log(err.message) // network error alert(err.message)
      alert("Signup Failed ❌")
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Partner Signup</h2>
          <div className="auth-sub">
            Create a partner account to list meals and receive orders.
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>

          <div className="field">
            <label>Business name</label>
            <input name="name" type="text" placeholder="Joe's Kitchen" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Business email</label>
            <input name="email" type="email" placeholder="partner@shop.com" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Contact name</label>
            <input name="contactname" type="text" placeholder="Owner / Manager name" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Phone</label>
            <input name="phonenumber" type="tel" placeholder="+91 98765 43210" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Address</label>
            <input name="address" type="text" placeholder="123 Main St, City, State" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Password</label>
            <input name="password" type="password" placeholder="Create a password" onChange={handleChange} />
          </div>

          <div className="actions">
            <button className="btn">Create account</button>
          </div>

        </form>

        <div className="auth-switch">
          Already have a user account? <Link to="/user/login">User Sign in</Link>
        </div>

        <div className="auth-switch">
          Or register as a customer: <Link to="/user/register">User Signup</Link>
        </div>

      </div>
    </div>
  )
}
