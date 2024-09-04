import React from "react";
import useImageOnIntersection from "../hooks/useImageOnIntersection";

import BannerImage from "../../assets/images/dosa-banner.webp";
import "./HeadBanner.css";

const HeadBanner = () => {
  const { isImageLoaded, handleImageLoad } = useImageOnIntersection();

  return (
    <section id="head">
      <div className="spacer"></div>
      <div className="banner-row">
        <div className="banner-col-left">
          <h1 className="banner-heading">Milma</h1>
          <p className="banner-content">
            " Crispy mornings, fluffy evenings,
            <br />
            Perfect dosa batter for every feeling.
            <br />
            From our kitchen to your table,
            <br />
            Authentic taste, always stable. "
          </p>
        </div>
        <div className="banner-col-right">
          <img
            src={BannerImage}
            alt="Sample Image"
            className={`banner-image ${isImageLoaded ? "loaded" : ""}`}
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </section>
  );
};

export default HeadBanner;
