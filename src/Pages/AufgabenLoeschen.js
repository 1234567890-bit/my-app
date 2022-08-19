import React, { useState } from "react";
import Nav from "../Component/Nav";
import Checkloeschen from "../Component/Ckeckloeschen";
import Checkbox from "../Component/Checkbox";

 
function AufgabenLoeschen () {
   
          
        let  Tasks=[
              {
                  id:1,
                  description: 'Wohnung aufraumen',
                  complete: false,
              },
              {
                  id:2,
                  description: 'die Wäsche waschen',
                  complete: false,
              },
              {
                id:3,
                description: 'den Boden waschen',
                complete: false,
            }
          ]
     let [list, updateList]=useState(Tasks);

  let removHandler=(e)=>{
    let x= e.target.getAttribute("removeTask");
    updateList(list.filter(items=>items.description !==x));
  }
 

    return (
        <>
            <div className="b">
                    <h1 > Aufgaben löschen</h1>
                </div>

                <div class="container mt-5">
                    <div class="row">
                        <div class="col-sm-4  w-30  my-50 h-200">
                            <Nav />
                    </div>
                    <div class="col-sm-8">
                        <hr/>
                    <ul>
         {list.map(x=>{
            return(<div>{x.description}
            <button removeTask={x.description} onClick={removHandler}>❌</button></div>)
         })}
        
          
         
                </ul>
                    
                    </div>

                </div>
            </div>

        </>
    );

} export default AufgabenLoeschen;