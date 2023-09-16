import { gql } from "@apollo/client";

export const TitleData = gql`
  query getTitle {
    title {
      data {
        attributes {
          english_heading
          persian_heading
          chinese_heading
          english_subtitle
          persian_subtitle
          chinese_subtitle
          english_content
          persian_content
          chinese_content
        }
      }
    }
  }
`;
