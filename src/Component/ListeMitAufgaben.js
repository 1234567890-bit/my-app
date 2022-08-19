import Header from "./Header";
import Nav from "./Nav";
import { useState } from "react";


function ListeMitAufgaben() {
    function Task(props) {
        return <li> {props.description}</li>;
    }
    

    const state = [
        {
            id: 1,
            description: 'Wohnung aufraumen',
            complete: false
        },
        {
            id: 2,
            description: 'die Wäsche waschen',
            complete: false
        },
        {
            id: 3,
            description: 'den Boden reinigen',
            complete: false
        },
        {
            id: 4,
            description: 'die Kleidung waschen',
            complete: false
        },
        {
            id: 5,
            description: 'die Wäsche waschen',
            complete: false
        },
        {
            id: 6,
            description: 'die Kleidung bügeln',
            complete: false
        },
        {
            id: 7,
            description: 'die Toilette reinigen',
            complete: false
        },
        {
            id: 8,
            description: 'kochen',
            complete: false
        },
        {
            id: 9,
            description: 'den Mülleimer leeren',
            complete: false
        },
        {
            id: 10,
            description: 'das Auto absaugen',
            complete: false
        },
        {
            id: 11,
            description: 'das Auto waschen',
            complete: false
        },
        {
            id: 12,
            description: 'den Garten aufräumen',
            complete: false
        },
        {
            id: 13,
            description: 'die Kinder waschen',
            complete: false
        },
        {
            id: 14,
            description: 'den Hund spazieren gehen machen',
            complete: false
        },
        {
            id: 15,
            description: 'die Kleidungen zusammenlegen und wegräumen',
            complete: false
        },
    ];

    function La (props){
        return(
            <> 
             <input type="checkbox" />
             <label> {props.description}</label><br></br>
            
            </>
        )
       
    } 
        
   
    return (
        <>
            <div >
                
                <ul>
                    {state.map((car) => 
                <La key={car.id} description={car.description}/>)}
                </ul>

            </div>
        </>
    );
}
export default ListeMitAufgaben;