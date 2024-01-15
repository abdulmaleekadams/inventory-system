import { NextResponse } from 'next/server';
export const POST = async (request) => {
  try {
    const { receivingWarehouseId, notes, addStockQty, itemId } =
      await request.json();

    const data = {
      receivingWarehouseId,
      notes,
      addStockQty,
      itemId,
    };

    console.log(data);

    return NextResponse.json({ data, message: 'Success' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: 'Failed to create adjustment' },
      { status: 500 }
    );
  }
};
