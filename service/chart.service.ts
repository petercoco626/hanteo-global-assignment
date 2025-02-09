import { FetchTop100ChartResponse } from '@/types/chart.type';

export async function fetchTop100Charts(page: number) {
  const response = await fetch(`/api/charts/top100?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorResponse = await response.json();

    throw errorResponse;
  }

  return (await response.json()) as FetchTop100ChartResponse;
}
