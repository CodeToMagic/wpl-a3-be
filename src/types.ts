type Pricing = {
  hourly: string;
  perGame: string;
};

type Image = {
  description: string;
  path: string;
};

export type ArcadeGame = {
  pricing: Pricing;
  image: Image;
  _id?: string;
  name: string;
  description: string;
  type: string;
  minimumAge: number;
};
