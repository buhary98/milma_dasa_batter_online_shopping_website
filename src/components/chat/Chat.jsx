import React, { memo } from "react";
import { FaWhatsapp } from "react-icons/fa";
import PropTypes from "prop-types";
import "./Chat.css";

const Chat = ({ phoneNumber = "+447469849031", message = "" }) => {
  const handleButtonClick = () => {
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
    >
      <FaWhatsapp className="chat-icon" />
    </button>
  );
};

Chat.propTypes = {
  phoneNumber: PropTypes.string,
  message: PropTypes.string,
};

export default memo(Chat);
