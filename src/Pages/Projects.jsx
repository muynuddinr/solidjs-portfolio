import { For, onMount } from 'solid-js';
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  onMount(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  });

  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with SolidJS and TailwindCSS",
      image: "/portfolio.jpg",
      tech: ["SolidJS", "Tailwind", "AOS"],
      category: "Web Development",
      demo: "https://your-portfolio-url.com",
      github: "https://github.com/yourusername/portfolio"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      image: "/ecommerce.jpg",
      tech: ["SolidJS", "Node.js", "MongoDB"],
      category: "Full Stack",
      demo: "https://your-ecommerce-demo.com",
      github: "https://github.com/yourusername/ecommerce"
    }
  ];

  return (
    <section class="min-h-screen bg-black text-gray-300 py-28 relative">
      {/* Background Effects */}
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div class="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div class="text-center mb-20" data-aos="fade-down">
          <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div class="mt-3 h-1.5 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p class="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Explore my latest works and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <For each={projects}>
            {(project) => (
              <div 
                class="group relative" 
                data-aos="fade-up"
              >
                <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
                <div class="relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div class="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    class="w-full h-56 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div class="p-8">
                    <span class="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-400 rounded-full text-xs font-medium mb-4 inline-block">
                      {project.category}
                    </span>
                    <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p class="text-gray-400 mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-6">
                      <For each={project.tech}>
                        {(tech) => (
                          <span class="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300 hover:bg-gray-700/50 transition-colors">
                            {tech}
                          </span>
                        )}
                      </For>
                    </div>
                    <div class="flex gap-4">
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium
                            hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transform hover:scale-105 
                            transition duration-300 flex items-center gap-2"
                        >
                          Live Demo
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="px-6 py-2.5 bg-gray-800 rounded-lg text-white font-medium
                            hover:bg-gray-700 transform hover:scale-105
                            transition duration-300 flex items-center gap-2"
                        >
                          GitHub
                          <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Projects;