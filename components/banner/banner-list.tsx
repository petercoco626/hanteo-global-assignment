'use client';

import { MOCK_BANNERS } from '@/constants/banner';
import clsx from 'clsx';
import { Banner } from './banner';

// TODO :
// 1. 무한 루프
// 2. indicator color 분기
export function BannerList() {
  return (
    <section
      className={clsx(
        'w-full h-[260px] bg-white flex flex-col justify-between',
        'px-[18px] py-4 box-border'
      )}
    >
      <div className="w-full h-full overflow-x-scroll">
        <ul className="w-full flex gap-4">
          {MOCK_BANNERS.map((banner) => (
            <Banner key={banner.id} banner={banner} />
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center gap-2 mt-4">
        {Array.from({ length: MOCK_BANNERS.length }).map((_, idx) => (
          <div
            key={idx}
            className="w-[6px] h-[6px] rounded-full bg-[#E2E2E2]"
          />
        ))}
      </div>
    </section>
  );
}
