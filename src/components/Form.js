import React, {useState} from "react";

// console.log(object)

export default function Form(props) {
    const handelUpClick = () => {
        console.log("UpperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
}
    const handelLcClick = () => {
        console.log("LowerCase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
}
    const handelClearClick = () => {
        console.log("ClearText was clicked")
        let newText = ''
        setText(newText)
}
    const handelCopy = () => {
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
}
   const handelExtraSpaceRemove = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}

    const handelOnChange = (e) => {
        setText(e.target.value)
    }

    const [text, setText] = useState('')

  return (
    <>
      <div className="container" style={{color: props.mode==='dark' ? 'white':'#042734'}}>
        <h2>{props.heading}</h2>
        <textarea className="form-control my-3" id="myBox" onChange={handelOnChange} style={{backgroundColor: props.mode==='dark' ? 'gray':'white', color: props.mode==='dark' ? 'white':'#042734'}} rows="8" value={text}></textarea>
        <button className="btn btn-primary mx-2" onClick={handelUpClick}> Convart to Uppercase</button>
        <button className="btn btn-secondary mx-2" onClick={handelLcClick} > Convart to Lowercase</button> 
        <button className="btn btn-danger mx-2" onClick={handelClearClick} > Clear text</button> 
        <button className="btn btn-success mx-2" onClick={handelCopy} > Copy text</button> 
        <button className="btn btn-dark mx-2" onClick={handelExtraSpaceRemove} >Space Remove</button> 
      </div>
      <div className="container my-4" style={{color: props.mode==='dark' ? 'white':'#042734'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something in the textbox above the preview it here'}</p>
      </div>
    </>
  );
}
