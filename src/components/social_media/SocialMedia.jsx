import React, { memo, lazy } from "react";
import "./SocialMedia.css";

// Lazy load icons
const FaFacebook = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaFacebook }))
);
const FaYoutube = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaYoutube }))
);
const FaInstagram = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaInstagram }))
);

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a
        href="https://www.facebook.com"
        target="_blank"
        className="facebook"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        className="youtube"
        rel="noopener noreferrer"
      >
        <FaYoutube />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        className="instagram"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default memo(SocialMedia);
