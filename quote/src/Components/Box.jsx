import { useEffect, useState } from "react"

const Box = () => {
    const [quote, setQuote] = useState([])
    useEffect(() => {
      ()=>  fetch('https://www.quotepub.com/api/widget/?type=rand&limit=1',{
            method:'GET',
            mode:'cors',
            headers:'headers'
    
        })
        .then(res => res.json())
        .then(ans => {
           return console.log(ans)
        })
        .catch(err => console.log(err))
        .th
    }, [])
    return(
        <div>
            <h1>{quote}</h1>
        </div>
    )
}

export {Box}