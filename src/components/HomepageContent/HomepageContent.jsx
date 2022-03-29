import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import RecordImg from "./../../assets/RecordImage2.png";

import "./HomepageContent.css";
import UserProfile from "./UserProfile";
import NFTBtnCollection from './NFTBtnCollection';

export default function () {
  return (
    <div className="homepageContent">
      <NavLink to="/details">
        <div className="recordImage">
          <img src={RecordImg} alt="RecordImage" />
        </div>

        <div className="recordDetails">
          <div className="headingInfo">
            <div className="title">
              Hidden in Plain Sight
            </div>

            <UserProfile />
          </div>
          <NFTBtnCollection />
        </div>
      </NavLink>
    </div>
  );
}
