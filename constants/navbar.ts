import { NavbarOption } from '@/stores/navbar.store';

export const NavbarOptions: {
  title: string;
  type: NavbarOption;
}[] = [
  {
    title: '차트',
    type: 'chart',
  },
  {
    title: 'Whook',
    type: 'whook',
  },
  {
    title: '이벤트',
    type: 'event',
  },
  {
    title: '뉴스',
    type: 'news',
  },
  {
    title: '스토어',
    type: 'store',
  },
  {
    title: '충전소',
    type: 'charger',
  },
];
