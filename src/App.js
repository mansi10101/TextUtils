import { useState } from 'react';
import './Appa.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import About from './Components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
    <>
    <Router>
    <Navbar title="TextUtils" aboutSite="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert= {alert} />
    {/* use "exact path" instead of "path" bcoz react might take u to partial location 
    /users ---> component 1
    /users/home ===> component 2  */}

    <div className="container">
    <Routes>
          <Route exact path="/about" element = {<About mode={mode} />}/>
          <Route exact path="/" element = {<Textarea showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
    </Routes> 
   
    </div>
    </Router>
    </>
  );
}

export default App;
