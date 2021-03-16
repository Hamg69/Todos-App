import React from "react"
import {connect} from "react-redux"
import {addTodo, removeTodo, toggleTodo} from "../actions/todos"
import List from "./List"

class Todos extends React.Component{

generateId = () => {
    return Math.random().toString(36).substring(2)+ (new Date()).getTime().toString(36);
}
    
addItem = e => {
    e.preventDefault();

    const name = this.input.value
    this.input.value = ""
        
    this.props.dispatch(addTodo({
        name,
        complete: false,
        id: this.generateId()
    })
)};

removeItem = (todo) => {
    this.props.dispatch(removeTodo(todo.id))
}

toggleItem = (id) => {
    this.props.dispatch(toggleTodo(id))
}

displayItems = (c) => {
    c = 0
}
render() {
    return(
        <div className="main">
        <h1>Make Your Todo List</h1>
        <input
            type="text"
            placeholder="Enter your Todos here..."
            ref={(input) => this.input = input}
        />
        <span> </span>
        <button onClick={this.addItem} >Add Todo</button>
        <List remove={this.removeItem} toggle={this.toggleItem} items={this.props.todos}/>
        </div>
    )}
}

export default connect((state) => ({
    todos: state.todos
  }))(Todos)