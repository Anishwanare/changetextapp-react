import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UPPERCASE','success')
    }
    
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase','success')
        
    }
    
    const handleClearClick = () => {
        let newText = ('');
        setText(newText);
        props.showAlert('Text has been clered','success')
        
    }
    
    const handleCopy=()=>{
        navigator.clipboard.writeText(text.value);
        // this syntax will help to copy to clipboard
        props.showAlert('Text has been copied','success')
    }

    const handleonchange = (event) => {
        // console.log('on change');
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');  // useState is a hook 

    return (
        <>
            <div className="container " style={{color: props.mode==='light'?'black':'white'}} >  {/* one bracket for js and another for object we used */}
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" onChange={handleonchange} rows="5" value={text} style={{background: props.mode==='light'?'white':'black',color:props.mode==='light'?'Black':'white'}} ></textarea>
                    <button disabled={text.length===0} className="btn btn-primary mt-1" onClick={handleUpClick}>To Upper Case</button>
                    <button disabled={text.length===0} className="btn btn-primary mt-1 mx-2" onClick={handleDownClick}>To Lower Case</button>
                    <button disabled={text.length===0} type="button" className="btn btn-danger mt-1 mt-1" onClick={handleClearClick}>Clear</button>                                      
                    <button disabled={text.length===0} className="btn btn-primary mt-1 mx-2" onClick={handleCopy}>Copy</button>                                    
                </div>
                {/* disabled used to desable , but we gave condtion until the length is zero button will disable */}
            </div>
            <div className="container my-3 " style={{color: props.mode==='light'?'black':'white'}}>
                <h1>Your text summary</h1>

                {/* .filter((element)=>{return.element.length!=0})===>used this when click on space->space should not count as word */}
                {/* filter() is a method in which we used a arrow function */}
                {/* using (/\s+/) will count the word when we shift to next line---> to check [/\s/] into --> [' ']  */}
                {/* <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} Words and {text.length} Alphabet and {text.split(/\r|\r\n|\n/).length} Line in a textbox</p> */}
               
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Alphabet and {text.split(/\r|\r\n|\n/).length} Line in a textbox</p>
                <p>{0.008*text.split(" ").length} minutes takes to read all words</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Write something in box"}</p>
                {/* when text length is less than 0 then it will show write........... */}
                
            </div>

        </>
    )
}

//-------------------------------lec-7//-------------------------------
// 1) firstly we have to make react function component (rfc)
// 2) then copy the content from bootstrap from line 16-20
// 3) and we have to add {useState} in import
// 4) then we have to use --> const [text , setText] = useState('Enter text here');
// 5) in our function component
// 6) text means which we use in useState()
// 7) setText is used to upadate or to change that we enter in text
// 8) for to click on button have to add--> onClick={xyz} on button, nd gave function name
// 9) using arrow function ->we will create a function of which we gave a name to onclick
// 10) here we gave condition to change to uppercase using [text,toUpperCase] , and assign to setText
// 11) then to enter any alphabet we will use --> onChange={abc}
// 12) then make arrow function of ==> abc  and gave (event) in open close paranthesis
// 13) using setText(event.target.text) , we are now elligible to enter
// point no. 11-13 is imp

//-------------------------------Lec-8-------------------------------
// line no 32-38
// we create class where we count number of word and sentences in text box
// for words we use ---> {text.split(" ").length}
// for alphabet we will use {text.length}
// line 35--> 125 words takes 1min to read, and one word will take--> 1/125 min equal to 0.008min
// then to calculate how much time will take to read all words we will use---> {0.008*text.split(" ").length}
// line 37 ---> display the whole content that we will use in textbox using--->{text}



