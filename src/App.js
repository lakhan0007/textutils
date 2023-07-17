import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
// import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042734';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TEXTUTILS" about="ABOUTUS" mode={mode} toggleMode={toggleMode}></Navbar>
    
      <div className="container my-3" >
      
          
            <Form heading="Enter the text to analyze below" mode={mode}/>
     
       
        {/* <About About="About Us"/> */}
      </div>
      {/* <Alert alert='This is Alert'/> */}
     


      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form heading="Enter the text to analyze below" mode={mode}/>}></Route>
        <Route path='/about' element={<About About="About Us"/>}></Route>
      </Routes>

      </BrowserRouter> */}


    </>
  );
}




export default App;
