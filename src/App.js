import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
// import About from './components/About'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type,content) =>{
    setAlert({
      type: type,
      content:content
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#171e44';
      document.body.style.color = 'white';
      showAlert('success',"Dark mode has been enabled")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('success',"Light mode has been enabled")
    }
  }
  return (
  
    // <Router>
      <div>
        <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        {/* <Routes>
          <Route path='/about' element={<About/>}/> */}
          {/* <Route path='/' element={<TextForm mode={mode} showAlert={showAlert} />} /> */}
          <TextForm mode={mode} showAlert={showAlert} />
          
        {/* </Routes> */}
      </div>
    // </Router>
  

    
  )
}

export default App
