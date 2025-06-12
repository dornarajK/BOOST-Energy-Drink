'use server'
import {prisma} from '../../../prisma/seed'

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
export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Reset product IDs to start from 1 for new customer
    const productsWithResetIds = data.products.map((product: any, index: number) => ({
      ...product,
      id: index + 1 // Reset ID to start from 1
    }))

    const customer = await prisma.customer.create({
      data: {
        name: data.name,
        phone: data.phone,
        address: data.address,
        products: {
          create: data.products || []
        },
      },
      include: {
        products: {
          orderBy: {
            id: 'asc'
          } 
        },
      },
    })

    return NextResponse.json(customer, { status: 201 })
  } catch (error) {
    console.error('Error in POST /api/customer:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}
