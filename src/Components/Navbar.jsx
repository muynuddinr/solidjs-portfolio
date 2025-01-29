import { createSignal, createEffect } from 'solid-js'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [activeSection, setActiveSection] = createSignal('home');
  const [scrolled, setScrolled] = createSignal(false);

  createEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav class={`fixed w-full z-50 transition-all duration-500 bg-black/80 backdrop-blur-sm
      ${scrolled() ? 'shadow-[0_2px_15px_-3px_rgba(147,51,234,0.1)]' : ''}`}>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          {/* Logo */}
          <div class="flex-shrink-0 group">
            <h1 class="text-4xl font-black cursor-pointer tracking-tighter 
              bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent
              hover:scale-105 transition-all duration-300 ease-out">
              PORT<span class="text-white">FOLIO</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div class="hidden md:flex items-center space-x-1">
            <NavLink href="#home" active={activeSection() === 'home'}>Home</NavLink>
            <NavLink href="#about" active={activeSection() === 'about'}>About</NavLink>
            <NavLink href="#skills" active={activeSection() === 'skills'}>Skills</NavLink>
            <NavLink href="#projects" active={activeSection() === 'projects'}>Projects</NavLink>
            <ContactButton href="#contact">Get In Touch</ContactButton>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen())}
            class="md:hidden group p-3 focus:outline-none"
          >
            <div class="relative w-6 h-5">
              <span class={`transform transition-all duration-300 absolute h-0.5 w-6 bg-purple-500 rounded-lg ${isMenuOpen() ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span class={`transform transition-all duration-300 absolute h-0.5 w-6 bg-purple-500 rounded-lg top-2 ${isMenuOpen() ? 'opacity-0' : ''}`} />
              <span class={`transform transition-all duration-300 absolute h-0.5 w-6 bg-purple-500 rounded-lg top-4 ${isMenuOpen() ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div class={`md:hidden absolute top-20 left-0 w-full transform 
          ${isMenuOpen() ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} 
          transition-all duration-300 ease-in-out bg-zinc-900/50 backdrop-blur-sm`}>
          <div class="px-4 py-5 space-y-3">
            <MobileNavLink href="#home">Home</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#skills">Skills</MobileNavLink>
            <MobileNavLink href="#projects">Projects</MobileNavLink>
            <MobileNavLink href="#contact" special>Get In Touch</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = (props) => (
  <a
    href={props.href}
    class="relative px-4 py-2 text-sm font-medium group"
  >
    <span class={`relative z-10 transition-colors duration-300 ${props.active ? 'text-purple-500' : 'text-gray-300 group-hover:text-purple-500'}`}>
      {props.children}
    </span>
    <span class={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left scale-x-0 
      group-hover:scale-x-100 transition-transform duration-300 bg-gradient-to-r 
      from-purple-500 to-blue-500 ${props.active ? 'scale-x-100' : ''}`}
    />
  </a>
)

const ContactButton = (props) => (
  <a
    href={props.href}
    class="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full
      hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:scale-105
      transition-all duration-300 ease-out"
  >
    {props.children}
  </a>
)

const MobileNavLink = (props) => (
  <a
    href={props.href}
    class={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300
      ${props.special 
        ? 'text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]' 
        : 'text-gray-300 hover:text-purple-500 hover:bg-white/5'}`}
  >
    {props.children}
  </a>
)

export default Navbar