import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../Firebase/firebase'
import login from '../Login/login.module.css'

const Login = () => {
    const [userDetail, setUserDetail] = useState({
        email:'',
        password:''
    })
    function handleSubmit(event){
        event.preventDefault()
        const {name, value} = event.target

        setUserDetail({...userDetail,[name]:value});
    }
    // createUserWithEmailAndPassword(auth, email, password)
    // .then
    return(
        <div className={login.plain}>
            <h1>Memesta</h1>
            <form className={login.from}>
                
                <input name='email' placeholder='youremail@anycompany.com' className={login.input} type="text" onChange={ ()=>setUserDetail} value={userDetail.email}/>
                <br />
                <input name='password' placeholder='password' onChange={() => setUserDetail({...userDetail})} className={login.input} type="text" value={userDetail.password}/>
                <br />
                <input className={login.btn} type="submit" value="SEND ME A MAGIC LINK" />
            </form>
        </div>
    )
}

export {Login}