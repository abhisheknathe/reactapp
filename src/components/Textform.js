import React, {useState} from "react";

export default function Textform(props) {

  const[myText,textSetter] = useState();

  const handleOnChange = (event) => {
    textSetter(event.target.value)
  }

  const convertToUpperCase = () => {
    let upperCaseConverted = myText.toUpperCase();
    textSetter(upperCaseConverted);
    console.log('1')
  }

  const convertToLowerCase = () =>{
    let lowerCaseConverted = myText.toLowerCase();
    textSetter(lowerCaseConverted);
    console.log('2')
  }

  const clearText = () =>{
    textSetter("");
    console.log('2')
  }

  return (
    <>
      <div className="mb-3">
        <h3>{props.heading}</h3>
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" id="myBox" value={myText} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <div className="container">
        <div className="btn btn-primary my-2 mx-3" onClick={convertToUpperCase}>Convert To Upper Case</div>
        <div className="btn btn-primary my-2 mx-3" onClick={convertToLowerCase}>Convert To Lower Case</div>
        <div className="btn btn-primary my-2 mx-3" onClick={clearText}>Clear Text</div>
        
      </div>
    </>
  );
}
