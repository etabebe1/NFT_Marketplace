import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

// INTERNAL IMPORT
import "./Form.css";
import images from "../../../assets/img/z-index.img";

import { IoIosMail } from "react-icons/io";
import { MdHttp } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";

// COMPONENTS
import { Button } from "../../z-index.component";

function From() {
  const [FileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    setFileUrl(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className="form-container">
      <div className="header">
        <h1>Profile Setting</h1>
        <p>
          You can set preferred display name, create your profile URL and manage
          other personal setting
        </p>
      </div>

      <form className="form">
        <div className="profile-image" {...getRootProps()}>
          <input {...getInputProps()} />
          <img
            src={images.user1}
            alt="user-profile"
            className="user-profile-image"
          />
          <p>Change Image</p>
        </div>

        <div className="input-container">
          {/* USERNAME */}
          <div className="username-container">
            <label className="username">Username</label>
            <input
              type="text"
              className="username-input"
              placeholder="Jeremiah T.A"
            />
          </div>

          {/* EMAIL */}
          <div className="email-container">
            <label className="username">Email</label>
            <div className="icon-input">
              <i>
                <IoIosMail />
              </i>
              <input type="text" className="email-input" />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="description-container">
            <label className="description">Description</label>
            <div>
              <textarea
                name="description"
                id="description"
                cols="30"
                placeholder="Something about yourself in a few words"
              ></textarea>
            </div>
          </div>

          {/* WEBSITE */}
          <div className="website-container">
            <label className="website">Website</label>
            <div className="icon-input">
              <i>
                <MdHttp />
              </i>
              <input
                type="text"
                className="website-input"
                placeholder="website"
              />
            </div>
          </div>

          {/* SOCIAL */}
          <div className="socials-container">
            <div className="facebook-container">
              <label className="facebook">Facebook</label>
              <div className="icon-input">
                <i>
                  <FaFacebookF />
                </i>
                <input type="text" className="facebook-input" />
              </div>
            </div>

            <div className="twitter-container">
              <label className="twitter">Twitter</label>
              <div className="icon-input">
                <i>
                  <FaXTwitter />
                </i>
                <input type="text" className="twitter-input" />
              </div>
            </div>
            <div className="instagram-container">
              <label className="instagram">Instagram</label>
              <div className="icon-input">
                <i>
                  <TiSocialInstagram />
                </i>
                <input type="text" className="instagram-input" />
              </div>
            </div>
          </div>

          {/* WALLET ADDRESS */}
          <div className="wallet-container">
            <label className="wallet">Wallet Address</label>
            <div className="icon-input">
              <i>
                <MdHttp />
              </i>
              <input
                type="text"
                className="wallet-input"
                placeholder="0x6F59e0461Ae5E2799F1fB3847f05a63B16d0DbF8"
              />
              <i className="copy">
                <FaCopy />
              </i>
            </div>
          </div>

          {/* UPDATE BUTTON */}
          <div className="update-button-container">
            <Button btnName={"Update Profile"} btnComponent={"sideBar-btn"} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default From;
