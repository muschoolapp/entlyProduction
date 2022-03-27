import React from 'react'
import UserImg from "./../../assets/userImage.png";
import VerifiedIcon from "./../../assets/verifiedIcon.svg";

import "./HomepageContent.css";
import "./UserProfile.css";

export default function UserProfile() {
  return (
    <div className="userDetails">
    <div className="userImage">
      <img src={UserImg} alt="User Image" />
    </div>
    <div className="userName">
      <span>Trevor Lawrence Jr.</span>
    </div>
    <div className="verifiedTag">
      <img src={VerifiedIcon} alt="verified" />
    </div>
  </div>
  )
}
