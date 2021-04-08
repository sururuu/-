import React from "react";
import PropTypes from "prop-types"
import Card from "../../Components/Card"
import styled from "styled-components";

const Container = styled.div`
  padding: 100px;
`;


const HomePresenter = ({ productItems }) => (
  <>
  <Container>
    {productItems && productItems.map(item => (
        <Card
          key={item.id}
          id={item.id}
          imageUrl={item.coverImage}
          title={item.title}
        />
      ))}
  </Container>

  </>
);

HomePresenter.prototype = {
  productItems: PropTypes.array
}
export default HomePresenter;