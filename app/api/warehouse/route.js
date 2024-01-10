import { NextResponse } from 'next/server';
export const POST = async (request) => {
  try {
    const { title, location, type, description } = await request.json();

    const data = { title, location, type, description };

    console.log(data);

    return NextResponse.json({ data, message: 'Success' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: 'Failed to create the warehouse' },
      { status: 500 }
    );
  }
};
