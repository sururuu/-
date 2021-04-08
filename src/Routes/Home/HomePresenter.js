import React from "react";
import PropTypes from "prop-types"
import Card from "../../Components/Card"

const HomePresenter = ({ productItems }) => (
  <>
  {productItems && productItems.map(item => (
      <Card
        key={item.id}
        id={item.id}
        imageUrl={item.coverImage}
        title={item.title}
      />
    ))}
  </>
);

HomePresenter.prototype = {
  productItems: PropTypes.array
}
export default HomePresenter;