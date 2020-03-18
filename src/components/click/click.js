import React from 'react'
import './click.css'

class Click extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    clicks: 0
  }

  this.addClick = this.addClick.bind(this);
  this.minusClick = this.minusClick.bind(this);
}

  addClick() {
     this.setState({clicks: this.state.clicks + 1})
  }

  minusClick() {
    this.setState({clicks: this.state.clicks - 1})
  }

  render() {
    return(
    <div>
      <h1 className="click">{this.state.clicks}</h1>
      <div className = "buttons">
        <button onClick={this.addClick}> + </button>
        <button onClick={this.minusClick}> - </button>
      </div>
    </div>
    )
  }

}


export default Click;
