import React from "react";
import { FaStar } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Person1 from "../../assets/images/person1.webp";
import Person2 from "../../assets/images/person2.webp";
import Person3 from "../../assets/images/person3.webp";
import Person4 from "../../assets/images/person4.webp";

import "./Review.css";

const ReviewItem = React.memo(({ review }) => {
  const totalStars = 5;

  return (
    <div className="review-item" aria-label={`Review by ${review.name}`}>
      <div
        className="review-stars"
        aria-label={`Rating: ${review.rating} out of 5 stars`}
      >
        {[...Array(totalStars)].map((_, index) => (
          <FaStar
            key={index}
            className="review-star"
            color={index < review.rating ? "#0A5247" : "#BFD202"}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="review-text">{review.text}</p>
      <div className="review-person">
        <LazyLoadImage
          className="reviewer-pic"
          src={review.src}
          alt={review.name}
          effect="blur"
          onError={(e) => (e.target.src = "../../assets/images/person1.webp")} // Replace with a fallback image
        />
        <p className="reviewer-name">{review.name}</p>
      </div>
    </div>
  );
});

const Review = () => {
  const reviews = [
    {
      id: 1,
      src: Person1,
      text: "Milma Dosa Batter is a game-changer for our family. It's so easy to use and the dosas come out perfectly crispy and golden every time. I love that it’s made with natural ingredients and tastes just like homemade. Highly recommend!",
      name: "Sathish Kumar",
      rating: 5,
    },
    {
      id: 2,
      src: Person2,
      text: "I was skeptical about trying pre-made dosa batter, but Milma Dosa Batter exceeded all my expectations. The quality is top-notch, and the dosas turn out perfect every single time. It’s like having a taste of South India in every bite!",
      name: "Abdul Hameed",
      rating: 4,
    },
    {
      id: 3,
      src: Person3,
      text: "As someone who’s always on the go, Milma Dosa Batter has been a lifesaver. It’s quick, convenient, and doesn’t compromise on taste. The dosas are light, fluffy, and absolutely delicious. This batter has become a staple in my kitchen.",
      name: "Raja Murugan",
      rating: 3,
    },
    {
      id: 4,
      src: Person4,
      text: "I’ve tried several dosa batters, but Milma Dosa Batter is by far the best. The batter is fresh, and the dosas are crispy on the outside and soft inside. It’s also versatile – I use it for making uttapams and even some creative fusion dishes. Great product!",
      name: "Ragunath Bala",
      rating: 5,
    },
  ];

  return (
    <section id="review" aria-labelledby="review-heading">
      <div className="review-container">
        <h1 id="review-heading" className="review-heading">
          Reviews
        </h1>
        <div className="review-box">
          {reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
