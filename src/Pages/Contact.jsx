import { createSignal, onMount } from 'solid-js';
import { FaBrandsGithub, FaBrandsLinkedin, FaBrandsTwitter } from 'solid-icons/fa';
import { FaSolidEnvelope } from 'solid-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = createSignal({
    name: '',
    email: '',
    message: ''
  });

  onMount(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData());
    // Add form submission logic here
  };

  return (
    <section class="min-h-screen bg-black text-gray-300 py-28 relative">
      {/* Background Effects */}
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      </div>

      <div class="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div class="text-center mb-20" data-aos="fade-down">
          <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div class="mt-3 h-1.5 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p class="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">Let's connect and create something amazing together</p>
        </div>

        {/* Contact Form */}
        <div 
          class="relative group mb-16"
          data-aos="fade-up"
        >
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
          <div class="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
            <form class="space-y-6" onSubmit={handleSubmit}>
              <div class="group">
                <label class="block text-sm font-medium mb-2 text-purple-400">Name</label>
                <input
                  type="text"
                  class="w-full p-4 bg-gray-800/50 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50"
                  placeholder="Your Name"
                  value={formData().name}
                  onInput={(e) => setFormData({...formData(), name: e.target.value})}
                />
              </div>
              <div class="group">
                <label class="block text-sm font-medium mb-2 text-gray-400">Email</label>
                <input
                  type="email"
                  class="w-full p-4 bg-gray-800/50 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
                  placeholder="your@email.com"
                  value={formData().email}
                  onInput={(e) => setFormData({...formData(), email: e.target.value})}
                />
              </div>
              <div class="group">
                <label class="block text-sm font-medium mb-2 text-gray-400">Message</label>
                <textarea
                  class="w-full p-4 bg-gray-800/50 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 h-40 resize-none"
                  placeholder="Your message here..."
                  value={formData().message}
                  onInput={(e) => setFormData({...formData(), message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-4 px-6 rounded-xl font-medium 
                  hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transform hover:scale-105 hover:translate-y-[-2px] 
                  transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div class="text-center space-y-8" data-aos="fade-up">
          <h3 class="text-2xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            Connect With Me
          </h3>
          <div class="flex justify-center gap-8">
            <a href="#" class="p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl 
              hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] transform hover:scale-110 transition duration-300">
              <FaBrandsGithub size={28} class="text-purple-400 hover:text-blue-400 transition-colors" />
            </a>
            <a href="#" class="p-3 bg-gray-800/30 rounded-xl hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110">
              <FaBrandsLinkedin size={28} />
            </a>
            <a href="#" class="p-3 bg-gray-800/30 rounded-xl hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110">
              <FaBrandsTwitter size={28} />
            </a>
            <a href="#" class="p-3 bg-gray-800/30 rounded-xl hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110">
              <FaSolidEnvelope size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;