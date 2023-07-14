import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

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
        {/* <About About="About Us"></About> */}
      </div>
    </>
  );
}

export default App;
