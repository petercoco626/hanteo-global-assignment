import { fetchTop100Charts } from '@/service/chart.service';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useTop100Chart() {
  return useInfiniteQuery({
    queryKey: ['top-100-chart'],
    queryFn: ({ pageParam = 0 }) => fetchTop100Charts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage) {
        return lastPage.page + 1;
      }
    },
    staleTime: 1000 * 60 * 5,
  });
}
