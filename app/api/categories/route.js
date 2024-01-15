import db from '@/app/lib/db';
import { NextResponse } from 'next/server';
export const POST = async (request) => {
  try {
    const { title, description } = await request.json();

    const data = await db.category.create({
      data: {
        title,
        description,
      },
    });

    console.log(data);

    return NextResponse.json({ data, message: 'Success' }, { status: 201 });
  } catch (error) {
    console.log(error);
    // if (error.code === 'P2002') {
    //   return NextResponse.json(
    //     { data: 'Category already exist', message: 'failed' },
    //     { status: 201 }
    //   );
    // }
    return NextResponse.json(
      { error, message: 'Failed to create a category' },
      { status: 500 }
    );
  }
};
