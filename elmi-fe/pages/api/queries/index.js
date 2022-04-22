import { gql } from "@apollo/client";

export const NAV_LINKS = gql`
  query getNavLinks {
    allNavLinks {
      linkName
    }
  }
`;
