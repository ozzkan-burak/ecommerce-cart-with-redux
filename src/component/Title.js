import React, {Component} from 'react'

class Title extends Component {
  render(){
    return(
      <h4>{this.props.val} - {this.props.count}</h4>
    );
  }
}

export default Title;