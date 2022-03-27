import React from "react";
import { useState } from "react";
import { Button, Col, Row, Typography } from "antd";
import { useMediaQuery } from "uikit/hooks/useMediaQuery";
import SuggestionCard from "./SuggestionCard/SuggestionCard";

import DefaultImage from "../defaultImage.png";
import "./HomepageContent/HomepageContent.css";
import "./details.css";
import UserProfile from "./HomepageContent/UserProfile";
import DetailsNFT from "./Details/DetailsNFT";
import song1 from "../assets/Image/1_HIDS.jpg";
import song2 from "../assets/Image/2_HIDS.jpg";
import song3 from "../assets/Image/3_HIDS.jpg";
import song4 from "../assets/Image/4_HIDS.jpg";
import song5 from "../assets/Image/5_HIDS.jpg";
import song6 from "../assets/Image/6_HIDS.jpg";
import song7 from "../assets/Image/7_HIDS.jpg";

import mp41 from "../nftFiles/01-FREE-WILL.mp4"
import mp42 from "../nftFiles/02-MODERN-VAMP.mp4"
import mp43 from "../nftFiles/03-GOOD-TROUBLE.mp4"
import mp44 from "../nftFiles/04-SELMA.mp4"
import mp45 from "../nftFiles/05-JESUS-THE-LIGHT-OF-THE-WORLD.mp4"
import mp46 from "../nftFiles/06-THE-COUNCIL.mp4"
import mp47 from "../nftFiles/07-THIS-LITTLE-LIGHT-OF-MINE.mp4"

const { Text, Title } = Typography;

const Details = (props) => {
  const mediaQueries = {
    isSmall: useMediaQuery("(min-width: 428px)"),
    isLarge: useMediaQuery("(min-width: 992px)"),
  };
  // const mediaQueries = {
  //   isSmall : useMediaQuery('(min-width: 428px)'),
  //   isMedium : useMediaQuery('(min-width: 768px)'),
  //   isLarge : useMediaQuery('(min-width: 992px)'),
  //   isXLarge : useMediaQuery('(min-width: 1200px)'),
  //   isXXLarge : useMediaQuery('(min-width: 1400px)'),
  // }

  const [showDetails, setShowDetails] = useState(false);
  const onClickDetails = () => setShowDetails(!showDetails);

  return (
    <div className="detailsBg">
      <Row
        justify="start"
        style={{ marginLeft: "12px", paddingBottom: "20px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <div className="headingInfo">
            <div className="title">Hidden in Plain Sight</div>

            <UserProfile />
          </div>
          <div
            className="nftCollBtn"
            style={{
              marginRight: "12px",
            }}
          >
            <span>NFT Collection</span>
          </div>
        </div>
      </Row>

      <Row justify="center">
        <Col>
          <img
            style={styles.detail__image(mediaQueries)}
            src={DefaultImage}
            alt={props.title}
          />
        </Col>
      </Row>

      <div className="detailsBtn">
        <Button
          style={styles.detail__button(mediaQueries, true)}
          shape="round"
          size="large"
          onClick={onClickDetails}
          className={showDetails ? "bgGrayBtn" : ""}
        >
          Details
        </Button>
        <Button
          style={styles.detail__button(mediaQueries)}
          shape="round"
          size="large"
        >
          View on OpenSea
        </Button>
      </div>

      {showDetails && (
        // <div>
        <DetailsNFT />
      )}

      <Row justify="center">
        <Title level={3} style={styles.detail__suggest(mediaQueries)}>
          7 unique Audio-Visuals NFTs
        </Title>
      </Row>
      <div className="suggestionCardContainer">
        <SuggestionCard
          bid="0.4"
          royalty="30"
          image={song1}
          title="Free Will"
          editionsMinted="5"
          description="Free will is a very important lesson I learned in some of my studies and has guided me in my personal and professional decisions."
          media={mp41}
        />
        <SuggestionCard
          bid="0.4"
          royalty="30"
          image={song2}
          title="Modern Vamp"
          editionsMinted="5"
          description="A nod to the future and the hope of what can happen."
          media={mp42}
        />
        <SuggestionCard
          bid="0"
          royalty="30"
          image={song3}
          title="Good Trouble"
          editionsMinted="5"
          description="Inspired by the late John Lewis and the struggles he had to endure in his quest for civil rights. Good Trouble is what happened on Bloody Sunday."
          media={mp43}
        />
        <SuggestionCard
          bid="0.4"
          royalty="30"
          image={song4}
          title="Selma"
          editionsMinted="5"
          description="Selma is inspired by what happened for the rest of John Lewis’s life following bloody Sunday."
          media={mp44}
        />
        <SuggestionCard
          bid="0.4"
          royalty="30"
          image={song5}
          title="Light of the World"
          editionsMinted="5"
          description="This is a traditional hymn that’s been sung throughout history in the black church and in civil rights marches and rallies. An uplifting song for all people."
          media={mp45}
        />
        <SuggestionCard
          bid="0.4"
          royalty="30"
          image={song6}
          title="The Council"
          editionsMinted="5"
          description="Inspired by the struggles and many lives lost during the fight for equality and civil rights"
          media={mp46}
        />
        <SuggestionCard
          bid="0.4"
          royalty="30"
          image={song7}
          title="Light of Mine"
          editionsMinted="5"
          description="I chose to record this song because it symbolizes each individual’s ability to affect and impact humanity in a positive way."
          media={mp47}
        />
      </div>
    </div>
  );
};

export default Details;

/**
 * Sets the margin on buttons below Details Image. Could have been set using
 * nested ternary operators but that awould be a scode smell.
 * @param {Object} mediaQueries contains the media query information
 * @param {boolean} isFirst if element is first, send true
 * @returns margin of the button
 */
const setButtonMargin = (mediaQueries, isFirst) => {
  if (mediaQueries.isLarge) {
    return isFirst ? "0 32px 32px 0" : "0 0 32px 0";
  } else if (mediaQueries.isSmall) {
    return isFirst ? "0 20px 20px 0" : "0 0 20px 0";
  } else {
    return "0 10px 20px 10px";
  }
};

const styles = {
  detail: {
    color: "#FFFFFF",
  },
  detail__image: (mediaQueries) => ({
    maxWidth: "425px",
    maxHeight: "425px",
    paddingLeft: "12px",
    paddingRight: "12px",
    borderRadius: "16px",
    marginBottom: "30px",
    width: mediaQueries.isLarge ? "425px" : "100%",
    padding: mediaQueries.isLarge ? "0" : "0 12px 0 12px",
  }),
  detail__button: (mediaQueries, isFirst) => ({
    height: "auto",
    color: "#FFFFFF",
    fontWeight: "700",
    background: "#535353",
    borderColor: "#535353",
    letterSpacing: "-0.045em",
    lineHeight: mediaQueries.isLarge ? "49px" : "27px",
    fontSize: mediaQueries.isLarge ? "32.845px" : "17.8182px",
    padding: mediaQueries.isLarge ? "20px 72px" : "10px 40px",
    // margin: setButtonMargin(mediaQueries, isFirst),
  }),
  detail__suggest: (mediaQueries) => ({
    color: "#FFFFFF",
    fontWeight: "700",
    letterSpacing: "-0.045em",
    marginTop: "38px",
    marginBottom: "24px",
    lineHeight: mediaQueries.isLarge ? "67px" : "31px",
    fontSize: mediaQueries.isLarge ? "44.4576px" : "20.57px",
    // margin: mediaQueries.isLarge ? "64px 0 72px 0" : "10px 0 24px 0",
  }),
};
