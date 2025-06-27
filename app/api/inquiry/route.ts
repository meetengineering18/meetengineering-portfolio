import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb.lib';
import { Inquiry } from '@/app/models/Inquiry.model';
import { z } from 'zod';
import {sendDailyEmail} from '../../utils/mailer/mailer';
import { Compass } from 'lucide-react';

const InquiryValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  company: z.string(),
  comment: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, company, comment } = InquiryValidationSchema.parse(body);

    await connectToDatabase();
    let inq = await Inquiry.create({ name, phone, email, company, comment });


    await sendDailyEmail([inq]);

    return NextResponse.json({ success: true });

    


  } catch (err: any) {
    if (err.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation failed', details: err.errors }, { status: 400 });
    }

    console.error('Error:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function GET() {
  await connectToDatabase();
  const inquiries = await Inquiry.find().lean();
  return NextResponse.json(inquiries);
}
