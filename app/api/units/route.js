import db from '@/app/lib/db';
import { NextResponse } from 'next/server';
export const POST = async (request) => {
  try {
    const { title, abbreviation } = await request.json();

    const data = await db.unit.create({
      data: {
        title,
        abbreviation,
      },
    });

    console.log(data);

    return NextResponse.json({ data, message: 'Success' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: 'Failed to create the unit' },
      { status: 500 }
    );
  }
};
