import React, { useEffect, useState } from "react";
import { productItems } from "../../data/productItems";
import styled from "styled-components";
import Pagination  from "../../Components/Pagination";
import Cards from "../../Components/Cards";
const Container = styled.div`
  padding: 100px;
`;
function Home() {
  const [items, setItems] = useState(productItems);
  const [loading, setLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setItems(items => items.sort(function (a,b){
      return b.score-a.score
    }));
    setLoading(false);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = productItems.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    
    <Container>
      <Cards productItems={currentPosts} loading={loading} />
      <Pagination 
        paginate={paginate}
        totalPosts={productItems.length}
        postsPerPage={postsPerPage}
      />
  </Container>
  )
}

export default Home;