// useState - React Hook, variables that change overtime
import { useState } from "react";
// sonicData - JSON file that has all the Sonic data!
import sonicData from "../JSON files/sonicCharacters.json";
// Component that will display cards
import CharacterCard from "./components/CharacterCard/CharacterCard";
// Importing CSS
import "./App.css";

// Component function App!
function App() {
  // Console logging sonicData to see the data in console
  console.log(sonicData);
  // Search and Filter - State Variables: holds "Search" Text and selected category (Filter)
  // setSearch and setFilter - functions that update the states (beginning variables search and filter)
  // useState("") and useState("All") - both states start at empty or All (states- search and filter)
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Filter Characters by category
  // Ternary operators to decide if it shows all characters or the filtered ones!
  // = = = : selected "All", its showing all characters
  // filters list to the selected category and will display characters based on that category
  const filteredData =
    filter === "All"
      ? sonicData
      : sonicData.filter((character) => character.category === filter);

  // Further filter by search input
  // Filters the filteredData to match the search text
  // checks characters name in text
  // They're both in lowercase so it can be easier to do sonic and Sonic when searching! (case-senstivie?)
  const searchData = filteredData.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  // Return - displays JSX on screen
  return (
    // Main div element
    <div className="app">
      {/* JSX NOW!!! */}
      {/* h1 is the app title! */}
      <h1>Sonic Character Explorer!</h1>
      {/* div with filter buttons */}
      <div className="filter-buttons">
        {/* all buttons have setFilter to update the filter state  */}
        {/* onClick event handler is used to change the filter to the appropiate category */}
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Hero")}>Hero</button>
        <button onClick={() => setFilter("Villain")}>Villain</button>
        <button onClick={() => setFilter("Anti-Hero")}>Anti-Heroes</button>
      </div>
      {/* Input for user to type in! */}
      {/* value = {search} : text box will always show the current state value */}
      {/* onChange - updates the search state whenever something is typed in */}
      <input
        type="text"
        placeholder="Search by name! :D"
        value={search}
        className="search__bar"
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Rendering Cards in! */}
      {/* .map() method loops through each character in searchData and returns a component of CharacterCard, displays each character as a card*/}
      {/* key={character.name} : special key for each card so React can track them down easily */}
      {/* character is a prop in CharacterCard! */}
      <div className="card__container">
        {searchData.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </div>
    </div>
  );
}
// exporting (no more jsx lines D:)
export default App;
