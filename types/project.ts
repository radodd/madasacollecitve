export interface Project {
  title: string;
  subtitle?: string;
  image_mobile: string;
  image_desktop: string;
  href: string;
  tags: string[];
  overview?: {
    text: string;
  };
  challenge?: {
    text: string;
  };
  approach?: {
    list: string[];
    images: {
      src: string;
      width: number;
      height: number;
    }[];
  };
  solution?: {
    list: string[];
    images: {
      src: string;
      width: number;
      height: number;
    }[];
  };
  impact?: {
    list: string[];
    image: {
      src: string;
      width: number;
      height: number;
    };
  };
  client?: {
    review: string;
    reviewer: string;
  };
}
