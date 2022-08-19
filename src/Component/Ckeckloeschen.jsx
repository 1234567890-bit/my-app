import { useState } from "react";

const Checkloeschen = ({ state }) => {

   function handleClick(e) {
    
    var array = [...state.Tasks];
    console.log(array)

array.splice(e, 1);
      this.setState({Tasks: array});
    //var removed = state.Tasks.splice(2, 1);
 console.log(state.Tasks)
      }

    function Checkbox(props) {

        return (
            <>
                <input type="checkbox" />
                <label>  {props.description}</label>  <button value="b" onClick={handleClick}>❌</button><br></br>
            </>
        )
    }

    return (
        <>
          
<ul>
          {state.Tasks.map((car) => <Checkbox key={car.id} description={car.description} />)}
         
                </ul>
        
  
        </>
      );
  } 
  export default Checkloeschen;