import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET yksi customer
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const customer = await prisma.customer.findUnique({ where: { id: parseInt(id) }, include: { products: true } })
  if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 })
  return NextResponse.json(customer)
}

// PUT päivitys
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const { name, phone, address } = await req.json()
  const customer = await prisma.customer.update({ where: { id: parseInt(id) }, data: { name, phone, address } })
  return NextResponse.json(customer)
}

// DELETE poisto
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  await prisma.product.deleteMany({ where: { customerId: parseInt(id) } })
  await prisma.customer.delete({ where: { id: parseInt(id) } })
  return NextResponse.json({ message: 'Customer deleted' })
}
