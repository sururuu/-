import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteCart } from "../store/actions";

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

const CartItem = ({ item, setCalitem }) => {
  useEffect(() => {
    test()
  }, []);
  const dispatch = useDispatch();
  function test() {
    var obj_length = document.getElementsByName("target").length;
    var new_cart = [];
    for (var i=0; i<obj_length; i++) {
      const target_obj = document.getElementsByName("target")[i]
        if (target_obj.checked === true) {
             const id = target_obj.value
             new_cart.push(id)
        }
    }
    setCalitem(new_cart)
  }
  return(
    <Container>
      <input type="checkbox" name="target" defaultChecked onClick={test} value={item.id} ></input>
      <Image 
      className="cart-item-image"
      alt="cart-item" 
      src={item.coverImage}
      />
      <Title>{item.title}</Title>
      <Price className="cart-item-price">{item.price}원</Price>
      <button onClick={() => dispatch(deleteCart(item)) }>❌</button>
    </Container>
)};

CartItem.propTypes = {
  id: PropTypes.string,
};

export default CartItem;