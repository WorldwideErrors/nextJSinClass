import Image from "next/image";

export default function ProductsExample() {
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

        <Image src="/products.png" alt="Products" width={1200} height={800} />
      </main>
    </section>
  );
}
