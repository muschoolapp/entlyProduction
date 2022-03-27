import NFTBtnCollection from "components/HomepageContent/NFTBtnCollection";
import React from "react";
import "./DetailsNFT.css";

import EJILogo from "./../../assets/ejiLogo.png";
import DWLogo from "./../../assets/DWMFLogos.png";
import FundRatio from "./../../assets/ratioFund.svg";

export default function DetailsNFT() {
  return (
    <div className="DetailsNFTContainer">
      <div className="detailsNFT">
        <div className="detailsNFT__basicInfo">
          <div className="detailsNFT__heading">
            <div className="detailsNFT__title">about this drop</div>
            <NFTBtnCollection fundraiser="true" />
          </div>

          <div className="detailsNFT__desc">
            In partThis first-of-it’s kind collection and fundraiser comes on
            the heels of Trevor’s historic performance in this year’s Super Bowl
            halftime show...
          </div>
        </div>
        <div className="fundInfo">
          <div className="fundHeading">funds</div>
          <div className="descShort">
            20% of the proceeds will go to these charitable organizations:
          </div>
          <div className="fundGiver">
            <div className="ejiOrg">
              <div className="ejiOrgLogo">
                <img src={EJILogo} alt="" />
                <div className="ejiName">Equal Justice Initiative</div>
              </div>
              <div className="ejiFundRatio">
                <img src={FundRatio} alt="" />
              </div>
            </div>

            <div className="dwOrg">
              <div className="dwLogo">
                <img src={DWLogo} alt="" />
              </div>
              <div className="ejiFundRatio">
                <img src={FundRatio} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
