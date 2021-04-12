import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 65px;
  border: 2px solid #edc988;
  border-radius: 5px;
  margin-bottom: 10px;
`;


const Coupon = ({ totalSum, sum, ticket }) => {
  console.log(totalSum,sum,ticket)
  const sale = (ticket === '10% 할인 쿠폰') ? Math.floor(sum*0.9) : sum-10000
  return(
    <Container>
      {totalSum} - {ticket} = {sale}
    </Container>
)};



export default Coupon;