import { type ChartCard } from '@/types/chart.type';
import clsx from 'clsx';
import Image from 'next/image';

export function ChartCard({ chartCard }: { chartCard: ChartCard }) {
  return (
    <div
      className={clsx(
        'flex items-center',
        'h-[78px] box-border',
        'gap-2 p-3 rounded-lg bg-white',
        'border border-gray-200'
      )}
    >
      <Image
        src={chartCard.albumImageUrl}
        width={50}
        height={50}
        alt="album-image-url"
        className="border border-gray-200 rounded-lg"
      />
      {/** 순위 정보 */}
      <div className="w-4 flex flex-col justify-center h-full space-y-2 text-center">
        <div className="text-sm font-bold">{chartCard.ranking}</div>
        <div
          className={clsx(
            'text-[10px] font-bold',
            chartCard.rankChange > 0
              ? 'text-system-pink'
              : chartCard.rankChange === 0
              ? 'text-gray-400'
              : 'text-blue-500'
          )}
        >
          {chartCard.rankChange === 0 ? '-' : chartCard.rankChange}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        {/** 곡 정보 */}
        <div className="text-xs">
          <div className="font-light">{chartCard.albumTitle}</div>
          <div>{chartCard.singer}</div>
          <div className="font-light">{chartCard.company}</div>
        </div>
        {/** view 정보 */}
        <div className="text-gray-600 font-normal text-sm">
          {chartCard.view.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
