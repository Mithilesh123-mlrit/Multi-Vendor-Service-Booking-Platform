import { NextResponse } from 'next/server';

export function GET(): NextResponse {
  return NextResponse.json(
    { status: 'ok', service: 'servicehub' },
    { status: 200 },
  );
}
