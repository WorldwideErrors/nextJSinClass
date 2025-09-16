import { product } from '../../domain/product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function DetailPage({ params }: { params: { id: string } }) {

const id = params.id;
const productData = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    response => response.json() as Promise<product>);

  return (
    <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl m-3'>{productData.title}</h1>
        <p>{productData.description}</p>
        <p className='text-gray-600'>Price: {productData.price}</p>
        <Image src={productData.image} alt={productData.title} width={200} height={200} />
        <Link href="/products" className='text-indigo-600 hover:underline mt-4 inline-block'>Back to products</Link>
    </div>
  )
}
