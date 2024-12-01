import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
  query GetCountry {
    country(code: "BR") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

// Sing in query
export const SIGNIN_MUTATION = gql`
  mutation ($email: String!, $password: String!) {
    signin(email: $email, password: $password)
  }
`;
// Sing up user
export const SIGNUP_MUTATION = gql`
  mutation ($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password)
  }
`;
// Get movie list
export const GET_MOVIES = gql`
  query ($page: Int, $search: String) {
    movies(page: $page, search: $search) {
      id
      description
      featured_image
      genre
      imdb_score
      video_url
      title
      released_year
    }
  }
`;
// Git single movie
export const GET_MOVIE = gql`
  query ($movieId: ID!) {
    movie(id: $movieId) {
      id
      description
      featured_image
      genre
      imdb_score
      video_url
      title
      released_year
    }
  }
`;
