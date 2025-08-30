import { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Women', href: '#women' },
    { label: 'Men', href: '#men' },
    { label: 'Accessories', href: '#accessories' },
    { label: 'Studio', href: '#studio' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="font-semibold tracking-tight text-2xl">lululemon</a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-neutral-700 hover:text-neutral-900 transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 text-neutral-700 hover:text-neutral-900">
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </button>
            <button className="hidden sm:flex items-center gap-2 text-neutral-700 hover:text-neutral-900">
              <User className="w-5 h-5" />
              <span className="sr-only">Account</span>
            </button>
            <button className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900">
              <ShoppingBag className="w-5 h-5" />
              <span className="sr-only">Cart</span>
            </button>
            <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="px-2 py-2 rounded-lg hover:bg-neutral-100">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
