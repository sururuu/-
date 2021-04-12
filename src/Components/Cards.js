import React from "react";
import Card from "./Card";

const Cards = ({ productItems, loading }) => {
  if (loading) {
    return <h1>Loading</h1>
  }
  return (
    <div>
      {productItems && productItems.map(item => (
          <Card
            key={item.id}
            id={item.id}
            item={item}
          />
        ))}
    </div>
  )
}

export default Cards