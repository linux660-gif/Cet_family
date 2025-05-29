//import { eventListeners } from "@popperjs/core";
//import Signup from "./SignLogin";

function Navbar(){
    return(
        //add a dark theme icon,logged in place holder. 
        <>
      
<nav className = "navbar navbar-expand-lg bg-body-tertiary" >

  <div className = "container-fluid" >
    < a className = "navbar-brand" href="/" >  CET FAMILY </a>

    <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className = "navbar-toggler-icon"></span>
    </button>

    <div className = "collapse navbar-collapse" id="navbarNav">
      <ul className =" navbar-nav">

        <li className = "nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li className = "nav-item">
          <a className="nav-link" href="Ministries">Ministries</a>
          </li>

        <li className = "nav-item">
          <a className="nav-link" href="Committees">Committees</a>
        </li>

        <li className = "nav-item">
          <a className="nav-link" aria-disabled="true" href="About">About</a>
        </li>

        <li className = "Login" >
            <a href="login"><button type="button" className="btn btn-primary" >Log in</button></a>
        </li>

        <li className = "Signup">
            <a href = "signup" ><button type="button" className="btn btn-light">Sign Up</button></a>        </li>

        <li className = "notificationicon">
          <button className="notificationbutton">
                     <svg xmlns = "http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                     <path d = "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/></svg>
                    <span className="badge">3</span>
          </button>
        </li>

         <li className = "settingicon">
          <button className="settingbutton">
             <span class="material-symbols-outlined"> settings </span>
          </button>
        </li>


      </ul>

    </div>

  </div>

</nav>
        </>

    )
}

export default Navbar;