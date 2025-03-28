// Importing css
import "./CharacterCard.css";
// importing useState, React hook
import { useState } from "react";

import sonicImg from "../../imgs/sonic.png";
// /Users/nena/Desktop/react-practices/sandbox/sonic-explorer/src/imgs/sonic.png
// /Users/nena/Desktop/react-practices/sandbox/sonic-explorer/src/components/CharacterCard/CharacterCard.jsx

// Component function CharacterCard!
// character is in curly braces because it takes all data from each character, its also..a prop! :D
function CharacterCard({ character }) {
  // showMore: in charge of keeping track if theres extra details, state variable!
  //   setShowMore : function that updates showMore
  // useState(false) : the extra details are hidden by default
  const [showMore, setShowMore] = useState(false);

  //   Toggling to show or hide details
  //   ! - not operator
  // !showMore : true becomes false (and vice versa)
  //   Turning it into a true
  const toggleMore = () => setShowMore(!showMore);

  //   Return - jsx that will display on screen! :O
  return (
    // Main div element..again! for the card (main card container) :D
    <div className="card">
      {/* JSX!! :D */}
      {/* uses prop CHARACTER with dot notation of name, it displays all the character's names in h2 element! */}
      <h2 className="card__name">{character.name}</h2>
      {/* Image no work :C */}
      <img src={character.image} alt={character.name} className="card__img" />
      {/* displaying description like we did with names! */}
      <p className="card__description">{character.description}</p>
      {/* Button that uses showMore state to switch between show more and show less */}
      {/* onClick{toggleMore} : calls toggleMore function whenever button is clicked! */}
      {/* Ternary operators: Checking which text it should display */}
      <button className="show-more-btn" onClick={toggleMore}>
        {showMore ? "Show Less!" : "Show More!"}
      </button>
      {/* Conditional rendering? This code only runs when showMore is true */}
      {/* && : And! check if both left and right conditions are true! details will only display when button is clicked! */}
      {/* Literal templates to display dynamic(?) values! */}
      {/* .join(",") turns the array into a string thats separated by commas! */}
      {showMore && (
        <div className="card__details">
          <p>{`Power: ${character.power}`}</p>
          <p>{`Voice Actor: ${character.voiceActor}`}</p>
          <p>{`Quote: ${character.quote}`}</p>
          <p>{`Friends: ${character.friends.join(", ")}`}</p>
          <p>{`Enemies: ${character.enemies.join(", ")}`}</p>
          <p>{`Backstory: ${character.backstory}`}</p>
        </div>
      )}
    </div>
  );
}

// exports CharacterCard to use in App.jsx!
export default CharacterCard;
