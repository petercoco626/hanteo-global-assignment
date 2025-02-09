import { ChartCard } from './chart-card';
import { useRef } from 'react';
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { useTop100Chart } from './use-top-100-chart';
import clsx from 'clsx';

export function Top100ChartList() {
  const boundaryRef = useRef<HTMLDivElement>(null);

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useTop100Chart();

  useInfiniteScroll({
    boundaryRef,
    loadMore: () => {
      if (hasNextPage) {
        if (!isFetchingNextPage) {
          fetchNextPage();
        }
      }
    },
  });

  return (
    <div className="w-full min-w-full h-full">
      <div className="space-y-1 mb-4">
        <h3 className="text-base text-black">실시간 Top 100</h3>
        <p className="text-[10px] text-gray-400">
          집계 기준 (KST) : 2025.02.08 22:40
        </p>
      </div>
      <div className="w-full h-[calc(100%-38px)] overflow-y-scroll space-y-2 scrollbar-none">
        {data?.pages.map((page) =>
          page.results.map((chart) => (
            <ChartCard key={chart.id} chartCard={chart} />
          ))
        )}
        <div ref={boundaryRef} className="w-full h-px pb-4" />
        {isFetchingNextPage && (
          <div
            className={clsx(
              'w-full flex justify-center',
              'text-xl font-normal'
            )}
          >
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}
