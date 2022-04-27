import { ICaptionImage } from "../../../api/globalSchemas/globalSchemas.types";

export interface INavLinksProps {
  allNavLinks: INavLinksApiData[];
  withIcon: boolean;
}

export interface INavLinksApiData {
  navLink: {
    ctaIcon: ICaptionImage;
    path: string;
    text: string;
  };
}
