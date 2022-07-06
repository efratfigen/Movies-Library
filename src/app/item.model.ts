
export interface ItemParams {
  Title?: string;
  Year?: string;
  imdbID?: string;
  Type?: ITEM_TYPE;
  Poster?: string;
  newTitleValue?: string;
}

export enum ITEM_TYPE {
  SERIES = 'series',
  MOVIE = 'movie',
  GAME = 'game',
}
