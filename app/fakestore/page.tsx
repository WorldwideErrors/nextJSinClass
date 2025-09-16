import React from 'react'
import { product } from '../domain/product';



export default async function FakeStore() {
const products = await fetch('https://fakestoreapi.com/products').then(
    response => response.json());

console.log(products);

  return (
    <div className='container mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold'>Fake Store Products</h1>
        <h2 className='text-xl font-bold mb-4'>Raw Data</h2>
        <pre className='bg-gray-100 p-4 rounded-3xl overflow-auto text-sm'>
            {JSON.stringify(products, null, 2)}    
        </pre>

        <h2 className='text-xl font-semibold mb-4 mt-8'>Formatted Products</h2>
        {products.map((product: product) => (
            <div key={product.id} className='mb-4'>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p className='text-gray-600'>Price: {product.price}</p>
                <hr className='my-4' />
            </div>
        ))}
    </div>
  )
}


