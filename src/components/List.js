import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class List extends React.Component { 
  
  state ={
    all: true,
    active: false,
    tocomplete: false
  }
  showCompleted = ()=> {
    this.setState({all: false, active: false, tocomplete: true})
  }
  
  showAll = ()=> {
    this.setState({all: true, active: false, tocomplete: false})
  }
  showActive = ()=> {
    this.setState({all: false, active: true, tocomplete: false})
  }
  
render() {
  const {items, toggle, remove} = this.props
  const completed = items.filter(item => item.complete === true)
  const activeItems = items.filter(item => item.complete !== true)
  const {all, active, tocomplete} = this.state
  return (
    <div>
      <ol>
        {items.map(item => (
          <li key={item.id} 
            className="item-list"
            style = {{display: all === true? "block" : "none"}}>
          <FontAwesomeIcon className="toggle" 
            icon={faCheckCircle} 
            onClick={() => toggle && toggle(item.id)}
            >W</FontAwesomeIcon>
          <span
            style = {{textDecoration: item.complete? "line-through" : "none"}}
            >{item.name.replace(/^./, item.name[0].toUpperCase())} </span>
          <FontAwesomeIcon className="cancel" 
            icon={faWindowClose} 
            size="1x" 
            onClick={() => remove(item)}
            >X</FontAwesomeIcon>
          </li>
          )
        )}
        {completed.map(item => (
          <li key={item.id} className="item-list" 
            style = {{display: tocomplete === true? "block" : "none"}}>
          <FontAwesomeIcon className="toggle" 
            icon={faCheckCircle}  
            onClick={() => toggle && toggle(item.id)}
            >W</FontAwesomeIcon >
          <span
            style = {{textDecoration: item.complete? "line-through" : "none"}}
            > {item.name.replace(/^./, item.name[0].toUpperCase())} </span>
          <FontAwesomeIcon className="cancel" 
            icon={faWindowClose} 
            size="1x" onClick={() => remove(item)}
            >X</FontAwesomeIcon>
          </li>
          )
        )}
        {activeItems.map(item => (
          <li key={item.id} className="item-list" 
            style = {{display: active === true? "block" : "none"}}>
          <FontAwesomeIcon className="toggle" 
            icon={faCheckCircle}  
            onClick={() => toggle && toggle(item.id)}
            >W</FontAwesomeIcon>
          <span
            style = {{textDecoration: item.complete? "line-through" : "none"}}
            > {item.name.replace(/^./, item.name[0].toUpperCase())} </span>
          <FontAwesomeIcon className="cancel" 
            icon={faWindowClose} size="1x"  
            onClick={() => remove(item)}
            >X</FontAwesomeIcon>
          </li>
        )
      )}
    </ol>
    <div>
      {items.length !== 0?
        <p className="bottom-nav">
          <span style = {{display: all === true? "block" : "none"}}>
            {activeItems.length + (
              activeItems.length === 1 || activeItems.length === 0
              ?" Item Left"
              :" Items Left"
            )}
          </span>
          <span style = {{display: tocomplete === true? "block" : "none"}}>
            {completed.length + (
              completed.length === 1 || completed.length === 0
              ?" Item Left"
              :" Items Left"
            )}
          </span>
          <span style = {{display: active === true? "block" : "none"}}>
            {activeItems.length + (
              activeItems.length === 0 || activeItems.length === 1
              ?" Item Left"
              :" Items Left"
            )}
          </span>
          <button className="bottom-nav" onClick={this.showAll}>All</button>
          <button className="bottom-nav" onClick={this.showActive}>Active</button>
          <button className="bottom-nav" onClick={this.showCompleted}>Completed</button>
        </p>
        : ""
        }
    </div>
</div> 
  )}
}

export default List