import { useQuery, gql } from "@apollo/client";

export const useCharacters = () => {
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
