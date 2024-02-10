import { useQuery, gql } from "@apollo/client";

export const useCharacter = (id) => {
  const GET_CHARACTER = gql`
    query getChatacter($id: ID!) {
      character(id: $id) {
        name
        id
        image
        gender
        episode {
          name
          episode
        }
      }
    }
  `;

  return useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });
};
