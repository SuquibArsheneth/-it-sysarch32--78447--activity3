import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

function Pokedex() {
  const [language, setLanguage] = useState("english");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="pokedex">
      <div className="language-buttons">
        <button onClick={() => handleLanguageChange("english")}>English</button>
        <button onClick={() => handleLanguageChange("japanese")}>Japanese</button>
        <button onClick={() => handleLanguageChange("chinese")}>Chinese</button>
        <button onClick={() => handleLanguageChange("french")}>French</button>
      </div>
      {pokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name[language]} // Adjusting to use 'name' directly
          type={pokemon.type}
          base={pokemon.base}
          image={pokemon.image}
        />
      ))}
    </div>
  );
}

export default Pokedex;