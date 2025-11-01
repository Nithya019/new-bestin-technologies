export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Brand Section */}
            <div>
              <h2 className="text-2xl font-bold">Bestin Technologies</h2>
              <p className="text-gray-400 mt-2">
                Building the future, one step at a time.
              </p>
            </div>
  
            {/* Navigation Links */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <a href="/about" className="text-gray-400 hover:text-white">About</a>
              <a href="/services" className="text-gray-400 hover:text-white">Services</a>
            </div>
  
            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold">Looking for expert IT solutions? </h3>
              <div className="flex space-x-4 mt-2">
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-6 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
            © 2024 Bestin Technologies Limited. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
  