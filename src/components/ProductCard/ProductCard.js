import React from "react";
import "./productcard.css";
import {Link} from 'react-router-dom';
import { FaRegHeart, FaRandom } from "react-icons/fa";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";

const ProductCard = ({ product }) => {
 
  return (
    <div className="boxshadow " key={product.id}>
      <div className="product-grid">
        <div className="product-image">
          <Link to={`/product/${product.id}`} className="image">
            <img className="img-1" src={product.img[0]} alt={product.name} loading="lazy"/>
            <img className="img-2" src={product.img[1]} alt={product.name} loading="lazy"/>
          </Link>
          <ul className="product-links">
            <li>
              <a href="#">
                <AiOutlineShoppingCart />
              </a>
            </li>
          </ul>
          <a href="#" className="product-view">
            <AiOutlineSearch />
          </a>
        </div>
        <div className="product-content">
          <ul className="rating">
            <li>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </li>

            <li className="fas fa-star disable"></li>
          </ul>
          <h3 className="title">
            <a href="#">{product.namepersian}</a>
          </h3>
          <div className="d-flex justify-content-between">
          <div className="price">{product.price} تومان</div>
          <div className="d-flex ">
            <FaRegHeart className="m-1" />
            <FaRandom className="m-1"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
