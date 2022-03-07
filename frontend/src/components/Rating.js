import React from "react";
import PropTypes from "prop-types";
import '../App.sass'

const Rating = ({ value, text, color }) => {
  const handleStars = (starPosition) => {
    let starIcon;
    if (value >= starPosition) {
      starIcon = "fas fa-star";
    } else if (value >= starPosition - 0.5) {
      starIcon = "fas fa-star-half-alt";
    } else {
      starIcon = "far fa-star";
    }

    return starIcon;
  };

  const renderStars = [1, 2, 3, 4, 5].map((num) => (
    <span>
      <i className={handleStars(num)} style={{ color }} key={num} />
    </span>
  ));
  return (
    <div>
      <div className="stars-container">{renderStars}</div>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.prototype = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
