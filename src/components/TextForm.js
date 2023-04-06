import React from 'react'
import { useState } from 'react'
const TextForm = (props) => {
    
    const [text, textChange] = useState("");
    const handleOnClickUp = () =>{
       let newtext = text.toUpperCase();
       textChange(newtext);
       props.showAlert("success","Converted to upperCase")
    }
    const handleOnClickLow = () =>{
       let newtext = text.toLowerCase();
       textChange(newtext);
       props.showAlert("success","Converted to lowerCase")
    }
    const handleOnChange = (event) =>{
        textChange(event.target.value);
    }
    const handleOnClickClear =() =>{
        textChange('')
        props.showAlert("success","Text Cleared")
    }
    return (
        
        <>
            <div className="container mt-5 w-50">
            <h2>Enter text Here</h2>
            <div className="form-floating">
                <textarea className="form-control h-25" value={text} style={{backgroundColor: props.mode === 'dark'?'gray':'white'}} onChange={handleOnChange} placeholder="Leave a comment here"  id="floatingTextarea" rows="10"></textarea>
                <label htmlFor="floatingTextarea">Enter Text as in your mind</label>
            </div>
            <button type="button" className="btn btn-primary my-4" onClick={handleOnClickUp}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary my-4 mx-2" onClick={handleOnClickLow}>Convert to LowerCase</button>
            <button type="button" className="btn btn-primary my-4 mx-2" onClick={handleOnClickClear}>Clear</button>
            <h2>Your Final Result is:</h2>
            <p>{text.split(" ").length} Words and {text.length} Charcters Are Found</p>
            <h3>Preview</h3>
            <p>{text}</p>
            </div>

           
        </>
    )
}

export default TextForm
