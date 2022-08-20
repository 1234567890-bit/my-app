import AufgabenBearbeiten from "../Pages/AufgabenBearbeiten";
import ListeMitAufgaben from "./ListeMitAufgaben";
import { Outlet, Link } from "react-router-dom";

function Nav() {
    

    return  <div>
<nav>
<ul className="ul">
  <li><a href="/">Home</a></li>
  <li><a href="/aufgabenAbhaken">Aufgaben abhaken</a></li>
  <li><a href="/aufgabenHinzufuegen">Aufgaben hinzufügen</a></li>
  <li><a href="/aufgabenLoeschen">Aufgaben löschen</a></li>
  <li><a href="/aufgabenBearbeiten">Aufgaben bearbeiten</a></li>
</ul>
</nav>
    </div>;
  } 
  export default Nav;