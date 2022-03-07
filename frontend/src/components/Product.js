import React from "react";
import { Card } from "react-bootstrap";
import "../App.sass";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, image, rating, numReviews, price } = product;

  return (
    <Card className="my-3 p-3 rounded rm-tx-decoration">
      <Link to={`/product/${_id}`} style={{ textDecoration: "none" }}>
        <Card.Img src={image} variant="top" />
        <Card.Body>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Card.Body>
        <Card.Text as="div">
          <Rating value={rating} text={`${numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">${price}</Card.Text>
      </Link>
    </Card>
  );
};

// Product.prototype = {
//   _id:
// };

export default Product;
