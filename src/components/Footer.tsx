import React from 'react';
import { Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="https://s3-alpha-sig.figma.com/img/56d4/5a66/62bbb4010a0f29ad5e21a54d0ee202fc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nZwnC-kl9OVhV6fHDXOPuEXSr05fXg4PQRS2gK8QEqxvoY3ntFqYShQHYiUh7VRY7-vC1Npuc6CMq7CUjx5G4~oEJToARjxaic6xeXNXVBlFi7gJ3kiv4jeHbEqX7SFiyxe7~eSrmKPZmDde9nChYeG5s0aGKapP5n8HrFv~MWgiXwhVCoHgmYKCWqca2MEGXt2I258AcmcwxpoPQpzcyF9eqMVqcp1goTowP9i2XgBX--hucTy3N~7ZQJUFYaNcKrC2CSrnWBHGxuSJKKSkdwelqO1yDJgXIIoQ-NNESAdch-2B-rYW4Ix248HdVixcKDHPPdG1t4Ose3W13XdAIA__"/>
            </div>
            <p className="text-gray-600 max-w-sm">
              Join us on a journey towards a healthier, balanced life – where each inhale and exhale contributes to your overall sense of wellness.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-gray-600">Phone: (555) 123-4567</p>
              <p className="text-gray-600">Email: info@breathematters.com</p>
              <p className="text-gray-600">Location: 123 Breath Street, Wellness City, WC 12345</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay in touch</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <MessageCircle className="w-6 h-6" />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            &copy;2024 BreatherMatters all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}