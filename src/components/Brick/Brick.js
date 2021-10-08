import React from 'react';
import './Brick.css';


class Brick extends React.Component {
  render() {
    const animation_property = this.props.animation ? 'activate' : 'reset';
    // const selected           = (this.props.noFeedback==='') ? 'selected' : 'notSelected'
    const selected           = (this.props.symbolHighlight ==='') ? 'selected' : 'notSelected'
    
    return (      
      <div className="container">
       <img className={"symbol " + animation_property + " " + selected} src={this.props.symbol} alt='symbol' onClick={() => this.props.symbolClicked()}/>
       <div className={"square" + this.props.noFeedback} alt='feedback'>{this.props.feedback}</div>   
      </div>
    );
  }
}

export default Brick;
