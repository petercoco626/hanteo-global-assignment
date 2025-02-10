'use client';

import clsx from 'clsx';
import { Top100ChartList } from './top-100-chart/top-100-chart-list';
import { useNavbarStore } from '@/stores/navbar.store';
import { NavbarOptions } from '@/constants/navbar';
import { BlankContent } from './blank-content';
import { useTouchScroll } from './use-touch-scroll';

export function Content() {
  const currentNavbarOption = useNavbarStore(
    (state) => state.currentNavbarOption
  );

  const currentNavbarOptionIdx = NavbarOptions.findIndex(
    (option) => option.type === currentNavbarOption
  );

  const { sliderRef, sliderWrapperRef, onDragEnd, onDragStart } =
    useTouchScroll();

  return (
    <section
      ref={sliderWrapperRef}
      className={clsx(
        'w-full h-[calc(100%-400px)] bg-gray-100',
        'px-4 py-6',
        'overflow-x-hidden'
      )}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={onDragStart}
      onTouchEnd={onDragEnd}
    >
      <div
        ref={sliderRef}
        className={clsx(
          'w-full h-full flex gap-4 transition-transform duration-300'
        )}
        style={{
          transform: `translateX(calc(-${currentNavbarOptionIdx} * (100% + 16px)))`,
        }}
      >
        <Top100ChartList />
        <BlankContent title="Whook" />
        <BlankContent title="이벤트" />
        <BlankContent title="뉴스" />
        <BlankContent title="스토어" />
        <BlankContent title="충전소" />
      </div>
    </section>
  );
}
