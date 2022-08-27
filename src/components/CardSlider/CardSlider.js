import React from "react";
import "./cardSlider.css";
import {FaRegHeart, FaRandom} from 'react-icons/fa';
import {AiOutlineShoppingCart,AiOutlineSearch,AiOutlineStar} from 'react-icons/ai';

const CardSlider = ({ product }) => {
  return (
   
    <div className="boxshadow ">
  <div className="product-grid">
    <div className="product-image">
        <a href="#" className="image">
            <img className="img-1" src={product.img[0]} alt={product.name}/>
            <img className="img-2" src={product.img[1]} alt={product.name}/>
        </a>
        <ul className="product-links">
            <li><a href="#"><FaRegHeart/></a></li>
            <li><a href="#"><FaRandom/></a></li>
            <li><a href="#"><AiOutlineShoppingCart/></a></li>
        </ul>
        <a href="#" className="product-view"><AiOutlineSearch/></a>
    </div>
    <div className="product-content">
        <ul className="rating">
          <li>
            <AiOutlineStar />
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
          </li>
            
            <li className="fas fa-star disable"></li>
         
        </ul>
        <h3 className="title"><a href="#">{product.namepersian}</a></h3>
        <div className="price">{product.price} تومان</div>
    </div>
</div>
</div>

    
  
  );
};

export default CardSlider;
