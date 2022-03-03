import React from 'react'

export const Login = () => {

    let []

    return (
    <div>
        <h1>Welcome to Tooter</h1>
        <form >
        <p>Full Name</p>
        <input type="text" placeholder='Enter Your Name'/>
        <p>Email</p>
        <input type="email" placeholder='Enter Your Email'/>
        <p>Password</p>
        <input type="password" placeholder='A Strong Password'/>
        <br/>
        <br/>
        <input type="submit" value="Login" />
        </form>
    </div>
  )
}
