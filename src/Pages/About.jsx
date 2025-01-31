import { onMount } from "solid-js";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../assets/profile.jpg";

function About() {
  onMount(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  });

  return (
    <section id="about" class="min-h-screen bg-black text-gray-300 py-28 relative">
      {/* Background decorative elements */}
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div class="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div class="text-center mb-20" data-aos="fade-down">
          <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div class="mt-3 h-1.5 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div 
            class="relative group cursor-pointer w-[500px] h-[500px] mx-auto md:mx-0" 
            data-aos="fade-right"
          >
            {/* Enhanced gradient background effect */}
            <div class="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-xl blur-lg opacity-40 group-hover:opacity-75 group-hover:blur-xl transition duration-700"></div>
            
            {/* Image container with enhanced effects */}
            <div class="relative h-full rounded-xl overflow-hidden shadow-2xl">
              <img
                src={profile}
                alt="Profile"
                class="w-full h-full object-cover object-center transform transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              
              {/* Overlay effects */}
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Bio Content */}
          <div class="space-y-8" data-aos="fade-left">
            <h3 class="text-3xl font-bold text-white tracking-wide">
              Hi, I'm <span class="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Muynuddin</span>
            </h3>
            <p class="text-gray-300 leading-relaxed text-lg">
              a Full Stack Developer specializing in Django, Next.js, and MERN
              stack. I build scalable, high-performance web apps, from powerful
              backends to sleek frontends. With expertise in Shopify, custom
              filters, React, and Tailwind CSS, I create efficient, secure, and
              user-friendly digital solutions. Let's build something amazing! 🚀
            </p>

            {/* Quick Facts */}
            <div class="grid grid-cols-2 gap-8 mt-10">
              <div class="transform hover:scale-105 transition duration-300 p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
                <h4 class="text-purple-400 font-semibold mb-2">Location</h4>
                <p class="text-gray-300">Bengaluru, India</p>
              </div>

              <div class="transform hover:scale-105 transition duration-300 p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
                <h4 class="text-purple-400 font-semibold mb-2">Experience</h4>
                <p class="text-gray-300">1+ Years</p>
              </div>

              <div class="transform hover:scale-105 transition duration-300 p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
                <h4 class="text-purple-400 font-semibold mb-2">Education</h4>
                <p class="text-gray-300">Diploma in Computer Science and Engineering</p>
              </div>

              <div class="transform hover:scale-105 transition duration-300 p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
                <h4 class="text-purple-400 font-semibold mb-2">Interests</h4>
                <p class="text-gray-300">Web Development, AI, etc.</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="/Contact"
              class="inline-block mt-10 px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full
                font-semibold text-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transform hover:scale-105 hover:translate-y-[-2px] transition duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
