import { MOCK_CHARTS } from '@/constants/chart';
import { FetchTop100ChartResponse } from '@/types/chart.type';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest
): Promise<NextResponse<FetchTop100ChartResponse>> {
  const { searchParams } = request.nextUrl;

  const page = Number(searchParams.get('page') || 0);

  const pageSize = 10;

  const startIndex = page * pageSize;

  const endIndex = startIndex + pageSize;

  const results = MOCK_CHARTS.slice(startIndex, endIndex);

  return NextResponse.json(
    {
      results,
      hasNextPage: endIndex < MOCK_CHARTS.length,
      page,
    },
    { status: 200 }
  );
}
