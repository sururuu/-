import React, { useEffect, useState } from "react";
// import HomePresenter from "./HomePresenter";
import { productItems } from "../../data/productItems";
import Card from "../../Components/Card"
import styled from "styled-components";

const Container = styled.div`
  padding: 100px;
`;
function Home() {
  const [items, setItems] = useState(productItems);
  
  useEffect(() => {
    setItems(items => items.sort(function (a,b){
      return b.score-a.score
    }));
  }, []);

  return (
    <Container>
    {productItems && productItems.map(item => (
        <Card
          key={item.id}
          id={item.id}
          item={item}
        />
      ))}
  </Container>
  )
}

export default Home;