import "./App.css";
import TextForm from "./component/TextForm";
import Navbar from "./component/Navbar";
import React, { useState } from 'react'
import Alert from "./component/Alert";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [changeBgName, setChangeBgName] = useState('Turn ON Dark Mode')  //this is dark/light mode name change (state to change )

  const [alert, setAlert] = useState(null)
  // here type means , alert has different type = warning, danger, success, alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null);
    }, 1500);
  }

  const [mode, setMode] = useState('light')  //check weather dark mode is enable or not.
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been activated', 'success')
      document.title = 'Word-counter-Dark mode'    //using this we change title dynamically
      //-------------------setInterval used to flash tile-------------------
      // setInterval(() => {
      //   document.title = 'The best Word counter '
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install our word counter for Android'
      // }, 1500);

      setChangeBgName('Turn OFF Dark Mode');
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been activated', 'success')
      document.title = 'Word-counter-Light mode'   //using this we change title dynamically
      setChangeBgName('Turn ON Dark Mode');
    }
  }

  return (
    <BrowserRouter>
      <div >
      <Navbar title="React-App" aboutText="About-us"  mode={mode} toggleMode={toggleMode} changeBgName={changeBgName}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* exact always use while using path  */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Transform letter or sentence"  mode={mode} />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
