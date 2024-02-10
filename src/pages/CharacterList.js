import React from "react";

import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function CharacterList() {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

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
          <div key={key}>
            <img src={character.image} alt={character.name} />
            <h1>{character.name}</h1>
            <h3>{character.id}</h3>
          </div>
        );
      })}
    </>
  );
}

export default CharacterList;
