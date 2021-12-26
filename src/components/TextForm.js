import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const onChangeText = (event) => {
    console.log("onChangeText clicked!");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    console.log("handleUpClick clicked!");
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Text has been converted into UpperCase","success")
  };
  const handleLowClick = () => {
    console.log("handleLowClick clicked!");
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Text has been converted into LowerCase","success")
  };
  const handleTitleClick = () => {
    console.log("handleTitleClick clicked!");
    let titleCase= text.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
    setText(titleCase);
    props.showAlert("Text has been converted into TitleCase","success")
  };
  const handleClearClick = () => {
    console.log("handleClearClick clicked!");
    setText('');
    props.showAlert("Text has been cleared","success")
  };
  return (
    <>
    <div className={`container ${props.mode==='dark'?'text-light':'text-dark'}`} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={onChangeText}
          value={text}
         // placeholder="Enter your text here."
          style={{backgroundColor:props.mode==='dark'?'rgb(7 62 116 / 94%)':'white',
                  color:props.mode==='dark'?'white':'dark'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        Convert To LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleTitleClick}>
        Convert To TitleCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear
      </button>
    </div>
    <div className={`container ${props.mode==='dark'?'text-light':'text-dark'} my-3`}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{text.length===0?0:0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text to preview it"}</p>
    </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string,
  mode:PropTypes.string
};
TextForm.defaultProps = {
  heading: "No Heading",
};
