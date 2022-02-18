import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export class ShlfIndex extends Component {
  render() {
    return (
      <>
        <h4>ShlfIndex.js Page</h4>
        {/* {this.props.shlves ? this.props.shlves.map(shlf => {
          return (
          <NavLink to={`/shlfshow/${shlf.id}`} key={shlf.id}>
          <p>{shlf.name}</p>
         </NavLink>
        )
          })
          : <p>No Shlfs</p>
        } */}
      </>
    )
  }
}

export default ShlfIndex