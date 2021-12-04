
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Router
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, typ) => {
    setAlert({
      message: message,
      typ: typ
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#2d2e30';
      showAlert("DarkMode has been enaled", "primary");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been enaled", "warning");


    }
  }
  return (
    <>
        
        <Navbar title="React Js" mode={mode} toggleMode={toggleMode} />
        <div className="container mt-3"><Alert alert={alert} /></div>
        <div className="container mt-5"><TextForm data="Type here" mode={mode} /></div>
        {/* <div className="container mt-5"><About /></div> */}

    </>
  );
}

export default App;
