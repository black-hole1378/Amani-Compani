import { gql, useQuery } from "@apollo/client";

const ProductData = gql`
  query getCustomer($id: String!) {
    products(filters: { product_id: { eq: $id } }) {
      data {
        attributes {
          customer_name
          description
          total_weight
          persian_description
          Direction
          chinese_description
          Carton
          container_number
          persian_direction
          chinese_direction
          port_label {
            data {
              attributes {
                firts_label
                second_label
                third_label
                p_first_lable
                p_second_label
                p_third_label
                ch_first_lable
                ch_second_label
                ch_third_label
                port1_date
                port2_date
                port3_date
              }
            }
          }
        }
      }
    }
  }
`;

export const FetchCustomer = (customer_id) => {
  const { data, loading, err } = useQuery(ProductData, {
    variables: { id: customer_id },
  });
  return { data, loading, err };
};
