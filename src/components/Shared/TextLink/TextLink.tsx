import React from "react";

interface ITextLinkProps {
  path: string;
  content: string | JSX.Element;
  withIcon: boolean;
  iconUrl?: string;
  iconAlt?: string;
}

const TextLink: React.FC<ITextLinkProps> = ({
  path,
  content,
  withIcon,
  iconUrl,
  iconAlt,
}: ITextLinkProps): JSX.Element => {
  return (
    <>
      {withIcon ? (
        <span>
          {iconUrl && <img src={iconUrl} alt={iconAlt} />}
          <a href={path}>{content}</a>
        </span>
      ) : (
        <a href={path}>{content}</a>
      )}
    </>
  );
};

export default TextLink;
