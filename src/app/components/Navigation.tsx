'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">

              <span className="text-xl font-semibold text-gray-900">TSC</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Services
              </Link>
              <Link href="/connect" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Connect
              </Link>
              <Link href="/about" className="text-blue-600 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                Who we are
              </Link>
            </div>
          </div>

          {/* Right side - Cart and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Schedule Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Link href="/services" className="text-gray-700 block px-3 py-2 text-base font-medium">
                Services
              </Link>
              <Link href="/connect" className="text-gray-700 block px-3 py-2 text-base font-medium">
                Connect
              </Link>
              <Link href="/about" className="text-blue-600 block px-3 py-2 text-base font-medium">
                About
              </Link>
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-gray-700">Cart (0)</span>
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}