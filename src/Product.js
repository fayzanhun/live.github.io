import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./Helpers/FormatPrice";

const Product = ({ id, name, image, price, category }) => {
  const singleProduct = {
    id: 1,
    name: "Casio",
    price: 100,
    description: "Product Description",
    stock: 10,
    stars: 4,
    reviews: 20,
    colors: ["ferozi"],
    image: {
      ferozi: "casio.png",
    },
  };

  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} /> {/* Ensure image prop is used here */}
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">
              <FormatPrice price={price} />{" "}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
