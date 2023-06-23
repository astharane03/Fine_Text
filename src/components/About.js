import React from 'react'

export default function About(props) {
    
  return (
    <div className="container " style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="my-3">About</h2>
        <div className="mb-3">
            <textarea className="form-control" value={'Fine Text is designed to be a free to use online text manipulator that you can use for efficiency and productivity gains. Whether you have to change the whole text to uppercase or lowercase or if you have mistakenly added extra spaces to your text or if you want to copy text then there is quick way to solve that.Fine Text also provide you the count of words and characters you added in your text.It gives you the preview of your text and also the average time to read your text.'} style={{backgroundColor:props.mode==='dark'?"rgb(99 99 103)":"white",color : props.mode==='dark'?'white':'black',fontSize:'22px'}} id="myBox" rows="5" onClick={null}></textarea>
        </div>
        
    </div>
  )
}