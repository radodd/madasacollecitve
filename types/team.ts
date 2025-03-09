export interface TeamCard {
  header: string;
  member: {
    cardFront: {
      src: string;
      name: string;
      role: string;
      title?: string;
    };
    cardBack: {
      src: string;
      title: string;
      text: string;
      linkedin: string;
      portfolio?: string;
    };
    alt: string;
  }[];
}
