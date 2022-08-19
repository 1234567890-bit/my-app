
import './App.css';
import {  Routes, Route } from "react-router-dom";
import AufgabenBearbeiten from './Pages/AufgabenBearbeiten';
import AufgabenAbhaken from './Pages/AufgabenAbhaken';
import AufgabenHinzufuegen from './Pages/AufgabenHinzufuegen';
import AufgabenLoeschen from './Pages/AufgabenLoeschen';
import NotFound from './Component/NotFound';
import Home from './Pages/Home';


function App() {
  
    return (
        <div> 
    
        <Routes>
        <Route path="/"  element={<Home />}/>
         
          <Route path="/aufgabenBearbeiten" element={<AufgabenBearbeiten />} />
          <Route path="/aufgabenAbhaken" element={<AufgabenAbhaken/>} />
          <Route path="/aufgabenHinzufuegen" element={<AufgabenHinzufuegen/>} />
          <Route path="/aufgabenLoeschen" element={<AufgabenLoeschen/>} />
          <Route path="*" element={<NotFound />} />
        
      </Routes>
      </div>
    );
 
  
}

export default App;
