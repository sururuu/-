import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  font-family: 'Dela Gothic One', cursive;
`;

const List = styled.ul`
  display: flex;
  list-style:none;
  width: 100%;
`;

const Item = styled.li`
  width: 30%;
  height: 50px;
  text-align: center;
  font-size:30px;
`;

const RItem = styled.li`
  width: 70%;
  height: 50px;
  margin-left: 15%;
  text-align: right;  
`

const Img = styled.img`
  width: 5%;
`

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration:none;
  color:inherit;
`;

export default withRouter(({location: {pathname}}) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">CLASS 101</SLink>
      </Item>
      <RItem current={pathname === "cart"}>
        <SLink to="/cart"><Img src="data:image/png;base64,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"/></SLink>
      </RItem>
    </List>
  </Header>
));