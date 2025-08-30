const products = [
  {
    id: 1,
    name: 'Swift Tech Long Sleeve',
    tag: 'Women',
    price: '$78',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1887&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Surge Short 6"',
    tag: 'Men',
    price: '$68',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Align High-Rise 25"',
    tag: 'Women',
    price: '$98',
    image: 'https://images.unsplash.com/photo-1594385208974-d1a283c8d6d6?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Metal Vent Tech Tee',
    tag: 'Men',
    price: '$78',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  return (
    <section className="py-14 sm:py-20 bg-neutral-50" id="women">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Fresh picks for every move</h2>
            <p className="mt-2 text-neutral-600">Breathable, sweat-wicking, and made to last.</p>
          </div>
          <a href="#" className="hidden sm:inline text-sm font-medium text-neutral-900 hover:underline">Shop all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group bg-white rounded-2xl overflow-hidden border border-neutral-200">
              <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wide text-neutral-500">{p.tag}</span>
                  <span className="text-sm font-medium">{p.price}</span>
                </div>
                <h3 className="mt-1 font-medium">{p.name}</h3>
                <button className="mt-3 w-full rounded-full bg-neutral-900 text-white py-2 text-sm font-medium hover:bg-black transition">Add to bag</button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-neutral-900 to-neutral-700 p-8 sm:p-12 text-white">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold">Find your perfect fit</h3>
            <p className="mt-2 text-white/80">Answer a few quick questions and we’ll match you with pieces that move with you.</p>
            <a href="#" className="mt-6 inline-flex items-center rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100 transition">Start fit finder</a>
          </div>
        </div>
      </div>
    </section>
  );
}
