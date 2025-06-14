import { prisma } from '../../../../lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

// GET one customer
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const customer = await prisma.customer.findUnique({
      where: { id: parseInt(context.params.id) },
      include: { products: true }
    })

    if (!customer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 })
    }

    return NextResponse.json(customer)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching customer' }, { status: 500 })
  }
}

// PUT update customer
export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const data = await req.json()
    const { name, phone, address } = data

    const customer = await prisma.customer.update({
      where: { id: parseInt(context.params.id) },
      data: { name, phone, address }
    })

    return NextResponse.json(customer)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating customer' }, { status: 500 })
  }
}

// DELETE customer
export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await prisma.product.deleteMany({
      where: { customerId: parseInt(context.params.id) }
    })

    await prisma.customer.delete({
      where: { id: parseInt(context.params.id) }
    })

    return NextResponse.json({ message: 'Customer deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting customer' }, { status: 500 })
  }
}
