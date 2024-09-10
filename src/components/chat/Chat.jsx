import React, { memo } from "react";
import { FaWhatsapp } from "react-icons/fa";
import PropTypes from "prop-types";
import "./Chat.css";

const Chat = ({ phoneNumber = "+447469849031", message = "" }) => {
  const handleButtonClick = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      console.error("Invalid phone number");
      return;
    }
    const chatURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(chatURL, "_blank");
  };

  return (
    <button
      className="chat-button"
      onClick={handleButtonClick}
      aria-label="Chat with us on WhatsApp"
      tabIndex="0" // Ensure button is focusable
    >
      <FaWhatsapp className="chat-icon" />
    </button>
  );
};

Chat.propTypes = {
  phoneNumber: PropTypes.string.isRequired, // phoneNumber is required
  message: PropTypes.string,
};

export default memo(Chat);
