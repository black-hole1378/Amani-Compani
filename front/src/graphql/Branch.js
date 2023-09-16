import { gql } from "@apollo/client";

const BranchData = gql`
  query getBranch {
    branches {
      data {
        attributes {
          email
          p_addrees
          address
          telephone
          chinese_address
          working_time
        }
      }
    }
  }
`;

export default BranchData;
