import React from 'react'
import './nftBtnCollection.css'

export default function NFTBtnCollection({fundraiser=false,fontSize}) {
  return (
    <div className="nftBtn">
    <div className={fundraiser?"nftCollBtn nftCollBtnDetails":"nftCollBtn"}>
      <span>NFT Collection</span>
    </div>
    {!fundraiser  && (
    <div className="nftCollBtn nftFundBtn" >
      <span>Fundraise</span>
    </div>)}

    {fundraiser  && (

    <div className="nftCollBtn nftFundBtn" style={{display:"flex"}}>
    <span style={{fontSize:"18px", padding:"5px 15px"}}>Fundraise</span>
  </div>

    )
    
    }
  </div>
  )
}
