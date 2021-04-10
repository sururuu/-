import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCart } from "../store/actions";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Price = styled.span`
  display: block;
  margin-bottom: 3px;
`
const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;

const Card = ({ item }) => {
  const dispatch = useDispatch();
  return(
    <Container>
      <ImageContainer>
        <Image
          bgUrl={item.coverImage}
        />
      </ImageContainer>
      <Title>
        {item.title}
      </Title>
      <Price>
       {item.price}
      </Price>
      <button onClick={() => dispatch(addCart(item)) }>장바구니</button>
    </Container>
)};

Card.propTypes = {
  id: PropTypes.string,
};

export default Card;