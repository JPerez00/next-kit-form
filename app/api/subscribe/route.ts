// app/api/subscribe/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const API_SECRET = process.env.CONVERTKIT_API_SECRET;
  const FORM_ID = process.env.CONVERTKIT_FORM_ID;

  if (!API_SECRET || !FORM_ID) {
    console.error('ConvertKit API secret or form ID not set');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_secret: API_SECRET,
          email: email,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Error subscribing' },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Error subscribing:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
