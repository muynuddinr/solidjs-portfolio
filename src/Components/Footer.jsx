function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer class="bg-black text-gray-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Social Links */}
          <div class="flex items-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              class="hover:text-purple-500 transition-colors duration-300">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              class="hover:text-purple-500 transition-colors duration-300">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a href="mailto:example@email.com"
              class="hover:text-purple-500 transition-colors duration-300">
              <i class="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div class="border-t border-zinc-800 my-8"></div>

        {/* Copyright */}
        <div class="text-center text-sm text-gray-500">
          <p>© {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;