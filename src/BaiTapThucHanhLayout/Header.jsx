import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
    
      <div className='header'>
        <div className="header_left">
            <h3>Start Bootstrap</h3>
        </div>
        <div className="header_right">
            <a className='active' href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            
        </div>
      </div>
    )
  }
}
