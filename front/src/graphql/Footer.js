import { gql } from "@apollo/client";

export const FooterData = gql`
  query getFooter {
    footer {
      data {
        attributes {
          Address
          About_us
          Telephone
          p_about_us
          P_Address
          postal_code
          Email
          C_Address
          c_about_us
        }
      }
    }
  }
`;
