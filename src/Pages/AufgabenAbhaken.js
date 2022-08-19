import React from "react";
import Nav from "../Component/Nav";
import ListeMitAufgaben from "../Component/ListeMitAufgaben";

class AufgabenAbhaken extends React.Component {

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
   render(){
    return (
        <>
            <div className="b">
                    <h1 > Aufgaben abhaken</h1>
                </div>

                <div class="container mt-5">
                    <div class="row">
                        <div class="col-sm-4  w-30  my-50 h-200">
                            <Nav />
                    </div>
                    <div class="col-sm-8">
                    
                        <ListeMitAufgaben/>
                        
                    </div>

                </div>
            </div>

        </>
    );
}
}
  export default AufgabenAbhaken;