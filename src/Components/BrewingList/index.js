import React from "react";
import BrewMethodItem from "./BrewMethodItem";

const BrewingList = ({ brewingMethods }) => {
  const methodList = brewingMethods.map((method) => (
    <div className="col-4">
      <BrewMethodItem brewingMethod={method} />
    </div>
  ));

  return <div className="row">{methodList}</div>;
};

export default BrewingList;
