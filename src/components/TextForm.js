import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const [Text, SetText] = useState("");

  const handleUpClick = () => {
    const newText = Text.toUpperCase();
    SetText(newText);
    props.showAlert("Uppercase", "success");
  };

  const handleLoClick = () => {
    const newText = Text.toLowerCase();
    SetText(newText);
    props.showAlert("Lower Case", "success");
  };

  const handleClearClick = () => {
    const newText = "";
    SetText(newText);
    props.showAlert("Cleared", "success");
  };

  const handleRevClick = () => {
    const newText = Text.split("").reverse().join("");
    SetText(newText);
    props.showAlert("Reversed", "success");
  };

  const handleOnChange = (event) => {
    SetText(event.target.value);
  };

 


  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> {props.title} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={Text}
            onChange={handleOnChange}
            placeholder="Enter Here"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRevClick}>
          Reverse Text
        </button>
      </div>

      <div
        className="container my-1"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {Text.trim() === "" ? 0 : Text.trim().split(/\s+/).length} Words and{" "}
          {Text.length} Characters{" "}
        </p>
      </div>

      <div
        className="container my-1"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Preview</h1>
        <p> {Text} </p>
      </div>
    </>
  );
}
