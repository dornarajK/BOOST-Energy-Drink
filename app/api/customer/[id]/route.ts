import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET yksi customer
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const customer = await prisma.customer.findUnique({
    where: { id: parseInt(id, 10) },
    include: { products: true },
  })
  if (!customer) {
    return NextResponse.json({ error: 'Customer not found' }, { status: 404 })
  }
  return NextResponse.json(customer)
}

// PUT päivitys
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const { name, phone, address } = await req.json()
  const customer = await prisma.customer.update({
    where: { id: parseInt(id, 10) },
    data: { name, phone, address },
  })
  return NextResponse.json(customer)
}

// DELETE poisto
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  // Poistetaan ensin kaikki tuotteet, jos tarvitset
  await prisma.product.deleteMany({ where: { customerId: parseInt(id, 10) } })
  await prisma.customer.delete({ where: { id: parseInt(id, 10) } })
  return NextResponse.json({ message: 'Customer deleted' })
}
