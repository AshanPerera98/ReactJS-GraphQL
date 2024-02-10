import { useQuery, gql } from "@apollo/client";

export const useCharacter = () => {
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

  return useQuery(GET_CHARACTERS);
};
