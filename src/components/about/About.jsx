import React, { useMemo } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import useImageOnIntersection from "../hooks/useImageOnIntersection";

import AboutImage from "../../assets/images/about.webp";
import "./About.css";

const About = () => {
  const AboutText1 = useMemo(
    () => (
      <>
        Rooted in tradition and crafted with passion, we bring the authentic
        taste of South Indian dosa batter to your kitchen. Our journey began
        with a simple goal: to share the love for this quintessential delicacy,
        one batter at a time. We are dedicated to bringing convenience without
        compromising on authenticity. Our mission is to make the art of dosa
        making accessible to everyone, so you can enjoy delicious, homemade
        dosas effortlessly.
      </>
    ),
    []
  );

  const AboutText2 = useMemo(
    () => (
      <>
        At the heart of our dosa batter lies a commitment to quality. We use
        only the finest ingredients, handpicked and carefully blended to create
        a batter that promises perfect dosas every time. Taste the difference of
        purity and freshness. Experience the essence of South India with every
        bite. Our dosa batter is crafted using traditional recipes passed down
        through generations, ensuring that you enjoy the same authentic taste
        that has delighted families for centuries.
      </>
    ),
    []
  );

  const { isImageLoaded, sectionRef, handleImageLoad } =
    useImageOnIntersection();

  return (
    <section id="about" ref={sectionRef}>
      <div>
        <h1 className="about-heading-1">About Us</h1>
      </div>
      <div className="about-row">
        <div className="about-col-left">
          <LazyLoadImage
            className={`about-image ${isImageLoaded ? "loaded" : "blur"}`}
            src={AboutImage}
            alt="Sample Image"
            effect="blur"
            onLoad={handleImageLoad}
            onError={(e) => (e.target.src = "../../assets/images/about.webp")}
          />
        </div>
        <div className="about-col-right">
          <h1 className="about-heading-2">About Us</h1>
          <p className="about-content-1">{AboutText1}</p>
          <p className="about-content-2">{AboutText2}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
