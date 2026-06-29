import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { ok: false, error: 'Valid email required' },
        { status: 400 }
      );
    }

    // Store in memory for now (swap for Neon DB later)
    // In production: save to Neon PostgreSQL
    console.log('Newsletter signup:', email);

    return NextResponse.json({
      ok: true,
      message: 'Subscribed successfully',
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}
