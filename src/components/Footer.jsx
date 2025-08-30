export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-medium mb-3">Shop</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#women" className="hover:text-neutral-900">Women</a></li>
              <li><a href="#men" className="hover:text-neutral-900">Men</a></li>
              <li><a href="#accessories" className="hover:text-neutral-900">Accessories</a></li>
              <li><a href="#studio" className="hover:text-neutral-900">Studio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Help</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900">Shipping</a></li>
              <li><a href="#" className="hover:text-neutral-900">Returns</a></li>
              <li><a href="#" className="hover:text-neutral-900">Size guide</a></li>
              <li><a href="#" className="hover:text-neutral-900">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Company</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900">About</a></li>
              <li><a href="#" className="hover:text-neutral-900">Sustainability</a></li>
              <li><a href="#" className="hover:text-neutral-900">Careers</a></li>
              <li><a href="#" className="hover:text-neutral-900">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Newsletter</h4>
            <p className="text-neutral-600">Be the first to know about drops and studio events.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Your email" className="flex-1 rounded-full border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              <button className="rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-black">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} lululemon. For demo purposes.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-800">Privacy</a>
            <a href="#" className="hover:text-neutral-800">Terms</a>
            <a href="#" className="hover:text-neutral-800">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
