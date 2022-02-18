import React, { Component } from 'react'
import { NavLink } from "react-router-dom";


export class ShlfShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
  render() {
      const { shlves } = this.props
    return (
      <>
          <h2>ShlfShow.js page</h2>
          <p>Name: {ShlfShow.name}</p>
     </>
    )
  }
}

export default ShlfShow