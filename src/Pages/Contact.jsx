import { createSignal, onMount } from 'solid-js';
import { FaBrandsGithub, FaBrandsLinkedin } from 'solid-icons/fa';
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
      {/* Enhanced Background Effects */}
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-25 animate-pulse-slow"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-25 animate-pulse-slow"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-20 animate-pulse-slow"></div>
      </div>

      <div class="max-w-4xl mx-auto px-6 relative z-10">
        {/* Enhanced Header Section */}
        <div class="text-center mb-20" data-aos="fade-down">
          <h2 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div class="mt-4 h-2 w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p class="text-gray-400 text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm just a message away.
          </p>
        </div>

        {/* Enhanced Contact Form */}
        <div 
          class="relative group mb-20"
          data-aos="fade-up"
        >
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
          <div class="relative bg-gray-900/60 backdrop-blur-lg p-10 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
            <form class="space-y-8" onSubmit={handleSubmit}>
              <div class="group">
                <label class="block text-base font-medium mb-3 text-purple-300">Name</label>
                <input
                  type="text"
                  class="w-full p-4 bg-gray-800/60 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50 text-lg"
                  placeholder="Your Name"
                  value={formData().name}
                  onInput={(e) => setFormData({...formData(), name: e.target.value})}
                />
              </div>
              <div class="group">
                <label class="block text-base font-medium mb-3 text-gray-400">Email</label>
                <input
                  type="email"
                  class="w-full p-4 bg-gray-800/60 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 text-lg"
                  placeholder="your@email.com"
                  value={formData().email}
                  onInput={(e) => setFormData({...formData(), email: e.target.value})}
                />
              </div>
              <div class="group">
                <label class="block text-base font-medium mb-3 text-gray-400">Message</label>
                <textarea
                  class="w-full p-4 bg-gray-800/60 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 text-lg h-40 resize-none"
                  placeholder="Your message here..."
                  value={formData().message}
                  onInput={(e) => setFormData({...formData(), message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 py-5 px-8 rounded-xl text-lg font-semibold
                  hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transform hover:scale-[1.02] hover:-translate-y-1
                  transition duration-300 text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Enhanced Social Links */}
        <div class="text-center space-y-10" data-aos="fade-up">
          <h3 class="text-3xl font-bold bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
            Find Me Online
          </h3>
          <div class="flex justify-center gap-10">
            <a href="https://github.com/muynuddinr" class="p-5 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl
              hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transform hover:scale-110 transition duration-300 border border-gray-700/50 hover:border-purple-500/50">
              <FaBrandsGithub size={32} class="text-purple-400 hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://github.com/muynuddinr" class="p-5 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl
              hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transform hover:scale-110 transition duration-300 border border-gray-700/50 hover:border-purple-500/50">
              <FaBrandsLinkedin size={32} class="text-purple-400 hover:text-blue-400 transition-colors" />
            </a>
            <a href="mailto:muynuddinr@gmail.com" class="p-5 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl
              hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transform hover:scale-110 transition duration-300 border border-gray-700/50 hover:border-purple-500/50">
              <FaSolidEnvelope size={32} class="text-purple-400 hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;