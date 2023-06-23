import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleOnChange=(event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    const handleLoClick=()=>{
        //console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const clearClick=()=>{
        //console.log("Lowercase was clicked");
        let newText="";
        setText(newText);
        props.showAlert("Cleared text","success");
    }
    const handleCopyClick=()=>{
        console.log("I m copied")
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard ","success");
    }
    const handleExtClick=()=>{
        console.log("Extra")
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed  ","success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("You are listening to your text  ","success");
    }
   
    const[text,setText]=useState("");
  return (
    <>
    <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
        <h1>Write text here to play with</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?"rgb(99 99 103)":"white",color : props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleUpClick}>UPPERCASE</button>
        <button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleLoClick}>lowercase</button>
        <button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleExtClick}>Remove extra spaces</button>
        <button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy</button>
        <button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={clearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={speak}>Listen</button>
        
    </div>
    <div className={`container text-${props.mode==="light"?"dark":"light"  } my-3`}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>Average time of {.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes to read this</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}