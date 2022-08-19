import React from "react";
import ListItems from "../Component/ListItems";
import Nav from "../Component/Nav";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

library.add(faTrash)

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }
    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== "") {
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }
    handleInput(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }
    deleteItem(key) {
        const filteredItems = this.state.items.filter(item =>
            item.key !== key);
        this.setState({
            items: filteredItems
        })

    }
    setUpdate(text, key) {
        console.log("items:" + this.state.items);
        const items = this.state.items;
        items.map(item => {
            if (item.key === key) {
                console.log(item.key + "    " + key)
                item.text = text;
            }
        })
        this.setState({
            items: items
        })


    }
    render() {
        return (
            <>
                <div className="b">
                    <h1 > Willkommen</h1>
                </div>

                <div class="container mt-5">
                    <div class="row">
                        <div class="col-sm-4  w-30  my-50 h-200">
                            <Nav />
                        </div>
                        <div class="col-sm-8">
                            <form id="to-do-form" onSubmit={this.addItem}>
                                <input type="text" placeholder="Eine Aufgabe eingeben" value={this.state.currentItem.text} onChange={this.handleInput}></input>
                                <button type="submit">Add</button>
                            </form>
                            <p>{this.state.items.text}</p>

                            <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />




                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Home;