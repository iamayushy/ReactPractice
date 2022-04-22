import login from '../Login/login.module.css'

const Login = () => {
    return(
        <div className={login.plain}>
            <h1>Memesta</h1>
            <form className={login.from}>
                
                <input placeholder='youremail@anycompany.com' className={login.input} type="text" />
                <p></p>
                <input className={login.btn} type="submit" value="SEND ME A MAGIC LINK" />
            </form>
        </div>
    )
}

export {Login}