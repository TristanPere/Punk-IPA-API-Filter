import "./App.scss";
import { useState } from "react";
import beers from "./data/beer";
import Navbar from "./containers/Navbar/Navbar";
import CardList from "./containers/CardList/CardList";
function App() {
  const [filter, setFilter] = useState({
    name: "",
    ABV: false,
    Classic: false,
    Acidity: false,
  });
  const filterTypeArr = ["ABV", "Classic", "Acidity"];
  const handleNameInput = (event) => {
    setFilter({
      name: event.target.value,
      ABV: filter.ABV,
      Classic: filter.Classic,
      Acidity: filter.Acidity,
    })
  };
  const handleCheck = (event) => {
    if (event.target.value == "ABV") {
      setFilter({
        name: filter.name,
        ABV: !filter.ABV,
        Classic: filter.Classic,
        Acidity: filter.Acidity,
      });
    } else if (event.target.value == "Classic") {
      setFilter({
        name: filter.name,
        ABV: filter.ABV,
        Classic: !filter.Classic,
        Acidity: filter.Acidity,
      })
    } else if (event.target.value == "Acidity") {
      setFilter({
        name: filter.name,
        ABV: filter.ABV,
        Classic: filter.Classic,
        Acidity: !filter.Acidity,
      })
    }
  };
  return (
    <div className="App">
      <Navbar
        handleNameInput={handleNameInput}
        handleCheck={handleCheck}
        filterTypeArr={filterTypeArr}
      />
      <CardList beersArr={beers} filter={filter} />
    </div>
  );
}

export default App;
