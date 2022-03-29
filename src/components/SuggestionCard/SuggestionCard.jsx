import React, { useState, useEffect } from "react";
import { Button, Col, Row, Typography, Form } from "antd";
import { Flex } from "uikit/Flex/Flex";
import { useMoralis } from "react-moralis";
import { DiamondIcon, DollarCircledIcon, EthereumIcon } from "components/Icons";
import "./SuggestionCard.css";
import Moralis from "moralis";
import Web3 from 'web3';
import { contractABI, contractAddress } from "../minter/contract";
import { PropertySafetyFilled } from "@ant-design/icons";
import VideoPlayer from 'react-video-js-player';

const { Text, Title } = Typography;

const SuggestionCard = (props) => {
  const { isAuthenticated, user } = useMoralis();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [count, setCount] =useState(0);

  const web3 = new Web3(Web3.givenProvider);

  const handleClick = () => {
    setName(props.title)
    console.log(name)
    setDescription(props.description)
    console.log(description)
    setFile(props.media)
    console.log(file)
  };
  
  const handleOpensea = () => {
    window.open(`https://testnets.opensea.io/collection/hidden-in-plain-sight-vr5evnuheq`)
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (count < props.editionsMinted) {
      try {
        // Attempt to save image to IPFS
        //const file1 = new Moralis.File(file.name, file);//{base64:props.media});
        //await file1.saveIPFS();
        const file1url = file;//file1.ipfs();
        // Generate metadata and save to IPFS
        const metadata = {
          name,
          description,
          image: file1url,
        };
        const file2 = new Moralis.File(`${name}metadata.json`, {
          base64: Buffer.from(JSON.stringify(metadata)).toString("base64"),
        });
        await file2.saveIPFS();
        const metadataurl = file2.ipfs();
        console.log(metadataurl)
        // Interact with smart contract
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const response = await contract.methods
          .mint(metadataurl)
          .send({ from: user.get("ethAddress"), value: web3.utils.toWei(props.bid, 'ether') });
        // Get token id
        const tokenId = response.events.Transfer.returnValues.tokenId;
        setCount(count+1)

        // Display alert
        alert(
          `NFT successfully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
        );
      } catch (err) {
        console.error(err);
        alert("An error occured!");
      }
    } else {
      alert("The maximum amount of this edition have already been minted")
    }
  };

  return (
    <>
      <div className="suggestCard">
        <Row wrap={false}>
          <Col flex="auto" className="image_box">
            <VideoPlayer src={props.image} alt={props.title} className="image"/>
          </Col>

          <Col flex="auto">
            <Flex
              container
              height="100%"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Col className="info_box">
                <Flex
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <div>
                    <Title className="title" ellipsis>
                      {props.title}
                    </Title>

                    <Row>
                      <DiamondIcon className="icons" />
                      <Text className="info">
                        {props.editionsMinted} Editions
                      </Text>
                    </Row>

                    <Row>
                      <DollarCircledIcon className="icons" />
                      <Text className="info">{props.royalty}% Royalty</Text>
                    </Row>
                  </div>
                  <div className="btnViewOpenSea">
                    <Button shape="round" onClick={handleOpensea}>View on OpenSea</Button>
                  </div>
                </Flex>
              </Col>
              <form onSubmit={onSubmit}>
                <button 
                  className="bidButton"
                  onClick={handleClick}
                >
                  Mint
                  <Text strong className="bidValue">
                    {props.bid} ETH ({count}/{props.editionsMinted} Minted)
                  </Text>
                  <EthereumIcon className="ethIcon" />
                </button>
                
              </form>
            </Flex>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SuggestionCard;
