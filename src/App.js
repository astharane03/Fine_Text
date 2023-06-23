import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
  <>
  <Router>
    <Navbar title="Fine Text" mode ={mode} toggleMode={toggleMode} about="About" home="Home"/>
    <Alert alert={alert}/>
    <div className="container my-5" >
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode}/>}></Route>
    </Routes>
      
    </div>
    </Router>
    
  </>
  );
}

export default App;