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
export const GET_MOVIES = gql`
  query getMovies($page: Int) {
    movies(page: $page) {
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
