import { useEffect } from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "./context/ProductContext";
import PageNavigation from "./components/PageNavigation";
import { Container } from "./Styles/Container";
import MyImage from "./components/MyImage";
import FormatPrice from "./Helpers/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";
import { useState } from "react";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  //  console.log("🚀 ~ SingleProduct ~ singleProduct:", singleProduct);

  const { id } = useParams();

  const {
    id: Fayzan,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    colors = [],
  } = singleProduct;

  const [selectedColor, setSelectedColor] = useState(colors[0] || " ");

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
    window.scrollTo(0, 0);
  }, []);

  if (isSingleLoading) {
    return <div> Loading... </div>;
  }

  const colorImages = {
    "#ff0000": "public/images/red.jpg",
    "#22D3EF": "public/images/casio.png",
    "#000000": "public/images/black.png",
  };

  const handleColorClick = (color) => {
    console.log("Color clicked: ${color}");
    setSelectedColor(color);
  };

  console.log(`Selected Color: ${selectedColor}`);
  console.log(`Image Path: ${colorImages[selectedColor]}`);

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* Product Images*/}
          <div className="product-images">
            <img
              className="Fayzan"
              src={colorImages[selectedColor] || "default-image.jpg"}
              alt={`Product in ${selectedColor}`}
            />
          </div>
          <div className="product-data">
            <h2> {name} </h2>
            <Star stars={stars} reviews={reviews} />
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day:
              <FormatPrice price={price} />
            </p>
            <p> {description} </p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p> Free Delivery </p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p> 30 days replacement </p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p> Year Warranty </p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"} </span>
              </p>
              <p>
                ID:
                <span> {id} </span>
              </p>
              <p>
                Brand:
                <span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && (
              <AddToCart
                product={singleProduct}
                colors={colors}
                setSelectedColor={setSelectedColor}
              />
            )}
            <div className="color-selection">
              {colors.map((color, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                  className={`color-button ${
                    selectedColor === color ? "selected" : ""
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
  .product-images .Fayzan src {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SingleProduct;
