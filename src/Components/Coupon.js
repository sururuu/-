import React, { useState } from "react";
import styled from "styled-components";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
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


const Coupon = ({ coupons,setTicket }) => {
  const [coupon,setCoupon] = useState('')

  function SelectItem(eventKey) {
    setCoupon(eventKey)
    setTicket(eventKey)
  }

  const eventKey = '쿠폰선택'
  return(
    <Container>
      <DropdownButton id="dropdown-basic-button" title={eventKey} onSelect={SelectItem}>
      {coupons.map((coupon,idx) => 
      <Dropdown.Item eventKey={coupon.title} key={idx}>{coupon.title}</Dropdown.Item>
      )}
      </DropdownButton>
      {coupon}
    </Container>
)};



export default Coupon;