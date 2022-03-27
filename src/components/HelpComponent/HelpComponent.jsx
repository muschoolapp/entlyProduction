import React from "react";
import "./HelpComponent.css";

export default function HelpComponent() {
  return (
    <div className="centerFlex helpContainer">
      <div className="helpTitle">Help</div>

      <div className="helpDesc">
        Check out these helpful links. <br />If you can’t find your answer, email us
        below.
      </div>

      <div className="centerFlex helpBtnBg helpMetaMaskBtn">
        <span>MetaMask Wallet Support</span>
      </div>

      <div className="centerFlex helpBtnBg helpETHBtn">
        <span>Using ETH on Polygon</span>
      </div>

      <div className="centerFlex helpBtnBg helpOpenseaBtn">
        <span>OpenSea Support</span>
      </div>

      <div className="centerFlex HelpEmailEntlyBtn">
        <span>Email Ently</span>
      </div>
    </div>
  );
}
