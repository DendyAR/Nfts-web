import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./nftCard.css"

const NftCard = (props) => {
  const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;

  const [showModal, setShowMoal] = useState(false)

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/market/${id}`}>{title}</Link>
        </h5>
        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={creatorImg} alt="" className="w-100" />
          </div>

          <div className="creator__info d-flex w-100 align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>
            <div>
              <h6>Current Bid</h6>
              <p>{currentBid} ETH</p>
            </div>
          </div>
        </div>



        <div className="mt-3 d-flex align-items-center justify-content-between">
          <button className="bid__btn d-flex align-items-center gap-1" onClick={() => setShowMoal(true)}>
            <i className="ri-shopping-bag-line"></i>
            Place Bid
          </button>
            {showModal && <Modal setShowMoal={setShowMoal} />}
          <span className="history__link">
            <a href="..">View History</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
