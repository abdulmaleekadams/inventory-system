import { NextResponse } from 'next/server';
export const POST = async (request) => {
  try {
    const { title, abbreviation } = await request.json();

    const unit = { title, abbreviation };

    console.log(unit);

    return NextResponse.json({ unit, message: 'Success' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: 'Failed to create the unit' },
      { status: 500 }
    );
  }
};
