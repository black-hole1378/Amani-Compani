import { gql } from "@apollo/client";

export const Order = gql`
  mutation addOrder($input: OrderInput!) {
    createOrder(data: $input) {
      data {
        id
      }
    }
  }
`;

// mutation addOrder(
//   $name: String!
//   $customer_number: String!
//   $product_name: String!
//   $cartons: Int!
//   $total_volume: String!
//   $total_weight: String!
//   $description: String!
//   $store_date: String!
// ) {
//   createOrder(
//     data: {
//       customer_name: $name
//       customer_number: $customer_number
//       product_name: $product_name
//       cartons: $cartons
//       total_volume: $total_volume
//       total_weight: $total_weight
//       description: $description
//       store_date: $store_date
//     }
//   ) {
//     data {
//       id
//     }
//   }
// }
