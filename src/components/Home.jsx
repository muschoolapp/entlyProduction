import { Card, Timeline, Typography, Carousel, Button } from "antd";
import React, { useMemo, useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Avatar from "antd/lib/avatar/avatar";
import NFTTokenIds from "./NFTTokenIds";
import VideoPlayer from 'react-video-js-player';
import { Dropdown, Option } from "../hooks/Dropdown/dropdown.js";
import { contractABI, contractAddress } from "./minter/contract";
import Moralis from "moralis";
import Web3 from 'web3';
import song1 from "../nftFiles/01-FREE-WILL.mp4"
import song2 from "../nftFiles/02-MODERN-VAMP.mp4"
import song3 from "../nftFiles/03-GOOD-TROUBLE.mp4"
import song4 from "../nftFiles/04-SELMA.mp4"
import song5 from "../nftFiles/05-JESUS-THE-LIGHT-OF-THE-WORLD.mp4"
import song6 from "../nftFiles/06-THE-COUNCIL.mp4"
import song7 from "../nftFiles/07-THIS-LITTLE-LIGHT-OF-MINE.mp4"


function Home() {
  const { isAuthenticated, user } = useMoralis();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const web3 = new Web3(Web3.givenProvider);
  
  const handleSelect = (e) => {
    console.log(e.target.value);
    console.log({file})
    setName(e.target.value);

    if (document.getElementById('services').getElementsByTagName('option')[1].selected) {
      return(setDescription("Free will is a very important lesson I learned in some of my studies and has guided me in my personal and professional decisions."))
      //setFile({song1}))
    }
    if (document.getElementById('services').getElementsByTagName('option')[2].selected) {
      return(setDescription("A nod to the future and the hope of what can happen."))
      //setFile({song2}))
    }
    if (document.getElementById('services').getElementsByTagName('option')[3].selected) {
      return(setDescription("Inspired by the late John Lewis and the struggles he had to endure in his quest for civil rights. Good Trouble is what happened on Bloody Sunday."))
      //setFile({song3}))
    }
    if (document.getElementById('services').getElementsByTagName('option')[4].selected) {
      return(setDescription("Selma is inspired by what happened for the rest of John Lewis’s life following bloody Sunday."))
      //setFile({song4}))
    }
    if (document.getElementById('services').getElementsByTagName('option')[5].selected) {
      return(setDescription("This is a traditional hymn that’s been sung throughout history in the black church and in civil rights marches and rallies. An uplifting song for all people."))
      //setFile({song5}))
    }
    if (document.getElementById('services').getElementsByTagName('option')[6].selected) {
      return(setDescription("Inspired by the struggles and many lives lost during the fight for equality and civil rights"))
      //setFile({song6}))
    }
    if (document.getElementById('services').getElementsByTagName('option')[7].selected) {
      return(setDescription("I chose to record this song because it symbolizes each individual’s ability to affect and impact humanity in a positive way."))
      //setFile({song7}))
    }
    if (document.getElementById('services').getElementsByTagName('option')[8].selected) {
      return(setDescription("One of a kind, exclusive content from this collection (1/2)"))
    }
    if (document.getElementById('services').getElementsByTagName('option')[9].selected) {
      return(setDescription("One of a kind, exclusive content from this collection (2/2)"))
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Attempt to save image to IPFS
      const file1 = new Moralis.File(file.name, file);
      await file1.saveIPFS();
      const file1url = file1.ipfs();
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
      // Interact with smart contract
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const response = await contract.methods
        .mint(metadataurl)
        .send({ from: user.get("ethAddress") });
      // Get token id
      const tokenId = response.events.Transfer.returnValues.tokenId;
      // Display alert
      alert(
        `NFT successfully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
      );
    } catch (err) {
      console.error(err);
      alert("An error occured!");
    }
  };

  return (
    <Card
      title="Mint"
      style={{
      flexWrap: "wrap",
      WebkitBoxPack: "start",
      justifyContent: "center",
      margin: "0 auto",
      maxWidth: "800px",
      gap: "10px",}}
    >
      <div className="flex w-screen h-screen items-center justify-center">
        <VideoPlayer
          src={song1}
          height="300"
          width="300"
          style={{}}/>
        <form onSubmit={onSubmit}>
          <Dropdown
            formLabel="Select An NFT"
            onChange={handleSelect}
          >
            <option selected value="">Select One</option>
            <option value="Free Will">Free Will</option>
            <option value="Modern Vamp">Modern Vamp</option>
            <option value="Good Trouble">Good Trouble</option>
            <option value="Selma">Selma</option>
            <option value="Jesus, the Light of This World">Jesus, the Light of This World</option>
            <option value="The Council">The Council</option>
            <option value="This Little Light of Mine">This Little Light of Mine</option>
            <option value="Exclusive 1">Exclusive 1</option>
            <option value="Exclusive 2">Exclusive 2</option>
          </Dropdown>
          <div>
            <div
              type="text"
              className="border-[1px] p-2 text-lg border-black w-full"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <p>Description: {description}</p>
          </div>
          <div className="mt-3">
            <input
              type="file"
              className="border-[1px] p-2 text-lg border-black"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button
            style={{maxWidth: "50%", 
            height: "100%",
            display: "flex",
            justifyContent: "center",
            border: "solid 2px black",
            padding: "0.5rem",
            borderRadius: "1rem" }}
            type="submit"
            className="mt-5 w-full p-5 bg-green-700 text-white text-lg rounded-xl animate-pulse"
          >
            Mint
          </button>
        </form>
      </div>
    </Card>
  );
}
export default Home;