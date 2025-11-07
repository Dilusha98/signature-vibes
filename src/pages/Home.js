import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product'
import Hero from '../components/Hero'

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  console.log(products);

  // get only men's and women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </div>
      </section>


  {/* upper footer */}

            {/* MEN'S WATCHES & BRACELETS – Angled, no borders/radius, clipped */}
<div className="relative grid md:grid-cols-2 bg-white overflow-hidden">
  {/* LEFT */}
  <div className="relative bg-[#F1E7DA] px-10 py-14 md:px-16 md:py-16">
    <div className="max-w-xl">
      <h3 className="text-3xl md:text-4xl font-extrabold tracking-wider text-neutral-900">
        MEN’S WATCHES & BRACELETS
      </h3>
      <div className="mt-3 h-[2px] w-16 bg-neutral-900/80"></div>

      <p className="mt-6 text-base leading-7 text-neutral-800">
        Understated steel, leather bands, and beaded accents—curate a gift pack
        that pairs a timepiece with bracelets that match his style. Balanced,
        modern, and made to wear daily.
      </p>

      <ul className="mt-6 space-y-2 text-sm text-neutral-800">
        <li className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded border">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M20 7L9 18L4 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          Choose 3–10 items (watch + bracelets)
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded border">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M20 7L9 18L4 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          Live total to stay on budget
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded border">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M20 7L9 18L4 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          Free gift wrap & handwritten note
        </li>
      </ul>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <button className="inline-flex w-full items-center justify-center bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto">
          Build your gift pack
        </button>
        <button className="inline-flex w-full items-center justify-center border px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 sm:w-auto">
          Shop ready-made sets
        </button>
      </div>
    </div>
  </div>

  {/* RIGHT (full-bleed) */}
  <div className="relative min-h-[340px] md:min-h-[520px] isolate">
    {/* angled seam lives INSIDE this column and is clipped by the outer overflow-hidden */}
    <div
      className="absolute left-0 top-0 z-10 h-full w-24 bg-[#F1E7DA] pointer-events-none"
      style={{ clipPath: 'polygon(0 0, 100% 0, 15% 100%, 0 100%)' }}
      aria-hidden="true"
    />
    <img
      src="https://blog.luxehouze.com/wp-content/uploads/2024/06/crop-DSC08199-1-768x432.jpg"
      alt="Men’s watch and bracelets"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</div>


    {/* end */}

    </div>
  );
};

export default Home;
