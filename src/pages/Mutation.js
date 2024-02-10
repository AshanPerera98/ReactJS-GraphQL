import React from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_CHARACTER = gql`
  mutation CreateUser(
    $name: String!
    $gender: String!
    $status: String!
    $image: String!
  ) {
    createCharacter(
      character: {
        name: $name
        gender: $gender
        status: $status
        image: $image
      }
    ) {
      character {
        name
        id
      }
    }
  }
`;

function Mutation() {
  const [createCharacter, { error, loading, data }] = useMutation(
    CREATE_CHARACTER,
    {
      variables: {
        name: "New Character",
        gender: "Male",
        status: "Alive",
        image: "https://image-url.com",
      },
    }
  );

  return (
    <div>
      <p>Mutation</p>
      <button onClick={createCharacter}></button>
    </div>
  );
}

export default Mutation;
