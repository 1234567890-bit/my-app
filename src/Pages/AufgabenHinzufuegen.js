import React from "react";
import ListeMitAufgaben from "../Component/ListeMitAufgaben";
import Nav from "../Component/Nav";
import { useState } from "react";
import Checklist from "../Component/Checklist";

class AufgabenHinzufuegen extends React.Component {
    constructor() {
      super();
   
    this.state={
        newTaskDescription:'',
        Tasks:[
            {
                id:1,
                description: 'Wohnung aufraumen',
                complete: false,
            },
            {
                id:2,
                description: 'die Wäsche waschen',
                complete: false,
            }
        ]
    };
}
   handleChange = (event) => {
   this.setState({newTaskDescription:event.target.value});
   
  }

   addTask = (event) => {
    event.preventDefault();
 const newTask={
    id:this.state.Tasks.length+1,
description: this.state.newTaskDescription,
complete:false
 }
 this.setState({Tasks:this.state.Tasks.concat(newTask), newTaskDescription:""} );

 console.log("addind");
  }
  
render(){

    return (
        <>
            <div className="b">
                    <h1 > Aufgaben hinzufügen</h1>
                </div>

                <div class="container mt-5">
                    <div class="row">
                        <div class="col-sm-4  w-30  my-50 h-200">
                            <Nav />
                    </div>
                    <div class="col-sm-8">
                    <Checklist class=" m-10" state={this.state}/> 
           <form onSubmit={this.addTask}>
                    <input type="text" name="input" placeholder="Eine Aufgabe eingeben" value={this.state.newTaskDescription}  onChange={this.handleChange}/>
                       <button class="bg-info text-white"  type="submit" > Add</button>
                        </form>
                      
                    </div>

                </div>
            </div>

        </>
    );
}
 }
  export default AufgabenHinzufuegen;