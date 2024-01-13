import { NextResponse } from 'next/server';
export const POST = async (request) => {
  try {
    const {
      receivingWarehouseId,
      dispatchWarehouseId,
      notes,
      transferStockQty,
      itemId,
    } = await request.json();

    const data = {
      receivingWarehouseId,
      dispatchWarehouseId,
      notes,
      transferStockQty,
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
