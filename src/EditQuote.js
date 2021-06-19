import React from 'react'
import QuoteForm from './QuotesForm'

const EditQuote = (props) =>{
    const {id,name,body,editItem, handleToggle} = props
    
    const formSubmission = (formData) =>{
        editItem(formData)
    }
    return(
        <div>
            <h2>Edit Quotes</h2>
            <QuoteForm 
            id={id}
            name={name}
            body={body}
            formSubmission={formSubmission}
            handleToggle={handleToggle}
            />
        </div>
    )
}

export default EditQuote