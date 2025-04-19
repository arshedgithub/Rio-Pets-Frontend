"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { colors } from '@/lib/theme/colors';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribe to newsletter');
    };

    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="h-10 w-10 relative mr-2">
                                <div className="absolute inset-0 rounded-full" style={{ background: `linear-gradient(135deg, ${colors.primary.main}, ${colors.accent.features})` }}></div>
                                <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={colors.primary.main}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                            </div>
                            <span className="font-bold text-xl" style={{ color: colors.primary.main }}>Rio Pets</span>
                        </div>

                        <p className="text-gray-600 mb-4">
                            Your trusted pet marketplace, connecting pet lovers with top breeders, sellers, and essential pet products. From dogs and cats to exotic birds and fish, find everything in one place.
                        </p>

                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Shop By Category
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/category/dogs" className="text-gray-600 hover:text-gray-900">Dog Supplies</Link>
                            </li>
                            <li>
                                <Link href="/category/cats" className="text-gray-600 hover:text-gray-900">Cat Supplies</Link>
                            </li>
                            <li>
                                <Link href="/category/fish" className="text-gray-600 hover:text-gray-900">Fish Supplies</Link>
                            </li>
                            <li>
                                <Link href="/category/birds" className="text-gray-600 hover:text-gray-900">Bird Supplies</Link>
                            </li>
                            <li>
                                <Link href="/category/small-pets" className="text-gray-600 hover:text-gray-900">Small Pet Supplies</Link>
                            </li>
                            <li>
                                <Link href="/deals" className="text-red-600 hover:text-red-800">Special Deals</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Customer Service
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/faqs" className="text-gray-600 hover:text-gray-900">FAQs</Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="text-gray-600 hover:text-gray-900">Shipping & Delivery</Link>
                            </li>
                            <li>
                                <Link href="/complaints" className="text-gray-600 hover:text-gray-900">Complaints</Link>
                            </li>
                            {/* <li>
                <Link href="/returns" className="text-gray-600 hover:text-gray-900">Returns & Refunds</Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-600 hover:text-gray-900">Track Your Order</Link>
              </li> */}
                            <li>
                                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-3">
                            {/* <li className="flex">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-600">
                  1234 Paw Avenue, Pet City, PC 12345
                </span>
              </li> */}
                            <li className="flex">
                                <Phone className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                                <span className="text-gray-600">
                                    (123) 456-7890
                                </span>
                            </li>
                            <li className="flex">
                                <Mail className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                                <span className="text-gray-600">
                                    support@petpalace.example
                                </span>
                            </li>
                            <li>
                                <p className="text-gray-600">
                                    <strong>Hours:</strong> Mon-Fri: 9am-6pm<br />
                                    Sat: 10am-5pm, Sun: Closed
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section with Payment Methods and Copyright */}
                <div className="border-t border-gray-200 pt-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm text-gray-500">
                                &copy; 2025 InnoForge Systems. All rights reserved.
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <img src="/api/placeholder/40/24" alt="Visa" className="h-6" />
                            <img src="/api/placeholder/40/24" alt="Mastercard" className="h-6" />
                            <img src="/api/placeholder/40/24" alt="American Express" className="h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}