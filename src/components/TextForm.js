import React,{useState} from "react";

export default function TextForm(Props) {
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let uppercasetext = text.toUpperCase(); //To convert Upper Case
        setText(uppercasetext);
        Props.showAlert("Convert To uppercase","success");
    }
    const handleLoClick = () => {
      let uppercasetext = text.toLowerCase(); //To convert Upper Case
      setText(uppercasetext);
      Props.showAlert("Convert To lowercase","success");
  }

  const wordCounter = (words) => {
    let arr = words.split(" ");
    let count = 0;
    for(let i = 0;i<arr.length;i++){
      if(arr[i] === ""){
        continue;
      }
      else{
        count++;
      }
    }
    return count;
  }

  const copyText = () =>{
    // let text = document.getElementById("myBox");

    let txt = text;
    // text.select();
    navigator.clipboard.writeText(txt);
    Props.showAlert("Copied text to clipbord","success");
  }

  const extraSpaceRemove = () => {
    let newText = text.split(/[ ]+/);
    console.log(newText);
    setText(newText.join(" "));
    Props.showAlert("remove extra spaces","success");
  }
    const [text,setText] = useState("");
  return (
    <>
    <div className="container">
        <h1 style={{color:Props.mode === "dark"?"white":"black"}}>{Props.heading}</h1>
      <div className="mb-3">
        {/* <label htmlFor="myBox" className="form-label">
          Example textarea
        </label> */}
        <textarea
        style={{backgroundColor:Props.mode === "dark"?"#45558f":"white",color:Props.mode === "dark"?"white":"black"}}
        value={text}
        onChange={handleOnChange}
          className="form-control"
          placeholder="Enter text here"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-1 my-1">convert to uppercase</button>
      <button disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary mx-1 my-1">convert to lowecase</button>
      <button disabled={text.length===0} onClick={copyText} className="btn btn-primary mx-1 my-1">copy text</button>
      <button disabled={text.length===0} onClick={extraSpaceRemove} className="btn btn-primary mx-1 my-1">remove extra space</button>
    </div>
    <div className="container my-3">
      <h1 style={{color:Props.mode === "dark"?"white":"black"}}>Your text summary</h1>
      {/* <p style={{color:Props.mode === "dark"?"white":"black"}}>{wordCounter(text)} words and {text.length} characters</p> */}
      <p style={{color:Props.mode === "dark"?"white":"black"}}>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
      <p style={{color:Props.mode === "dark"?"white":"black"}}>{0.008 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} Minutes read</p>
      <h2 style={{color:Props.mode === "dark"?"white":"black"}}>Preview</h2>
      <p style={{color:Props.mode === "dark"?"white":"black"}}>{text}</p>
    </div>
    </>
  );
}
