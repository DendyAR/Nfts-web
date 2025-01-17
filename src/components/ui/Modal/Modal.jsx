import React from "react";
import "./modal.css";

const Modal = ({ setShowMoal }) => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal" >
          <i className="ri-close-line" onClick={() => setShowMoal(false)}></i>
        </span>

        <h6 className="text-center text-light">Place a bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">5.89 ETH</span>
        </p>

        <div className="input__item mb-4">
          <input type="number" placeholder="00: 00 ETH " />
        </div>
        <div className="input__item">
          <h6 className="text-center text-light">
            Enter Quantity, 7 availabel
          </h6>
          <input type="number" placeholder="Enter quantity" />
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>You must bid at least</p>
          <span className="money">5.89 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>Service fee</p>
          <span className="money">0.89 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>Total bid amount</p>
          <span className="money">5.89 ETH</span>
        </div>

        <button className="place__bid-btn">Place a bid</button>
      </div>
    </div>
  );
};

export default Modal;
