import { gql } from "@apollo/client";

const AboutData = gql`
  query getAbout {
    about {
      data {
        attributes {
          english_heading
          english_content
          persian_heading
          persian_content
          chinese_heading
          chinese_content
        }
      }
    }
  }
`;

export default AboutData;
