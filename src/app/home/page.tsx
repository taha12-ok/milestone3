'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa'; // React Icon for Star
import Image from 'next/image';
const HomePage = () => {
  useEffect(() => {
    // Reveal animation for elements with the 'reveal' class
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []); // <-- Added missing closing parenthesis and dependency array

  const [isVisible, setIsVisible] = useState<any>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev: any) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      id: 'Mens Jackets ',
      title: 'Jackets starting',
      price: 'starting at $45',
      image: '/p9.png',
      link: '/womens/sweaters',
    },
    {
      id: 'Womens Jackets ',
      title: 'Jackets starting',
      price: 'starting at $45',
      image: '/p10.png',
      link: '/mens/sweaters',
    },
    {
      id: 'Mens Accessories',
      title: 'Accessories starting',
      price: 'starting at $7',
      image: '/p11.png',
      link: '/womens/jackets',
    },
    {
      id: 'Womens Accessories',
      title: 'Accessories',
      price: 'starting at $7',
      image: '/p12.png',
      link: '/mens/jackets',
    },
    {
      id: 'Mens Pants ',
      title: 'Pants starting',
      price: 'starting at $26',
      image: '/p13.png',
      link: '/womens/accessories',
    },
    {
      id: 'Womens Dresses',
      title: 'Women`s',
      price: 'starting at $50',
      image: '/p14.png',
      link: '/mens/accessories',
    },
  ];

  const reviews = [
    {
      id: 'review1',
      rating: 4,
      text: "This is so warm! Its kind of like wearing a sleeping bag in the best way.",
      author: 'Jessica M.',
      image: '/placeholder/400/600',
    },
    {
      id: 'review2',
      rating: 5,
      text: "Quality parka with features youd find on much higher priced brands. Great streamlined fit, nice little features and quality outer shell thats waterproof and breathable.",
      author: 'Jack L.',
      image: '/placeholder/400/600',
    },
  ];

  const values = [
    {
      id: 'sustainable',
      title: 'Sustainable Practices',
      image: '/p15.png',
    },
    {
      id: 'design',
      title: 'Design Philosophy',
      image: '/p16.png',
    },
    {
      id: 'fabrics',
      title: 'Fabrics Innovation',
      image: '/p17.png',
    },
    {
      id: 'partners',
      title: 'Partners and Factories',
      image: '/p18.png',
    },
  ];

  const products = [
    {
      name: 'The Recycled Wool Blazer in Black',
      price: '$199.00',
      salePrice: '$119.99',
      discount: '-43%',
      image: '/p1.png',
      link: '/products/capital-parka-slate',
      description: 'Stay warm and stylish with our premium Capital Parka in Black.',
    },
    {
      name: 'The Axis Polar Fleece Zip Up in Dark Olive',
      price: '$119.00',
      salePrice: '$66.99',
      discount: '-43%',
      image: '/p2.png',
      link: '/products/seawool-crewneck-fade-rose',
      description: 'Experience comfort and elegance with our Zip Up in Dark Olive.',
    },
    {
      name: 'The Ribbed Lambswool V-Neck Sweater in Slate Grey',
      price: '$119.00',
      salePrice: '$66.99',
      discount: '-43%',
      image: '/p3.png',
      link: '/products/seawool-crewneck-light-beige',
      description: 'Elevate your style with V-Neck Sweater in Slate Grey.',
    },
    {
      name: 'The Lambswool V-Neck Sweater in Dark Grey',
      price: '$129.00',
      salePrice: '$57.99',
      discount: '-55%',
      image: '/p4.png',
      link: '/products/axis-polar-fleece-light-greige',
      description: 'Stay cozy and fashionable with our Axis Polar Sweater in Dark Grey.',
    },
    {
      name: 'The Frances Recycled Wool Topcoat in Light Greige',
      price: '$149.00',
      salePrice: '$89.99',
      discount: '-40%',
      image: '/p5.png',
      link: '/products/merino-wool-cardigan-navy',
      description: 'Indulge in luxury with our Wool Topcoat in Light Greige.',
    },
    {
      name: 'The Satin Tank Top in Light Grey',
      price: '$179.00',
      salePrice: '$107.99',
      discount: '-39%',
      image: '/p6.png',
      link: '/products/lightweight-down-jacket-olive',
      description: 'Experience warmth without bulk in our Lightweight Down Jacket in Light Grey.',
    },
    {
      name: 'The Loose Recycled Wool Blazer in Grey Black',
      price: '$89.00',
      salePrice: '$53.99',
      discount: '-39%',
      image: '/p7.png',
      link: '/products/cashmere-blend-scarf-charcoal',
      description: 'Wrap yourself in luxury with our Wool Blazer in Grey Black.',
    },
    {
      name: 'The Cable Knit Sweater in Black',
      price: '$159.00',
      salePrice: '$95.99',
      discount: '-40%',
      image: '/p8.png',
      link: '/products/waterproof-hiking-boots-brown',
      description: 'Conquer any trail with our Cable Knit Sweater in Black.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen pt-24">
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

  {/* Video Background */}
  <video
    src="/marketing.mp4"
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  ></video>

  {/* Content */}
  <div className="relative container mx-auto px-4 h-full flex flex-col justify-center z-20">
    <div className="max-w-2xl text-white reveal opacity-0 transition-all duration-1000 translate-y-10">
      <h1 className="text-6xl hover:text-[#e5ff00] font-bold mb-4">WINTER SALE</h1>
      <p className="text-8xl font-bold text-[#e5ff00] hover:text-white mb-6">UP TO 50% OFF</p>
      <p className="text-2xl mb-8">+ Additional 25% off Everything</p>
      <div className="flex space-x-4">
        <a
          href="/women"
          className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded transition-colors"
        >
          Shop Women
        </a>
        <a
          href="/men"
          className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded transition-colors"
        >
          Shop Men
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Shop by Discount Section */}
      <section id="shop" className="bg-white py-16">
        <div className="container mx-auto py-3 px-8">
          <h2 className="text-3xl text-black font-bold mb-10 reveal opacity-0 transition-all duration-1000 translate-y-10">
            Shop by discount
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['25 to 30% off', '30 to 50% off', 'Almost Gone', 'Deepest Discounts'].map(
              (discount, index) => (
                <div
                  key={index}
                  className="bg-black text-white hover:bg-gray-800 transition-all duration-300 p-6 flex items-center justify-center h-[400px] rounded-lg cursor-pointer reveal opacity-0 translate-y-10"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold text-center">{discount}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2
            className={`text-3xl md:text-4xl text-black font-bold mb-8 text-center transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Treat yourself with an Additional 25% off Everything
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-white text-black rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link href={product.link} className="block">
                  <div className="relative">
                  <Image
            src={product.image}
            alt={product.name}
            height={400} // Provide a valid height value
            width={300} // Provide a valid width value
            className="w-full aspect-[3/4] object-cover"
          />
                    <span className="absolute top-2 left-2 bg-[#e5ff00] text-black px-2 py-1 text-sm font-semibold rounded">
                      {product.discount}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-lg">{product.name}</h3>
                    <p className="text-gray-600 mb-2 text-sm line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-semibold">{product.salePrice}</span>
                      <span className="text-gray-500 line-through">{product.price}</span>
                    </div>
                    <div className="flex mt-2">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-8">
          <h3 className="text-5xl text-black hover:text-gray-500 font-bold text-center mb-8">Explore More Products</h3>
          <p className="text-xl text-center text-gray-600 mb-4">
            Browse our full range of products across all categories you want.
          </p>
          <div className="flex justify-center">
            <a
              href="/shop"
              className="bg-[#e5ff00] text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl hover:text-yellow-500 font-bold mb-8 text-center">Even our top categories are on sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className={`animate-on-scroll transform transition-all duration-700 ${
                isVisible[category.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <a href={category.link} className="block">
                <Image
                  src={category.image}
                  alt={category.title}
                  height={400} // Provide a valid height value
            width={300}
                  className="w-full aspect-[3/4] object-cover mb-2"
                />
                <h3 className="text-sm font-medium">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.price}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-40 bg-gray-50 ">
        <h2 className="text-5xl text-black hover:text-blue-500 font-bold mb-20 text-center">You didnt hear it from us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              id={review.id}
              className={`animate-on-scroll transform transition-all duration-700 ${
                isVisible[review.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={20}
                    className={i < review.rating ? 'fill-current text-yellow-500' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-lg text-black mb-4">{review.text}</p>
              <p className="font-bold text-red-500 hover:text-black ">{review.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl  hover:text-yellow-500 font-bold mb-4">Made for Good Living.</h2>
          <p className="text-xl hover:text-yellow-500 text-gray-300 mb-12">
            Born and raised in Montreal Frank And Oak is dedicated to creating conscious collections that seamlessly fit into your everyday life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value) => (
              <a
                key={value.id}
                id={value.id}
                className={`animate-on-scroll transform transition-all duration-700 ${
                  isVisible[value.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    height={400} // Provide a valid height value
            width={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                    <h3 className="text-white text-xl font-medium">{value.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Section (Underneath everything else) */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl text-black hover:text-gray-500 font-bold mb-8 text-center">Explore More of Our Story</h2>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Dive deeper into the philosophy behind our brand and learn about our commitment to sustainability quality and design.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {/* Add More Content Below */}
          <a href="/about-us" className="block bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-sm text-gray-500">Learn about the journey and vision of our brand.</p>
          </a>
          <a href="/contact-us" className="block bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Services</h3>
            <p className="text-sm text-gray-500">We are giving you most branded designs of catlogs.</p>
          </a>
          <a href="/about-us" className="block bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Products</h3>
            <p className="text-sm text-gray-500">Explore the new design of our products.</p>
          </a>
          <a href="/contact-us" className="block bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
            <p className="text-sm text-gray-500">Get in touch with our team for inquiries.</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
