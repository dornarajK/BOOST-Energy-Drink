import { Customer, Product } from '@prisma/client';

const API_URL = '/api/customer'

interface Data {
  name: string,
  phone: string,
  address: string,
  products?: Product[]
}

export async function getAllCustomers(): Promise<Customer[]> {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('Failed to fetch customers')
  return res.json()
}

export async function getCustomer(id: number): Promise<Customer> {
  const res = await fetch(`${API_URL}/${id}`)
  if (!res.ok) throw new Error('Failed to fetch customer')
  return res.json()
}

export async function createCustomer(data: Data): Promise<Customer> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Failed to create customer')
  return res.json()
}

export async function updateCustomer(id: number, data: Data): Promise<Customer> {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Failed to update customer')
  return res.json()
}

export async function deleteCustomer(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  if (!res.ok) throw new Error('Failed to delete customer')
}
