import { useState } from 'react';
import './Appa.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextAreaWrapper from './Components/TextArea/TextAreaWrapper';
import About from './Components/About';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled","success")
     
  }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")
    }
  }

  return (
    <div>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert= {alert} />

    <div className="container" style ={{marginTop: '2rem'}}>
    <Routes>
          <Route exact path="/about" element = {<About mode={mode} />}/>
          <Route exact path="/TextUtils" element = {<TextAreaWrapper showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
    </Routes> 
   
    </div>
    </Router>
    </div>
  );
}

export default App;
