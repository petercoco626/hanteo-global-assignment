import { ChartCard } from '@/types/chart.type';

import ChartThumbnail1 from '@/assets/images/chart-album-thumbnail/album-thumbnail-1.png';
import ChartThumbnail2 from '@/assets/images/chart-album-thumbnail/album-thumbnail-2.png';
import ChartThumbnail3 from '@/assets/images/chart-album-thumbnail/album-thumbnail-3.png';

const getChartInfo = (idx: number): ChartCard => {
  if (idx % 3 === 0) {
    return {
      id: String(idx),
      company: '블래스트',
      albumImageUrl: ChartThumbnail1.src,
      albumTitle: "Mini Album 'Caligo Pt.1",
      ranking: idx + 1,
      rankChange: 1,
      singer: 'PLAVE',
      view: 111987,
    };
  }

  if (idx % 3 === 1) {
    return {
      id: String(idx),
      company: '스타쉽',
      albumImageUrl: ChartThumbnail2.src,
      albumTitle: 'THE 3rd EP : IVE EMPATHY',
      ranking: idx + 1,
      rankChange: -1,
      singer: '아이브',
      view: 67101,
    };
  }

  return {
    id: String(idx),
    company: 'SM',
    albumImageUrl: ChartThumbnail3.src,
    albumTitle: 'To. X  :  미니앨범 5집',
    ranking: idx + 1,
    rankChange: 0,
    singer: '태연',
    view: 32020,
  };
};

export const MOCK_CHARTS: ChartCard[] = Array.from(
  { length: 100 },
  (_, idx) => {
    return getChartInfo(idx);
  }
);
