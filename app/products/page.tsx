import Image from "next/image";
import Link from "next/link";
import { poppins } from "../fonts";
import { product } from "../domain/product";

export default async function Products() {

  const products = await fetch('https://fakestoreapi.com/products').then(
    response => response.json());

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white"
      ></div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold">Contact</h1>
          <p className="mt-2 text-gray-600 max-w-prose">
            Fill in the form and we’ll get back to you within one business day.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* // eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {products.map((product: product) => (
          <article
            key={product.id}
            className="rounded-2xl bg-white border border-gray-300 shadow-sm overflow-hidden flex flex-col"
          >
            {/* Image wrapper */}
            <div className="h-40 w-full flex items-center justify-center p-4 bg-gray-50">
              <Image
                className="object-contain max-h-36"
                src={product.image}
                alt={product.title}
                width={120}
                height={120}
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <h2 className={`${poppins.className} font-semibold text-lg line-clamp-2`}>{product.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>

              {/* Bottom section sticks down */}
              <div className="mt-auto flex flex-col gap-2">
                <div className="text-sm font-medium">
                  € {product.price} 
                </div>
                <Link
                  href={`/fakestore/${product.id}`}
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
                >
                  View
                </Link>
              </div>
            </div>
          </article>
          ))}
        </div>
      </main>
    </section>
  );
}
