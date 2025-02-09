'use client';

import { NavbarOptions } from '@/constants/navbar';
import {
  NavbarOption,
  useNavbarActions,
  useNavbarStore,
} from '@/stores/navbar.store';
import clsx from 'clsx';

export function Navbar() {
  const currentNavbarOption = useNavbarStore(
    (state) => state.currentNavbarOption
  );

  const { setNavbarOption } = useNavbarActions();

  const handleNavbarOptionClick = (navbarOption: NavbarOption) => {
    setNavbarOption(navbarOption);
    // TODO : 선택한 navbar에 따라 위치 조정 animation이 필요할것 같음.
  };

  return (
    <nav
      className={clsx(
        'w-full h-10 bg-pink-300 py-1 px-10',
        'flex gap-8 overflow-x-hidden'
      )}
    >
      {NavbarOptions.map((option) => (
        <button
          type="button"
          key={option.type}
          className={clsx(
            'text-nowrap',
            currentNavbarOption === option.type ? 'text-white' : 'text-gray-900'
          )}
          onClick={() => handleNavbarOptionClick(option.type)}
        >
          {option.title}
        </button>
      ))}
    </nav>
  );
}
