import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Simple validation: check required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // In production, save to DB or send notification email here
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      storeUrl: body.storeUrl || null,
      subject: body.subject || null,
      message: body.message,
    });

    return NextResponse.json({ ok: true, message: 'Message received' });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
