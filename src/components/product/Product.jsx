import React, { useMemo } from "react";
import useImageOnIntersection from "../hooks/useImageOnIntersection";
import ProductImage from "../../assets/images/product.webp";
import "./Product.css";

const Product = () => {
  const ProductText1 = useMemo(
    () => (
      <>
        Our Milma dosa batter is meticulously crafted to deliver the perfect
        balance of crispiness and softness in every bite. Made with love and
        precision, it ensures your dosas are always deliciously perfect. From
        classic dosas to innovative recipes, our batter is versatile enough to
        suit all your culinary creations. Unleash your creativity and explore
        endless possibilities with our premium dosa batter.
      </>
    ),
    []
  );

  const ProductText2 = useMemo(
    () => (
      <>
        We believe in the power of fresh ingredients. Our Milma dosa batter is
        made from freshly ground rice and lentils, preserving the authentic
        taste and nutritional value, so you can enjoy dosas that are as
        wholesome as they are flavorful. Convenience meets tradition with our
        ready-to-use dosa batter. Whether you're a busy professional or a home
        cook, our batter simplifies your cooking experience, bringing the joy of
        homemade dosas to your table with ease.
      </>
    ),
    []
  );

  const { isImageLoaded, isSectionVisible, sectionRef, handleImageLoad } =
    useImageOnIntersection();

  return (
    <section id="product" ref={sectionRef}>
      <div>
        <h1 className="product-heading-1">Our Product</h1>
      </div>
      <div className="product-row">
        <div className="product-col-left">
          <h1 className="product-heading-2">Our Product</h1>
          <p className="product-content-1">{ProductText1}</p>
          <p className="product-content-2">{ProductText2}</p>
        </div>
        <div className="product-col-right">
          {isSectionVisible && (
            <img
              src={ProductImage}
              alt="Milma dosa batter"
              className={`product-image ${isImageLoaded ? "loaded" : ""}`}
              loading="lazy"
              onLoad={handleImageLoad}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
