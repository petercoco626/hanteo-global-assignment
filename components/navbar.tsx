'use client';

import clsx from 'clsx';
import { useState } from 'react';

type Navbar = 'chart' | 'whook' | 'event' | 'news' | 'store' | 'charger';

export function Navbar() {
  // TODO : contents와 연동을 위해 zustand로 연동해야함.
  const [selectedNavbarOption, setSelectedNavbarOption] =
    useState<Navbar>('chart');

  const handleNavbarOptionClick = (navbarOption: Navbar) => {
    setSelectedNavbarOption(navbarOption);
    // TODO : 선택한 navbar에 따라 위치 조정 animation이 필요할것 같음.
  };

  return (
    <nav
      className={clsx(
        'w-full h-10 bg-pink-300 py-1 px-10',
        'flex gap-8 overflow-x-hidden'
      )}
    >
      {navbarOptions.map((option) => (
        <button
          type="button"
          key={option.type}
          className={clsx(
            'text-nowrap',
            selectedNavbarOption === option.type
              ? 'text-white'
              : 'text-gray-900'
          )}
          onClick={() => handleNavbarOptionClick(option.type)}
        >
          {option.title}
        </button>
      ))}
    </nav>
  );
}

const navbarOptions: {
  title: string;
  type: Navbar;
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
