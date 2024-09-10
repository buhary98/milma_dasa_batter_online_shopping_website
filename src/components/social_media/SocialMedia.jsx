import React, { memo, lazy, Suspense } from "react";
import "./SocialMedia.css";

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
      <Suspense fallback={<div className="icon-loading">Loading...</div>}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="facebook"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook page"
          title="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          className="youtube"
          rel="noopener noreferrer"
          aria-label="Visit our YouTube channel"
          title="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          className="instagram"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram profile"
          title="Instagram"
        >
          <FaInstagram />
        </a>
      </Suspense>
    </div>
  );
};

export default memo(SocialMedia);
