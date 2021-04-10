import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  border: 2px solid #edc988;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 20px;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Price = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: red;
`

const CartItem = ({ item }) => {
  console.log(item)
  return(
    <Container>
      <Image 
      className="cart-item-image"
      alt="cart-item" 
      src={item.coverImage}
      />
      <Title>{item.title}</Title>
      <Price className="cart-item-price">{item.price}원</Price>
      <i className="fas fa-trash-alt"></i>
    </Container>
)};

CartItem.propTypes = {
  id: PropTypes.string,
};

export default CartItem;