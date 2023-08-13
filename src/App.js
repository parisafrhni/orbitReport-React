import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData";

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))]; //iterates over each object and extracts the value of the orbitType
  const filterByType = (currentType) => {
    const filteredSats = satData.filter((newSatDisplay) => {//It iterates through each object in the array and returns a new array containing only the objects that match the condition specified in the callback function.
      return newSatDisplay.orbitType === currentType;
    });
    setSat(filteredSats);
  };
  return (
    <div>
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
      <Banner />
    </div>
  );
}

export default App;
