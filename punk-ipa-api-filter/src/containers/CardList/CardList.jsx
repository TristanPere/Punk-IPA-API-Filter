import React from "react";
import Card from "../../components/Card/Card";

import "./CardList.scss";
const Main = (props) => {
  const { beersArr, filter } = props;
  const beersArrClone = [...beersArr];

  let filteredArr = beersArrClone.filter((beer) => {
    const searchTerm = filter.name;
    return beer.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  if (filter.ABV) {
    filteredArr = filteredArr.filter((beer) => {
      const searchTerm = 6;
      return beer.abv < searchTerm;
    });
  }
  if (filter.Classic) {
    filteredArr = filteredArr.filter((beer) => {
      const searchTerm = 2010;
      return (
        Number(beer.first_brewed.slice(beer.first_brewed.length - 4)) <
        searchTerm
      );
    });
  }
  if (filter.Acidity) {
    filteredArr = filteredArr.filter((beer) => {
      const searchTerm = 4;
      return beer.ph < searchTerm;
    });
  }

  const beerJSX = filteredArr.map((beer) => {
    return (
      <Card
        key={beer.id}
        imageStr={beer.image_url}
        name={beer.name}
        description={beer.description}
      />
    );
  });
  return <div className="card-container">{beerJSX}</div>;
};

export default Main;
