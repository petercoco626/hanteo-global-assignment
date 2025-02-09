import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type NavbarOption =
  | 'chart'
  | 'whook'
  | 'event'
  | 'news'
  | 'store'
  | 'charger';

interface NavbarState {
  currentNavbarOption: NavbarOption;
}

interface NavbarActions {
  actions: {
    setNavbarOption: (navbarOption: NavbarOption) => void;
    resetStore: () => void;
  };
}

const initialState: NavbarState = {
  currentNavbarOption: 'chart',
};

export const useNavbarStore = create<NavbarState & NavbarActions>()(
  devtools(
    (set) => ({
      ...initialState,
      actions: {
        setNavbarOption: (navbarOption: NavbarOption) =>
          set(() => ({ currentNavbarOption: navbarOption })),
        resetStore: () => set(initialState),
      },
    }),
    { name: 'navbar-store', enabled: process.env.NODE_ENV === 'development' }
  )
);

export const useNavbarActions = () => useNavbarStore((state) => state.actions);
