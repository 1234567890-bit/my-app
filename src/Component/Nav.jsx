import AufgabenBearbeiten from "../Pages/AufgabenBearbeiten";
import ListeMitAufgaben from "./ListeMitAufgaben";
import { Outlet, Link } from "react-router-dom";

function Nav() {
    

    return  <div>
        <nav class="navbar bg-dark text-white ">
  <div class="container-fluid p-10 my-20">
    <ul class="navbar-nav">
    <li class="nav-item">
       
        <Link class="nav-link" to="/">Home</Link>
      </li>
      
      <li class="nav-item">
        
        <Link class="nav-link" to="/aufgabenAbhaken">Aufgaben abhaken</Link>
      </li>
      <li class="nav-item">
        
        <Link class="nav-link" to="/aufgabenHinzufuegen">Aufgaben hinzufügen</Link>
      </li>
      <li class="nav-item">
        
        <Link class="nav-link" to="/aufgabenLoeschen">Aufgaben löschen</Link>
      </li>
      <li class="nav-item">
       
        <Link class="nav-link" to="/aufgabenBearbeiten">Aufgaben bearbeiten</Link>
      </li>
    </ul>
   
  </div>
</nav>

    </div>;
  } 
  export default Nav;