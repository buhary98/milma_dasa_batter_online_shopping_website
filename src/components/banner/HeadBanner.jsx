import React from "react";
import useImageOnIntersection from "../hooks/useImageOnIntersection";

import BannerImage from "../../assets/images/dosa-banner.webp";
import MilmaImage from "../../assets/images/milma.webp";
import "./HeadBanner.css";

const HeadBanner = () => {
  const { isImageLoaded, sectionRef, handleImageLoad } =
    useImageOnIntersection();

  return (
    <section id="head" ref={sectionRef}>
      <div className="spacer"></div>
      <div className="banner-row">
        <div className="banner-col-left">
          <img
            src={MilmaImage}
            alt="Milma"
            className={`milma-image ${isImageLoaded ? "loaded" : "blur"}`}
            loading="lazy"
            onLoad={handleImageLoad}
          />
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
            className={`banner-image ${isImageLoaded ? "loaded" : "blur"}`}
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </section>
  );
};

export default HeadBanner;
