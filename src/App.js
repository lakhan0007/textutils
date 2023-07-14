import "./App.css";
// import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="TEXTUTILS" about="ABOUTUS"></Navbar>
      <div className="container my-3" >
        <Form heading="Enter the text to analyze below" />
        {/* <About About="About Us"></About> */}
      </div>
    </>
  );
}

export default App;
