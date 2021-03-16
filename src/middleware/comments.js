import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../actions/todos"

const comments = (store) => (next) => (action) => {

    if(action.type === ADD_TODO && action.todo.name !== "") {
         alert("Don't forget to "+ action.todo.name)
    } 
    else if (action.type === REMOVE_TODO) {
        return next(action)
    } 
    else if (action.type === TOGGLE_TODO) {
        return next(action)
    }  
    else{
        alert("Bad Idea!!!")
        return ""
    }
    return next(action)
}

export default comments; 