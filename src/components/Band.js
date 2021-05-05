import React, { Component } from 'react';

class Band extends Component {

  handleClick = event => {
    this.props.delete(this.props.id)
  }

  render() {
    
    return(
      <div>
        <ul>
          <li>{this.props.name} <button onClick={this.handleClick}>delete</button></li>
        </ul>
      </div>
    );
  }
};

export default Band;
