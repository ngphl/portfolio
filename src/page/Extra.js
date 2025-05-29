import React, { useEffect, useRef, useState } from "react";
import "./PresentBox.css";
import giftImage from "./happy.jpg";

const recipientName = "Lily Trinh";

function Extra() {
  const [isOpen, setIsOpen] = useState(false);
  const presentRef = useRef(null);
  const presentImageRef = useRef(null);
  const nametagRef = useRef(null);

  const handlePresentClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (nametagRef.current) {
      nametagRef.current.innerText = recipientName;
    }

    if (presentImageRef.current) {
      presentImageRef.current.innerHTML = ""; // Clear existing

      const giftLink = document.createElement("a");
      giftLink.target = "_blank";

      const giftImg = document.createElement("img");
      giftImg.src = giftImage; // ← use the imported local image here

      giftLink.appendChild(giftImg);
      presentImageRef.current.appendChild(giftLink);
    }
  }, []);

  return (
    <div className="hero2">
      <section id="welcome-section2">
        <h1 className="welcome-font-header">ANH YÊU EMMMMMM!!!!</h1>
        <p className="welcome-font-p">ANH XIN LỖI EM RẤT NHIỀU</p>
        <p className="welcome-font-p">ÉCCCCCCCCCCCCCCCC</p>
      </section>

      {/* Present Box Section */}
      <section className="above-fold">
        <div className="wrap-present">
          <div
            className={`present-box ${isOpen ? "open" : ""}`}
            id="present"
            ref={presentRef}
            onClick={handlePresentClick}
          >
            <div className="present">
              <div
                className="img-wrap"
                id="present-image"
                ref={presentImageRef}
              ></div>
            </div>
            <div className="side front"></div>
            <div className="side back"></div>
            <div className="side left"></div>
            <div className="side right"></div>
            <div className="side top">
              <span className="to">
                <span className="name" id="nametag" ref={nametagRef}></span>
              </span>
            </div>
            <div className="side bottom"></div>
          </div>
        </div>
        <p className="info-text">Click to Open</p>
      </section>
    </div>
  );
}

export default Extra;
