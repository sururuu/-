import React ,{ useState }from "react";
import styled from "styled-components";
import CartItme from "../../Components/CartItem";
import Coupon from "../../Components/Coupon";
import Payment from "../../Components/Payment";
import { useSelector } from "react-redux";
import { coupons } from "../../data/coupons";

const Container = styled.div`
  padding: 100px;
`;
function Cart() {
  const [ticket,setTicket] = useState("")

  const cart = useSelector(store => store.cartReducer);
  const cartItem = cart.length >= 1 ? cart.map((item, idx) => {
      return <CartItme key={idx} item={item} idx={idx} />
  }) : <div>장바구니가 비어 있습니다</div>

  const price = cart.filter(item => item.availableCoupon !== false)
  var initialValue = 0;
  var sum = price.reduce(function (acc,curValue) {
  return acc + curValue.price;
  },initialValue)
  
  return (
    <>
      <Container>
          <h2>장바구니</h2>
          {cartItem}
          <h2>쿠폰</h2>
          <Coupon coupons={coupons} setTicket={setTicket} />
          <h2>결제</h2>
          <Payment sum={sum} ticket={ticket} />
      </Container>
    </>
  );
}

export default Cart;