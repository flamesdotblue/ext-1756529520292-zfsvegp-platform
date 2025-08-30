import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 sm:py-24">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
              Move Freely. Feel Incredible.
            </h1>
            <p className="mt-5 text-neutral-600 max-w-xl">
              Performance essentials designed for studio, street, and everything in between. Breathable fabrics, intentional details, and silhouettes that move when you do.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#women" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition">
                Shop Women
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#men" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium hover:bg-neutral-100 transition">
                Shop Men
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              <Stat number="4-way" label="Stretch" />
              <Stat number=">24k" label="5-star reviews" />
              <Stat number="365" label="Days of comfort" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1599050751791-cf2d5c327869?q=80&w=1974&auto=format&fit=crop"
                alt="Athletes stretching wearing activewear"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs uppercase tracking-wider">New Arrivals</p>
                <p className="text-lg font-medium">Studio-ready layers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-lg font-semibold">{number}</div>
      <div className="text-xs text-neutral-500">{label}</div>
    </div>
  );
}
