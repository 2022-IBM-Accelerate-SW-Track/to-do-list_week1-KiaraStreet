import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/kiara_profilepic2.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {profile_pic_name}
          // Image goes here
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Kiara Street</div>
        <div className="brief_description">
          Hello World! I am Kiara Street, something interesting about me is all through elementary school to High school I played the Steel Pan. The specific drums I played were the Double Tenor and six bass!

        </div>
      </div>
    </div>
  </div>

      </div>

      


    )
  }
}