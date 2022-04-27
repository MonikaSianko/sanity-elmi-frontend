import React, { memo } from "react";
import { StyledNavLinks } from "./NavLinks.styled";
import { INavLinksApiData, INavLinksProps } from "./NavLinks.types";
import TextLink from "../../Shared/TextLink/TextLink";

const NavLinks: React.FC<INavLinksProps> = ({
  allNavLinks,
  withIcon,
}: INavLinksProps): JSX.Element => {
  return (
    <StyledNavLinks className="menu-links">
      <ul className="links">
        {allNavLinks.map(({ navLink }: INavLinksApiData) => {
          const { text, path, ctaIcon } = navLink;
          return (
            <li key={text}>
              <TextLink
                path={path}
                content={text}
                withIcon={withIcon}
                iconAlt={ctaIcon.alt}
                iconUrl={ctaIcon.image?.asset?.url}
              />
            </li>
          );
        })}
      </ul>
    </StyledNavLinks>
  );
};

export default memo(NavLinks);
