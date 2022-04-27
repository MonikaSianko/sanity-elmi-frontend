import { gql } from "@apollo/client";
import { makeVar } from "@apollo/client";

const headerIdVar = makeVar([]);

export const HEADER_QUERY = gql`
  query getHeader {
    Header(id: ${headerIdVar}) {
      withIcon
      logo {
        alt
        image {
          asset {
            url
          }
        }
      }
      navLinks {
        linkName
        navLink {
          text
          path
          ctaIcon {
            alt
            image {
              asset {
                url
              }
            }
          }
        }
      }
    }
  }
`;
