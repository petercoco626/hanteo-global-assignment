import { RefObject, useCallback, useEffect } from 'react';

interface UseInfiniteScrollParams {
  boundaryRef: RefObject<Element>;
  loadMore: () => void;
  intersectionObserverOptions?: IntersectionObserverInit;
}

export function useInfiniteScroll({
  boundaryRef,
  loadMore,
  intersectionObserverOptions = {},
}: UseInfiniteScrollParams) {
  const intersectionObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          io.unobserve(entry.target);
          loadMore();
        }
      });
    },
    [loadMore],
  );

  useEffect(() => {
    if (!boundaryRef.current) {
      return;
    }

    const observer: IntersectionObserver = new IntersectionObserver(
      intersectionObserverCallback,
      intersectionObserverOptions,
    );
    observer.observe(boundaryRef.current);

    return () => {
      if (!boundaryRef.current) return;
      observer.unobserve(boundaryRef.current);
      observer.disconnect();
    };
  }, [boundaryRef.current, intersectionObserverCallback]);
}
