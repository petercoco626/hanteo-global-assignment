'use client';

import { MOCK_BANNERS } from '@/constants/banner';
import clsx from 'clsx';
import { Banner } from './banner';
import { useInfiniteLoop } from './use-infinite-loop';

export function BannerList() {
  const bannersOnInfiniteLoop = [...MOCK_BANNERS, ...MOCK_BANNERS];

  const { sliderRef, sliderWrapperRef, visibleBannerIdx } = useInfiniteLoop();

  return (
    <section
      className={clsx(
        'w-full h-[260px] bg-white flex flex-col justify-between',
        'px-[18px] py-4 box-border'
      )}
    >
      <div
        ref={sliderWrapperRef}
        className="w-full h-full overflow-x-scroll scrollbar-none"
      >
        <div
          ref={sliderRef}
          className="w-full flex gap-4"
          style={{
            transform: `translateX(calc(-${visibleBannerIdx} * 376px))`,
          }}
        >
          {bannersOnInfiniteLoop.map((banner, idx) => (
            <Banner key={idx} banner={banner} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center gap-2 mt-4">
        {Array.from({ length: MOCK_BANNERS.length }).map((_, idx) => (
          <button
            key={idx}
            className={clsx(
              'w-[6px] h-[6px] rounded-full ',
              visibleBannerIdx % MOCK_BANNERS.length === idx
                ? 'bg-system-pink'
                : 'bg-[#E2E2E2]'
            )}
          />
        ))}
      </div>
    </section>
  );
}
