import { type Banner, BannerStatus } from '@/types/banner.type';
import Image from 'next/image';
import ImgWinner from '@/assets/images/winner-icon-image.png';
import clsx from 'clsx';

export function Banner({ banner }: { banner: Banner }) {
  const handleBannerButtonClick = () => {
    window.open(banner.url);
  };

  return (
    <li className="min-w-[calc(100%-20px)] rounded-lg shadow-md">
      <button
        type="button"
        className="w-full h-full"
        onClick={handleBannerButtonClick}
      >
        <BannerImage banner={banner} />
        <BannerInfo banner={banner} />
      </button>
    </li>
  );
}

function BannerInfo({ banner }: { banner: Banner }) {
  return (
    <div className="w-full px-6 py-3">
      <div className="w-full flex justify-between items-center">
        <span className="w-[250px] truncate text-left text-sm">
          {banner.title}
        </span>
        <span
          className={clsx(
            'text-system-pink text-xs text-nowrap',
            'py-[2px] px-[10px]',
            'border border-system-pink rounded-[99px]'
          )}
        >
          투표하기
        </span>
      </div>
      <div className="w-full flex justify-between text-xs">
        <div className="flex items-center gap-2">
          {banner.winner && (
            <Image
              src={ImgWinner.src}
              width={16}
              height={16}
              alt="winner-icon-image"
            />
          )}
          {banner.winner}
        </div>
        <div>
          {banner.duration.start} ~ {banner.duration.end} (KST)
        </div>
      </div>
    </div>
  );
}

function BannerImage({ banner }: { banner: Banner }) {
  const bannerStatusText: Record<
    BannerStatus,
    {
      title: string;
      bgColor: string;
    }
  > = {
    scheduled: {
      title: '진행 예정',
      bgColor: 'bg-system-pink',
    },
    ongoing: {
      title: '진행 중',
      bgColor: 'bg-system-pink',
    },
    expired: {
      title: '기간 만료',
      bgColor: 'bg-system-pink',
    },
  };

  return (
    <div className="relative w-full h-[134px] rounded-t-lg">
      <Image
        src={banner.imageUrl}
        alt={banner.title + 'image banner'}
        width={390}
        height={134}
        className="object-contain rounded-t-lg w-full h-[134px]"
      />
      <span
        className={clsx(
          'px-2 py-1 rounded-[6px]',
          'text-white text-xs',
          'absolute top-2 left-2',
          bannerStatusText[banner.status].bgColor
        )}
      >
        {bannerStatusText[banner.status].title}
      </span>
    </div>
  );
}
