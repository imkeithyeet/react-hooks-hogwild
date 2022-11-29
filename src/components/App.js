import React from "react";
import Nav from "./Nav";
import {useState} from "react";
import HogTiles from "./HogTiles";
import hogs from "../porkers_data";
import Filter from "./Filter"

function App() {
	const[showGreased, setShowGreased]= useState(false)
	// console.log("showGreased")
	const [sortBy, setSortBy] = useState("name");

  const filteredHogs = hogs
    .filter((hog) => (showGreased ? hog.greased : true))
    .sort((hog1, hog2) => {
      if (sortBy === "weight") {
        return hog1.weight - hog2.weight;
      } else {
        return hog1.name.localeCompare(hog2.name);
      }
    });
	return (
		<div className="App">
			<Nav />
			<Filter 
			sortBy= {sortBy}
			setSortBy={setSortBy}
			showGreased={showGreased}
			setShowGreased={setShowGreased}
			/>
			<HogTiles hogs={filteredHogs} />
		</div>
	);
}

export default App;
