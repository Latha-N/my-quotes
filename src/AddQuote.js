import React from 'react'
import QuoteForm from './QuotesForm'

const AddQuote = (props) =>{
    const {addItem} = props

    const formSubmission = (formData) =>{
        addItem(formData)
    }
    return(
        <div>
            <h1>Add Quotes</h1>
            <QuoteForm formSubmission={formSubmission}/>
        </div>
    )
}

export default AddQuote