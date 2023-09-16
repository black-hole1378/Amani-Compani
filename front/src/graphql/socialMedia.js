import { gql } from "@apollo/client";

export const SocialMediaData = gql`
  query getSocialMedia {
    socialMedia {
      data {
        attributes {
          facebook
          whatsapp
          linkedin
          insagram
          twitter
        }
      }
    }
  }
`;
