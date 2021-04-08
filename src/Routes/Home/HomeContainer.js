import React from "react";
import HomePresenter from "./HomePresenter";
import { productItems } from "../../data/productItems";

export default class extends React.Component {
  state = {
    items : null
  };
  componentDidMount() {
    const datas = productItems
    datas.sort(function (a,b){
      return b.score-a.score
    })
    this.setState({
      items : datas
    })
  }

  render() {
    const { items } = this.state;
    console.log(items)
    return (
      <HomePresenter 
      productItems={items} />
    )
  }
}