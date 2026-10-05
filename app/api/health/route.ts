import { NextResponse } from 'next/server';
import { getPrismaClient } from '@/lib/prisma';

export const runtime = 'nodejs';

export async function GET(): Promise<NextResponse> {
  try {
    await getPrismaClient().$queryRaw`SELECT 1`;
    return NextResponse.json({
      status: 'ok',
      service: 'servicehub',
      database: 'connected',
    });
  } catch {
    return NextResponse.json(
      {
        status: 'degraded',
        service: 'servicehub',
        database: 'unavailable',
      },
      { status: 503 },
    );
  }
}
