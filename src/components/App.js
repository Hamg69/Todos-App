import React from 'react';
import {connect} from "react-redux"
import ConnectedTodos from "./Todos"


class App extends React.Component {

  /*componentDidMount() {
    const {dispatch} = this.props; 
  }*/

  render() {

    return( 
      <div>
        <ConnectedTodos/>
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)

