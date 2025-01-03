'use client'

import { useState } from 'react'
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [shopFor, setShopFor] = useState('women')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = '923060484798'
    const message = `Hi! I'd like to subscribe to Frank And Oak updates. Email: ${email}, Name: ${firstName}, Shopping for: ${shopFor}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-bold mb-4">About us</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-300 transition-colors">Who we are</a></li>
              <li><a href="/sustainability" className="hover:text-gray-300 transition-colors">Sustainable Practices</a></li>
              <li><a href="/design" className="hover:text-gray-300 transition-colors">Design Ideology</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li><a href="/gift-cards" className="hover:text-gray-300 transition-colors">Gift Cards</a></li>
              <li><a href="/rewards" className="hover:text-gray-300 transition-colors">Franks Club</a></li>
              <li><a href="/referral" className="hover:text-gray-300 transition-colors">Give $15, Get $15</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="/shipping" className="hover:text-gray-300 transition-colors">Shipping Information</a></li>
              <li><a href="/returns" className="hover:text-gray-300 transition-colors">Returns & Exchanges</a></li>
              <li><a href="/faq" className="hover:text-gray-300 transition-colors">F.A.Q.</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Stay in touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border border-gray-700 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full bg-transparent border border-gray-700 rounded px-3 py-2"
              />
              
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="women"
                    checked={shopFor === 'women'}
                    onChange={() => setShopFor('women')}
                    className="mr-2"
                  />
                  Women
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="men"
                    checked={shopFor === 'men'}
                    onChange={() => setShopFor('men')}
                    className="mr-2"
                  />
                  Men
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="all"
                    checked={shopFor === 'all'}
                    onChange={() => setShopFor('all')}
                    className="mr-2"
                  />
                  All
                </label>
              </div>
              
              <button type="submit" className="w-full bg-white text-black hover:bg-gray-200 px-4 py-2 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-300 transition-colors"><FiInstagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gray-300 transition-colors"><FiFacebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gray-300 transition-colors"><FiTwitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gray-300 transition-colors"><FiLinkedin className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gray-300 transition-colors"><FiMail className="h-5 w-5" /></a>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Frank And Oak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

