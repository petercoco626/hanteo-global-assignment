import { MOCK_CHARTS } from '@/constants/chart';
import { ChartCard } from './chart-card';

// TODO: Mock 데이터이긴 하지만 무한 스크롤 서비스 느낌을 내기 위해 mock-api를 만들어보자.
export function Top100ChartList() {
  return (
    <div className="w-full h-full">
      <div className="space-y-1 mb-4">
        <h3 className="text-base text-black">실시간 Top 100</h3>
        <p className="text-[10px] text-gray-400">
          집계 기준 (KST) : 2025.02.08 22:40
        </p>
      </div>
      <div className="w-full h-[calc(100%-38px)] overflow-y-scroll space-y-2">
        {MOCK_CHARTS.map((chart) => (
          <ChartCard key={chart.id} chartCard={chart} />
        ))}
      </div>
    </div>
  );
}
