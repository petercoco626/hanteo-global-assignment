import { MOCK_BANNERS } from '@/constants/banner';
import { useEffect, useRef, useState } from 'react';

export const defaultTransitionStyle = 'all 500ms ease-in-out';

export function useInfiniteLoop() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const bannerCount = MOCK_BANNERS.length;

  const [visibleBannerIdx, setVisibleBannerIdx] = useState(0);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (visibleBannerIdx >= bannerCount) {
      timeoutRef.current = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = '';
        }

        setVisibleBannerIdx(0);

        timeoutRef.current = setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.style.transition = defaultTransitionStyle;
          }
        }, 100);
      }, 500);
    } else {
      timeoutRef.current = setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = defaultTransitionStyle;
        }
        setVisibleBannerIdx((prev) => prev + 1);
      }, 3000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [visibleBannerIdx, bannerCount]);

  return {
    sliderRef,
    sliderWrapperRef,
    visibleBannerIdx,
  };
}
