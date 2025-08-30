"use client"

import { BookOpen, Sparkles, Star, Mail, Phone, MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function Footer() {
  const router = useRouter()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <img src="/images/tiger-logo.png" alt="Asian Tigers Group" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Going Global
              </h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your comprehensive guide to international education. Discover schools, 
              resources, and expert insights to help you navigate the global education landscape.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@goingglobal.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#schools" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  School Directory
                </a>
              </li>
              <li>
                <a 
                  href="#resources" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Services</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#consulting" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Education Consulting
                </a>
              </li>
              <li>
                <a 
                  href="#admissions" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Admissions Support
                </a>
              </li>
              <li>
                <a 
                  href="#planning" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Academic Planning
                </a>
              </li>
              <li>
                <a 
                  href="#support" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Student Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Going Global. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
