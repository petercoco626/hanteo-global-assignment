export interface ChartCard {
  id: string;
  ranking: number;
  rankChange: number;
  albumTitle: string;
  albumImageUrl: string;
  singer: string;
  company: string;
  view: number;
}

export interface FetchTop100ChartResponse {
  results: ChartCard[];
  hasNextPage: boolean;
  page: number;
}
