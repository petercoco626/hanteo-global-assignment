'use client';

// TODO :
// zustand로 현재 navbar의 선택된 option의 상태공유 필요.
// 해당 영역의 좌우 슬라이드 터치시 content + navbar가 자동 이동되야한다.

import clsx from 'clsx';
import { Top100ChartList } from './top-100-chart/top-100-chart-list';
import { useNavbarStore } from '@/stores/navbar.store';
import { NavbarOptions } from '@/constants/navbar';
import { BlankContent } from './blank-content';

// TODO : 좌우 터치 스크롤에 대한 애니메이션 구현도 필요함.
export function Content() {
  const currentNavbarOption = useNavbarStore(
    (state) => state.currentNavbarOption
  );

  const currentNavbarOptionIdx = NavbarOptions.findIndex(
    (option) => option.type === currentNavbarOption
  );

  return (
    <section
      className={clsx(
        'w-full h-[calc(100%-400px)] bg-gray-100',
        'px-4 py-6',
        'overflow-x-hidden'
      )}
    >
      <div
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
