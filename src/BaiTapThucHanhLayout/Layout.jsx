import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Item from './Item'
import Footer from './Footer'

export default class Layout extends Component {
  render() {
    return (
        <div className='baiTapLayout'>
            <div className="headReact">
               <Header/> 
            </div>
            <div className='bodyReact'>
               <Body/> 
               <div className='row container d-flex  justify-content-center align-items-center'>
                <div className='col-6'>
                <Item/>
                </div>
                <div className='col-6'>
                <Item/>
                </div>
                <div className='col-6'>
                <Item/>
                </div>
                <div className='col-6'>
                <Item/>
                </div>
                <div className='col-6'>
                <Item/>
                </div>
                <div className='col-6'>
                <Item/>
                </div>
                </div> 
            </div>
                <div className="footerReat">
                  <Footer/>
                </div>
        </div>
        
     
      
    )
  }
}
