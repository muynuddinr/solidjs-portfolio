import { onMount } from "solid-js";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  onMount(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        { name: "HTML/CSS", level: 90, icon: "🌐" },
        { name: "JavaScript", level: 85, icon: "📜" },
        { name: "React", level: 80, icon: "⚛️" },
        { name: "Tailwind CSS", level: 85, icon: "🎨" },
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 75, icon: "🟢" },
        { name: "Python", level: 70, icon: "🐍" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "SQL", level: 70, icon: "📊" },
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, icon: "📚" },
        { name: "VS Code", level: 90, icon: "📝" },
        { name: "Docker", level: 65, icon: "🐋" },
        { name: "AWS", level: 60, icon: "☁️" },
      ]
    }
  ];

  return (
    <section id="skills" class="min-h-screen bg-black text-gray-300 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-down">
          <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div class="mt-2 h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              class="group relative bg-zinc-900/50 p-8 rounded-xl backdrop-blur-sm
                transform transition-all duration-300 hover:scale-105
                hover:shadow-[0_0_25px_rgba(147,51,234,0.1)]
                border border-zinc-800 hover:border-purple-500/30"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-15 transition duration-300"></div>
              <div class="relative">
                <div class="flex items-center gap-3 mb-6">
                  <span class="text-2xl">{category.icon}</span>
                  <h3 class="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <div class="space-y-5">
                  {category.skills.map(skill => (
                    <div class="transform transition-all duration-300 hover:translate-x-2">
                      <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                          <span class="text-xl">{skill.icon}</span>
                          <span class="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span class="text-purple-500 font-semibold">{skill.level}%</span>
                      </div>
                      <div class="w-full bg-zinc-800/50 rounded-full h-2.5 overflow-hidden">
                        <div 
                          class="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full
                            transform transition-all duration-1000 ease-out"
                          style={`width: ${skill.level}%`}
                          data-aos="slide-right"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;