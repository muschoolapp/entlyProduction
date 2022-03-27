import React from "react";
import "./Tree.css";

import TreeLogo from "./assets/tree.svg";
import TwitterLogo from "./../../assets/bi_twitter.png";
import DiscordLogo from "./../../assets/bi_discord.png";

export default function Tree() {
  return (
    <>
      <div className="treeContainer">
        <div className="treeLogo">
          <img src={TreeLogo} alt="" />
        </div>
        <div className="treeDesc">
          For every transaction,<br /> we’ll plant a tree.
        </div>
        <div className="treeLearnMore">
          <div className="text">Learn more</div>
          <div className="socialLinks">
            <div className="socialLinksIcon twitter">
              <img src={TwitterLogo} alt="Join twitter" />
            </div>
            <div className="socialLinksIcon discord">
              <img src={DiscordLogo} alt="Join Discord" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
