import { NextResponse } from 'next/server';
export const POST = async (request) => {
  try {
    const {
      title,
      categoryId,
      supplierId,
      sku,
      barcode,
      quantity,
      unitId,
      brandId,
      costPrice,
      sellingPrice,
      reorderPoint,
      warehouseId,
      weight,
      dimensions,
      taxRate,
      notes,
    } = await request.json();

    const data = {
      title,
      categoryId,
      supplierId,
      sku,
      barcode,
      quantity,
      unitId,
      brandId,
      costPrice,
      sellingPrice,
      reorderPoint,
      warehouseId,
      weight,
      dimensions,
      taxRate,
      notes,
    };

    console.log(data);

    return NextResponse.json({ data, message: 'Success' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: 'Failed to create a item' },
      { status: 500 }
    );
  }
};
