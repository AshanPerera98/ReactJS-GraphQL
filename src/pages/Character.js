import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  console.log({ error, loading, data });

  if (loading) {
    return <>Loading....</>;
  }

  if (error) {
    return <>Oops! Something went wrong.</>;
  }

  return (
    <>
      <img src={data.character.image} alt={data.character.name} />
      <h1>{data.character.name}</h1>
      <h3>{data.character.id}</h3>
      <p>{data.character.gender}</p>
      <ul>
        {data.character.episode.map((episode, key) => {
          return (
            <li key={key}>
              <p>
                <strong>{episode.name}</strong>
                {episode.episode}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Character;
