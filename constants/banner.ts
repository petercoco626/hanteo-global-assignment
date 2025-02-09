import { Banner } from '@/types/banner.type';

import BannerThumbnail1 from '@/assets/images/banner-thumbnail/banner-thumbnail-1.png';
import BannerThumbnail2 from '@/assets/images/banner-thumbnail/banner-thumbnail-2.png';
import BannerThumbnail3 from '@/assets/images/banner-thumbnail/banner-thumbnail-3.png';
import BannerThumbnail4 from '@/assets/images/banner-thumbnail/banner-thumbnail-4.png';
import BannerThumbnail5 from '@/assets/images/banner-thumbnail/banner-thumbnail-5.png';

export const MOCK_BANNERS: Banner[] = [
  {
    id: '1',
    imageUrl: BannerThumbnail1.src,
    title: '[M COUNTDOWN] 10월 2주차 엠카 사전 투표',
    duration: {
      start: '2020.02.08 10:00',
      end: '2020.04.08 17:00',
    },
    status: 'ongoing',
    winner: null,
    url: '',
  },
  {
    id: '2',
    imageUrl: BannerThumbnail2.src,
    title: '[WhosPICK] 밸런타인데이 특집',
    duration: {
      start: '2025.02.04 11:00',
      end: '2025.02.10 11:00',
    },
    status: 'ongoing',
    winner: '필릭스',
    url: '',
  },
  {
    id: '3',
    imageUrl: BannerThumbnail3.src,
    title: '32주년 한터뮤직어워즈 2024',
    duration: {
      start: '2024.12.16 12:00',
      end: '2025.02.12 12:00',
    },
    status: 'ongoing',
    winner: null,
    url: '',
  },
  {
    id: '4',
    imageUrl: BannerThumbnail4.src,
    title: 'Whosfan Poll] 은혁 ‘EXPLORER’ 최애곡은?',
    duration: {
      start: '2025.02.06 15:00',
      end: '2025.02.12 15:00',
    },
    status: 'ongoing',
    winner: 'A-yo',
    url: '',
  },
  {
    id: '5',
    imageUrl: BannerThumbnail5.src,
    title: '[Whosfan Poll] 아이브 ‘IVE EMPATHY’  최애곡은?',
    duration: {
      start: '2025.02.06 15:00',
      end: '2025.02.12 15:00',
    },
    status: 'ongoing',
    winner: null,
    url: '',
  },
];
