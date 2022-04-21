import {Link} from 'react-router-dom'
const Navbar =() => {
    return(
        <div style={{display:'flex', justifyContent:'center', gap:'2rem'}}>
            <Link style={{textDecoration:'none', padding:'1rem', color:'black', fontSize:'1.2rem', fontWeight:'600'}} to="/">Home</Link>
            <Link style={{textDecoration:'none', padding:'1rem', color:'black', fontSize:'1.2rem', fontWeight:'600'}} to="/about">About</Link>
            <Link style={{textDecoration:'none', padding:'1rem', color:'black', fontSize:'1.2rem', fontWeight:'600'}} to="/users">Users</Link>
        </div>
    )
}
export {Navbar}