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

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); // Close mobile menu when navigating
  };

  return (
    <nav 
      title="Navigation Bar"
      class={`fixed w-full z-50 transition-all duration-500 
      ${scrolled() 
        ? 'bg-black/75 backdrop-blur-xl shadow-[0_2px_25px_-5px_rgba(147,51,234,0.3)]' 
        : 'bg-transparent backdrop-blur-sm'}`}>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div class="flex-shrink-0 group">
            <a href="/" onClick={() => handleNavClick('home')}>
              <h1 class="text-2xl sm:text-3xl md:text-4xl font-black cursor-pointer tracking-tighter 
                bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 bg-clip-text text-transparent
                group-hover:scale-110 group-hover:tracking-normal transition-all duration-700 ease-in-out
                animate-gradient-x bg-300% group-hover:brightness-125 hover:shadow-lg">
                PORT<span class="text-white group-hover:bg-gradient-to-r from-purple-600 to-blue-600 
                group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">FOLIO</span>
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div class="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink href="/" active={activeSection() === 'home'} onClick={() => handleNavClick('home')}>Home</NavLink>
            <NavLink href="About" active={activeSection() === 'about'} onClick={() => handleNavClick('about')}>About</NavLink>
            <NavLink href="Skills" active={activeSection() === 'skills'} onClick={() => handleNavClick('skills')}>Skills</NavLink>
            <NavLink href="Projects" active={activeSection() === 'projects'} onClick={() => handleNavClick('projects')}>Projects</NavLink>
            <ContactButton href="Contact">Get In Touch</ContactButton>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen())}
            class="md:hidden group p-2 focus:outline-none hover:scale-105 transition-transform duration-300"
          >
            <div class="relative w-5 sm:w-6 h-4 sm:h-5">
              <span class={`transform transition-all duration-300 absolute h-0.5 w-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg ${isMenuOpen() ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span class={`transform transition-all duration-300 absolute h-0.5 w-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg top-2 ${isMenuOpen() ? 'opacity-0' : ''}`} />
              <span class={`transform transition-all duration-300 absolute h-0.5 w-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg top-4 ${isMenuOpen() ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div class={`md:hidden fixed top-[64px] sm:top-[80px] left-0 w-full h-screen
          ${isMenuOpen() ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'} 
          transition-all duration-500 ease-in-out bg-black/95 backdrop-blur-lg
          border-t border-purple-500/20`}>
          <div class="px-4 pt-6 pb-8 space-y-4">
            <MobileNavLink href="/" onClick={() => handleNavClick('home')}>Home</MobileNavLink>
            <MobileNavLink href="About" onClick={() => handleNavClick('about')}>About</MobileNavLink>
            <MobileNavLink href="Skills" onClick={() => handleNavClick('skills')}>Skills</MobileNavLink>
            <MobileNavLink href="Projects" onClick={() => handleNavClick('projects')}>Projects</MobileNavLink>
            <div class="pt-4">
              <MobileNavLink href="Contact" special>Get In Touch</MobileNavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = (props) => (
  <a
    href={props.href}
    onClick={props.onClick}
    class="relative px-3 sm:px-4 md:px-5 py-2.5 text-sm font-medium group rounded-lg"
  >
    <span class={`relative z-10 transition-all duration-500 
      ${props.active 
        ? 'text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 bg-clip-text font-semibold' 
        : 'text-gray-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-fuchsia-500 group-hover:to-blue-500 group-hover:bg-clip-text'}`}>
      {props.children}
    </span>
    <span class={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left scale-x-0 
      group-hover:scale-x-100 transition-transform duration-700 bg-gradient-to-r 
      from-purple-500 via-fuchsia-500 to-blue-500 ${props.active ? 'scale-x-100' : ''}`}
    />
  </a>
)

const ContactButton = (props) => (
  <a
    href={props.href}
    class="relative px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 text-sm font-medium text-white overflow-hidden
      rounded-full group transition-all duration-500 ease-out
      hover:scale-110 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]
      active:scale-95"
  >
    <span class="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 
      group-hover:animate-gradient-xy transition-all duration-700"></span>
    <span class="relative font-semibold">{props.children}</span>
  </a>
)

const MobileNavLink = (props) => (
  <a
    href={props.href}
    onClick={props.onClick}
    class={`block px-5 py-4 text-base font-medium rounded-xl transition-all duration-500
      ${props.special 
        ? 'text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:scale-105 active:scale-95' 
        : 'text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-fuchsia-500 hover:to-blue-500 hover:bg-clip-text hover:bg-white/5 hover:scale-105'}`}
  >
    {props.children}
  </a>
)

export default Navbar