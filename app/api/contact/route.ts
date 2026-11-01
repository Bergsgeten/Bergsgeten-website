import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const data = await resend.emails.send({
      from: 'Bergsgeten Förfrågan <info@bergsgeten.se>',
      to: ['bergsgeten.kontakt@gmail.com'], 
      replyTo: email, // Gör att när du klickar "Svara" i Gmail så svarar du kunden direkt
      subject: `Ny offertförfrågan från ${name}`,
      text: `
Ny offertförfrågan via hemsidan:

Namn: ${name}
E-post: ${email}
Telefon: ${phone}

Meddelande/Detaljer:
${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}