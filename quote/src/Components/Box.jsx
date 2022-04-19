import { useEffect, useState } from "react"

const Box = () => {
    const [quote, setQuote] = useState([])
    const [load, setLoad] = useState(true);
    function getUsers(){
        setLoad(false)
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(ans => {setQuote(ans) 
            setLoad(true) })
    }
    useEffect(() => {
        getUsers()
        
    }, [])
    

    return load === false?(<h1 style={{textAlign:'center', fontSize:'3rem'}}>🔃 Loading...</h1>):
        
        (<div className="main">
        
            {
               quote.map(user => {
                 return(
                     <section id="card" key={user.id}>
                          <img src={user.image}/>
                          <p>Price :${user.price}</p>
                          <h5>{user.title}</h5>  
                     </section>
                 )
               })
            }
        </div>)
        
    
    
}

export {Box}