export type PokemonListResponse = {
  count: number;
  next: string;
  previos: string;
  results: PokemonItem[];
};

export type PokemonListProps = {
  data: PokemonListResponse;
};

export type PokemonItem = {
  name: string;
  url: string;
};

export enum SortType {
  SORT_NAME = "sortName",
  SORT_ID = "sortID",
}