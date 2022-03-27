import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import RecordImg from "./../../assets/RecordImage2.png";

import "./HomepageContent.css";
import UserProfile from "./UserProfile";
import NFTBtnCollection from './NFTBtnCollection';

export default function () {
  return (
    <div className="homepageContent">
      <div className="recordImage">
        <img src={RecordImg} alt="RecordImage" />
      </div>

      <div className="recordDetails">
        <div className="headingInfo">
          <div className="title">
            <NavLink to="/details">Hidden in Plain Sight</NavLink>
          </div>

          <UserProfile />
        </div>
        <NFTBtnCollection />
      </div>
    </div>
  );
}
