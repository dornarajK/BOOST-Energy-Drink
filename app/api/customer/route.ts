'use server'

import { prisma } from '../../../lib/prisma'

import { NextRequest, NextResponse } from 'next/server'

// GET all customers
export async function GET() {
  try {
    const customers = await prisma.customer.findMany({
      include: { products: true }
    })
    return NextResponse.json(customers)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching customers' }, { status: 500 })
  }
}

// POST new customer
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Create customer
    const customer = await prisma.customer.create({
      data: {
        name: data.name,
        phone: data.phone,
        address: data.address,
        products: {
          create: data.products.map((product: any) => ({
            name: product.name,
            price: product.price,
            quantity: product.quantity
          }))
        }
      }
    });

    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create customer' }, { status: 500 });
  }
}