import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;

const Card = ({ id, imageUrl, title }) => (
    <Container>
      <ImageContainer>
        <Image
          bgUrl={imageUrl}
        />
      </ImageContainer>
      <Title>
        {title}
      </Title>
    </Container>
);

Card.propTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Card;