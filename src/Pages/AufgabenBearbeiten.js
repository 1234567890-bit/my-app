import React from "react";
import ListItems from "../Component/ListItems";
import Nav from "../Component/Nav";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ListHome from "../Component/ListHome";

class AufgabenBearbeiten extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          items:[],
          currentItem:[
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
        }
    ]
        }
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
       
      }
      addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !==""){
          const items = [...this.state.items, newItem];
        this.setState({
          items: items,
          currentItem:{
            text:'',
            key:''
          }
        })
        }
      }
      handleInput(e){
        this.setState({
          currentItem:{
            text: e.target.value,
            key: Date.now()
          }
        })
      }
      deleteItem(key){
        const filteredItems= this.state.items.filter(item =>
          item.key!==key);
        this.setState({
          items: filteredItems
        })
    
      }
      setUpdate(text,key){
        console.log("items:"+this.state.items);
        const items = this.state.items;
        items.map(item=>{      
          if(item.key===key){
            console.log(item.key +"    "+key)
            item.text= text;
          }
        })
        this.setState({
          items: items
        })
      }
        
     render(){
      return (
        <>
        <div className="b">
                    <h1 > Aufgaben bearbeiten</h1>
                </div>

                <div class="container mt-5">
                    <div class="row">
                        <div class="col-sm-4  w-30  my-50 h-200">
                            <Nav />
                </div>
                <div class="col-sm-8">
               {this.li}
         
                <ul>
                {this.state.currentItem.map((item) => 
        
        <div>
       
       <input type="text" id={item.key} value={item.description} onChange={(e)=>{
        this.setUpdate(e.target.value,item.key)}}/> 
       </div>

     )}
                </ul> 
        </div>
    
    </div>
    </div>
    
    </>
      );
     }
    }

export default AufgabenBearbeiten;