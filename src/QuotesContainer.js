import React, {useState, useEffect} from 'react'
import QuotesList from './QuotesList'
import AddQuote from './AddQuote'



const QuotesContainer = (props) =>{
    const [quotes,setQuotes] = useState([])

    useEffect(()=>{
        //console.log(localStorage.getItem('quotes') || [])  
        const result = JSON.parse(localStorage.getItem('quotes')) || []
        setQuotes(result)
    },[])

    useEffect(()=>{
        localStorage.setItem('quotes',JSON.stringify(quotes))
    },[quotes])//when quotes state changes this useEffect callback called

    const addItem = (quote) =>{
        const result=[quote, ...quotes]
        setQuotes(result)
    }

    const removeItem = (id) =>{
        const result = quotes.filter((quote)=>{
            return quote.id != id 
        })
        setQuotes(result)
    }

    const editItem = (quote) =>{
        const result = quotes.map((q)=>{
            if(q.id===quote.id){
                return {...q, ...quote}
            }else{
                return {...q}
            }
        })
        setQuotes(result)
    }
    return(
        <div>
            
            <QuotesList quotes={quotes} 
            removeItem={removeItem}
            editItem={editItem}
            />
            <AddQuote addItem={addItem}/>
        </div>
    )
} 

export default QuotesContainer