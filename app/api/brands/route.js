import { NextResponse } from 'next/server';
export const POST = async (request) => {
  try {
    const { title, description } = await request.json();

    const data = { title, description };

    console.log(data);

    return NextResponse.json({ data, message: 'Success' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: 'Failed to create the brand' },
      { status: 500 }
    );
  }
};
