import { useEffect, useState } from "react"

const Box = () => {
    const [quote, setQuote] = useState([])
    function getUsers(){
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(ans => {setQuote(ans) })
    }
    useEffect(() => {
        getUsers()
    }, [])
    

    return(
        <div className="main">
        
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
        </div>
    )
}

export {Box}