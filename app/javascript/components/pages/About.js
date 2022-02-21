import React, { Component } from "react";
import Gluay from '../assets/gluay_icon.svg'
import Gina from '../assets/gina_icon.svg'
import Deon from '../assets/deon_icon.svg'
import Yann from '../assets/yann_icon.svg'

export class About extends Component {
  render() {
    return (
      <>
        <h2>About Shlf</h2>
        <h5>What is Shlf?</h5>
        <p>Describtion goes here..</p>
        <br/>
        <h5>Why Shlf?</h5>
        <p>Describtion goes here..</p>
        <br/>
        <h5>Who is Shlf user?</h5>
        <p>Describtion goes here..</p>
        <br/>
        <h2>Meet the RYDGers</h2>
        <img src={Gluay} alt="Gluay" width="200px" />
        <p>Gluay - Product Manager</p>
        <br/>  
        <img src={Gina} alt="Gina" width="200px" />
        <p>Regina - Project Manager</p>
        <br/>  
        <img src={Deon} alt="Deon" width="200px" />
        <p>Deon - Tech Lead</p>
        <br/>  
        <img src={Yann} alt="Yann" width="200px" />
        <p>Yann - Design Lead</p>
      </>
    );
  }
}

export default About;
