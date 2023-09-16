import { gql } from "@apollo/client";

export const GoalData = gql`
  query getGoal {
    goal {
      data {
        attributes {
          english_heading
          English
          persian_heading
          Persian
          Chinese
          chinese_heading
        }
      }
    }
  }
`;
