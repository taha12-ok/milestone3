'use client'

import { useState } from 'react'
import { 
  FiSearch, 
  FiUser, 
  FiHeart, 
  FiShoppingBag, 
  FiChevronLeft, 
  FiChevronRight, 
  FiMenu, 
  FiX 
} from 'react-icons/fi'

export default function Header() {
  const [announcement, setAnnouncement] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const announcements = [
    "Made for American winters. Our high-performance jackets: Shop Women Shop Men",
    "Free Shipping on orders over $99",
    "New Year Sale - Up to 50% Off Everything"
  ]

  return (
    <header className="bg-white shadow-sm relative">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 px-4 flex items-center justify-center relative">
        <button 
          className="absolute left-2"
          onClick={() => setAnnouncement((prev) => (prev - 1 + announcements.length) % announcements.length)}
        >
          <FiChevronLeft className="h-4 w-4" />
        </button>
        <p className="text-sm text-center">
          {announcements[announcement]}
        </p>
        <button 
          className="absolute right-2"
          onClick={() => setAnnouncement((prev) => (prev + 1) % announcements.length)}
        >
          <FiChevronRight className="h-4 w-4" />
        </button>
      </div>
      
      {/* Main Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center">
              <button 
                className="md:hidden mr-4 text-black hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>

              <a href="/" className="text-2xl font-extrabold text-black tracking-tight">
                Frank And Oak
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="/sale" 
                className="text-sm font-medium bg-[#e5ff00] px-4 py-2 hover:bg-[#d1eb00] transition-colors text-black"
              >
                WINTER SALE
              </a>
              <a href="/women" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                Women
              </a>
              <a href="/men" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                Men
              </a>
              <a href="/about" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                About us
              </a>
            </nav>

            {/* Right Section - Icons */}
            <div className="flex items-center space-x-6">
              <button className="text-black hover:text-gray-600 transition-colors">
                <FiSearch className="h-5 w-5" />
              </button>
              <button className="text-black hover:text-gray-600 transition-colors">
                <FiUser className="h-5 w-5" />
              </button>
              <button className="text-black hover:text-gray-600 transition-colors">
                <FiHeart className="h-5 w-5" />
              </button>
              <button className="text-black hover:text-gray-600 transition-colors relative">
                <FiShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:hidden
        `}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-8">
            <a href="/" className="text-2xl font-extrabold text-black tracking-tight">
              Frank And Oak
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black hover:text-gray-500 transition-colors"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            <a 
              href="/sale" 
              className="text-lg font-medium bg-[#e5ff00] px-4 py-2 hover:bg-[#d1eb00] transition-colors text-center text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WINTER SALE
            </a>
            <a 
              href="/women" 
              className="text-lg font-medium text-black hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Women
            </a>
            <a 
              href="/men" 
              className="text-lg font-medium text-black hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Men
            </a>
            <a 
              href="/about" 
              className="text-lg font-medium text-black hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}