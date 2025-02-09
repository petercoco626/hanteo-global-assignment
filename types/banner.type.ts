export type BannerStatus = 'scheduled' | 'ongoing' | 'expired';

export interface Banner {
  id: string;
  imageUrl: string;
  title: string;
  duration: {
    start: string;
    end: string;
  };
  status: BannerStatus;
  winner: string | null;
  url: string;
}
