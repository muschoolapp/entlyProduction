import { UserOutlined } from "@ant-design/icons";
import Icon, { HomeOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./ProfileComponent.css";
import { Col } from 'antd';

const UserSvg = () => (
<svg width="123" height="123" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M103.013 91.4293C100.76 86.092 97.4902 81.2439 93.3858 77.1551C89.2939 73.0546 84.4466 69.7852 79.1116 67.5275C79.0639 67.5036 79.0161 67.4917 78.9683 67.4678C86.41 62.0926 91.2477 53.337 91.2477 43.4586C91.2477 27.094 77.9888 13.8352 61.6243 13.8352C45.2598 13.8352 32.001 27.094 32.001 43.4586C32.001 53.337 36.8386 62.0926 44.2803 67.4798C44.2325 67.5036 44.1848 67.5156 44.137 67.5395C38.7857 69.7971 33.9838 73.0341 29.8628 77.1671C25.7622 81.259 22.4929 86.1063 20.2352 91.4412C18.0173 96.6642 16.8212 102.264 16.7115 107.937C16.7083 108.065 16.7307 108.191 16.7772 108.31C16.8238 108.429 16.8937 108.537 16.9828 108.628C17.0718 108.72 17.1783 108.792 17.2958 108.842C17.4133 108.891 17.5395 108.917 17.6671 108.917H24.834C25.3596 108.917 25.7777 108.499 25.7896 107.985C26.0285 98.7635 29.7314 90.1273 36.2772 83.5815C43.05 76.8087 52.0445 73.0819 61.6243 73.0819C71.2041 73.0819 80.1986 76.8087 86.9714 83.5815C93.5172 90.1273 97.2201 98.7635 97.459 107.985C97.471 108.51 97.889 108.917 98.4146 108.917H105.582C105.709 108.917 105.835 108.891 105.953 108.842C106.07 108.792 106.177 108.72 106.266 108.628C106.355 108.537 106.425 108.429 106.471 108.31C106.518 108.191 106.54 108.065 106.537 107.937C106.418 102.227 105.235 96.6731 103.013 91.4293ZM61.6243 64.0038C56.1416 64.0038 50.9814 61.8657 47.0993 57.9836C43.2172 54.1015 41.0791 48.9413 41.0791 43.4586C41.0791 37.9759 43.2172 32.8157 47.0993 28.9336C50.9814 25.0515 56.1416 22.9133 61.6243 22.9133C67.107 22.9133 72.2672 25.0515 76.1493 28.9336C80.0314 32.8157 82.1695 37.9759 82.1695 43.4586C82.1695 48.9413 80.0314 54.1015 76.1493 57.9836C72.2672 61.8657 67.107 64.0038 61.6243 64.0038Z" fill="#CCCCCC"/>
</svg>

  );

  const UserIcon = props => <Icon component={UserSvg} {...props} />;

export default function ProfileComponent() {

  const [name, setName] = useState(()=> {
    const nameData = localStorage.getItem('name')
    const initialNameValue = JSON.parse(nameData);
    return initialNameValue || "";
  });
  const [bio, setBio] = useState(()=> {
    const bioData = localStorage.getItem('bio')
    const initialBioValue = JSON.parse(bioData);
    return initialBioValue || "";
  });

  const handleClick = () => {
    localStorage.setItem('name', JSON.stringify(name))
    localStorage.setItem('bio', JSON.stringify(bio))
  }

  return (
    <>
      <div className="profileContainer">
        <div className="userIcon">
          <UserIcon style={{ color: '#cccccc' }}  />
        </div>

        <form action="" method="">
          <div className="userForm">
            <div className="formName">
              <input 
                type="text" 
                placeholder="Enter name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formBio">
              <textarea 
                type="text" 
                placeholder="Enter Bio"
                value={bio} 
                onChange={(e) => setBio(e.target.value)}
              >
              </textarea>
            </div>
          </div>
          
            <button 
              className="formSubmit fromSubmitBtn"
              onClick={handleClick}
            >
              <span className="formBtnText">
                Save
              </span>
            </button>
          
        </form>

        
          <button className="needHelp"><NavLink to="/HelpPage"><span className="formBtnText">Need Help?</span></NavLink></button>
        
      </div>
    </>
  );
}
