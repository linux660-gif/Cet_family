
import Ministries from "./assets/Ministry";
import Navbar from "./assets/Navbar"
import ReactDOM from "react-dom/client";
import Home from "./assets/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/Login";
import Signup from "./assets/Signup";
//import FooterPage from "./assets/Footer";

function App() {
  
  return (
  <>
  <Navbar />

  <BrowserRouter>
  <Routes>
        <Route path="/" element = {<Home />} />
        <Route path = "ministries" element = {<Ministries />} />
         <Route path= "login" element = {<Login />} />
         <Route path="signup" element = {<Signup />} />

  </Routes>
   
       
    </BrowserRouter>

  
    </>
    
 
  )
}

export default App
