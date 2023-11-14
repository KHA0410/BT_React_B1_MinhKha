import React, { Component } from 'react'

export default class Body extends Component {
  render() {
    return (
      <div className="body container">
        <h1>A warm welcome!</h1>
        <p>Bootstrap utility classes are used to create this jumbotron since the old <br /> component has been removed from the framework. Why create custom CSS <br /> when you can use utilities?</p>
        <button className='btn btn-primary'>Call to action</button>
      </div>
    )
  }
}
