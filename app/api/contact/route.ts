import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Bergsgeten Hemsida <onboarding@resend.dev>',
      to: ['leodeutgen0@gmail.com'], 
      subject: `Ny förfrågan från ${name}`,
      replyTo: email,
      text: `
Namn: ${name}
E-post: ${email}
Telefon: ${phone || 'Ej angivet'}

Meddelande:
${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}