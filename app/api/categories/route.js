import { NextResponse } from 'next/server';
export const POST = async (request) => {
  try {
    const { title, description } = await request.json();

    const category = { title, description };

    console.log(category);

    return NextResponse.json({ category, message: 'Success' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: 'Failed to create a category' },
      { status: 500 }
    );
  }
};
