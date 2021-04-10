import React from "react";
import styled from "styled-components";
import CartItme from "../../Components/CartItem";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 100px;
`;
function Cart() {
  const cart = useSelector(store => store.cartReducer);

  const cartItem = cart.length >= 1 ? cart.map((item, idx) => {
      return <CartItme key={idx} item={item} idx={idx} />
  }) : <div>장바구니가 비어 있습니다</div>
  return (
      <Container>
          <h2>장바구니</h2>
          {cartItem}
      </Container>
  );
}

export default Cart;