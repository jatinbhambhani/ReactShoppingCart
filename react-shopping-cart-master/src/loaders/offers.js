import React, { Component } from "react";
import Offer from "./offer";

class LoadingOffers extends Component {
  render() {
    return (
      <div className="products loading">
        <Offer />
        <Offer />
        <Offer />
      </div>
    );
  }
}

export default LoadingOffers;
