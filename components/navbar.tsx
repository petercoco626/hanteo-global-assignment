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
  };

  return (
    <nav
      className={clsx(
        'w-full h-10 bg-pink-300 py-1 px-8',
        'flex justify-between overflow-x-scroll scrollbar-none'
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
