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

  const media1 = "https://ipfs.io/ipfs/Qmf1sV49en2mvS6yyKtMXB5fAnnpTiuitFQ1maq6Ud7BCv?filename=01-FREE-WILL.mp4";
  const media2 = "https://ipfs.io/ipfs/QmUARfwK1vbwcBSGTKK4UQUbZhcfQfN95hLR9RK3Uu5MWS?filename=02-MODERN-VAMP.mp4";
  const media3 = "https://ipfs.io/ipfs/QmT3Y1321SxSsffqyS2XWqwEKrJdqLCqYLRQ3MfmPeKGJW?filename=03-GOOD-TROUBLE.mp4";
  const media4 = "https://ipfs.io/ipfs/QmRwfx7p3zGgGfN1JJnAi1jhUSpgFQNFUV9JSB2ycxgpjz?filename=04-SELMA.mp4";
  const media5 = "https://ipfs.io/ipfs/QmX6Mqd2Ly2xmVpbWqT2mTYpX81vNQVMGEVCGpVmBX8WAs?filename=05-JESUS-THE-LIGHT-OF-THE-WORLD.mp4";
  const media6 = "https://ipfs.io/ipfs/QmbKbq4zeDdaZmpPNgrAgZF3QVxotenSe8PFc9gD8HQ3VN?filename=06-THE-COUNCIL.mp4";
  const media7 = "https://ipfs.io/ipfs/QmSY7Fqo594yagns3sCDFL3bbesY7XtJp9XFfXoii2BD12?filename=07-THIS-LITTLE-LIGHT-OF-MINE.mp4";
  const media8 = "https://ipfs.io/ipfs/QmcfZsHnaHRAG8LrrbiVivgWqArcmQNauA22JhGhRk5Qgm?filename=exclusive1.mp4";
  const media9 = "https://ipfs.io/ipfs/QmWEYeLC2PnifCR54jtxi5bN4U4XKbC484ZnBzEr15xi92?filename=exclusive2.mp4";



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
          7 unique Audio-Visuals + 2 Exclusive Content NFTs
        </Title>
      </Row>
      <div className="suggestionCardContainer">
        <SuggestionCard
          bid="0.2"
          royalty="30"
          title="Free Will"
          editionsMinted="10"
          description="Free will is a very important lesson I learned in some of my studies and has guided me in my personal and professional decisions."
          media={media1}
        />
        <SuggestionCard
          bid="0.2"
          royalty="30"
          title="Modern Vamp"
          editionsMinted="10"
          description="A nod to the future and the hope of what can happen."
          media={media2}
        />
        <SuggestionCard
          bid="0.2"
          royalty="30"
          title="Good Trouble"
          editionsMinted="10"
          description="Inspired by the late John Lewis and the struggles he had to endure in his quest for civil rights. Good Trouble is what happened on Bloody Sunday."
          media={media3}
        />
        <SuggestionCard
          bid="0.2"
          royalty="30"
          title="Selma"
          editionsMinted="10"
          description="Selma is inspired by what happened for the rest of John Lewis???s life following bloody Sunday."
          media={media4}
        />
        <SuggestionCard
          bid="0.2"
          royalty="30"
          title="Jesus Light of the World"
          editionsMinted="10"
          description="This is a traditional hymn that???s been sung throughout history in the black church and in civil rights marches and rallies. An uplifting song for all people."
          media={media5}
        />
        <SuggestionCard
          bid="0.2"
          royalty="30"
          title="The Council"
          editionsMinted="10"
          description="Inspired by the struggles and many lives lost during the fight for equality and civil rights"
          media={media6}
        />
        <SuggestionCard
          bid="0.2"
          royalty="30"
          title="This Little Light of Mine"
          editionsMinted="10"
          description="I chose to record this song because it symbolizes each individual???s ability to affect and impact humanity in a positive way."
          media={media7}
        />
         <SuggestionCard
          bid="0.4"
          royalty="30"
          title="Exclusive 1"
          editionsMinted="1"
          description="One of a kind exclusive content from the Hidden in Plain Sight"
          media={media8}
        />
         <SuggestionCard
          bid="0.4"
          royalty="30"
          title="Exclusive 2"
          editionsMinted="1"
          description="One of a kind exclusive content from the Hidden in Plain Sight"
          media={media9}
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
