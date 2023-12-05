import { gql } from "@apollo/client";

export const GET_ALL_CARS = gql`
  query getAllCars{
    cars{
      id
      brand
      model
      model_year
      color
      img_src
      price
      description
      availability
    }
  }
`