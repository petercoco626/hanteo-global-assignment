// TODO :
// zustand로 현재 navbar의 선택된 option의 상태공유 필요.
// 해당 영역의 좌우 슬라이드 터치시 content + navbar가 자동 이동되야한다.

import clsx from 'clsx';
import { Top100ChartList } from './top-100-chart/top-100-chart-list';

// navbar에서도 클릭하여 이동했을때도 동일한 이동 애니메이션이 보여져야한다.
export function Content() {
  return (
    <section
      className={clsx('w-full h-[calc(100%-400px)] bg-gray-100', 'px-4 py-6')}
    >
      <Top100ChartList />
    </section>
  );
}
