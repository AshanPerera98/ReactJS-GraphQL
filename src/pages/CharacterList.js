import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

function CharacterList() {
  const { error, loading, data } = useCharacters();

  console.log({ error, loading, data });

  if (loading) {
    return <>Loading....</>;
  }

  if (error) {
    return <>Oops! Something went wrong.</>;
  }

  return (
    <>
      {data.characters.results.map((character, key) => {
        return (
          <Link to={`${character.id}`} key={key}>
            <img src={character.image} alt={character.name} />
            <h1>{character.name}</h1>
            <h3>{character.id}</h3>
          </Link>
        );
      })}
    </>
  );
}

export default CharacterList;
