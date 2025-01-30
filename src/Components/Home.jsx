import { Motion } from "@motionone/solid";
import { FiGithub, FiLinkedin, FiMail, FiCode, FiLayout, FiServer, FiSmartphone } from "solid-icons/fi";
import { createSignal, createEffect, onMount } from "solid-js";
import profile from '../assets/profile.jpg'

const TypeWriter = (props) => {
  // TypeWriter component remains the same
  const [text, setText] = createSignal("");
  const [currentIndex, setCurrentIndex] = createSignal(0);
  const [currentText, setCurrentText] = createSignal(0);
  
  onMount(() => {
    const typeText = () => {
      const texts = props.texts;
      const current = texts[currentText()];
      
      if (currentIndex() < current.length) {
        setText(prev => prev + current[currentIndex()]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCurrentIndex(0);
          setCurrentText((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    };

    const interval = setInterval(typeText, 100);
    return () => clearInterval(interval);
  });

  return <span class="border-r-2 border-purple-500 pr-1">{text()}</span>;
};

const Home = () => {
  return (
    <div class="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section class="min-h-screen flex items-center justify-center pt-20">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          class="container mx-auto px-4 text-center"
        >
          <Motion
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
            class="mb-12 relative inline-block"
          >
            <div class="w-40 h-40 md:w-48 md:h-48 rounded-full relative">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse"></div>
              <div class="absolute inset-[3px] bg-black rounded-full"></div>
              <div class="absolute inset-[6px] rounded-full overflow-hidden border-2 border-purple-500">
                <img src={profile} alt="Profile" class="w-full h-full object-cover filter saturate-[1.2]" />
              </div>
            </div>
          </Motion>

          <div class="space-y-8">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 class="text-5xl md:text-7xl font-bold mb-4">
                Hi, I'm <span class="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Muynuddin R
                </span>
              </h1>
            </Motion>

            <div class="text-2xl md:text-3xl text-gray-300 h-12 font-bold">
              <TypeWriter texts={['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver']} />
            </div>

            <div class="flex justify-center gap-6">
              {[
                { icon: FiGithub, link: "https://github.com/muynuddinr", label: "GitHub" },
                { icon: FiLinkedin, link: "https://www.linkedin.com/in/moinuddinr/", label: "LinkedIn" },
                { icon: FiMail, link: "mailto:muynuddinr@gmail.com", label: "Email" }
              ].map(social => (
                <Motion whileHover={{ y: -5, scale: 1.1 }}>
                  <a href={social.link} target="_blank" rel="noopener noreferrer" class="group">
                    <div class="p-4 bg-zinc-900 rounded-2xl border border-zinc-800 group-hover:border-purple-500/50 transition-all duration-300">
                      <social.icon class="text-2xl text-gray-400 group-hover:text-purple-500 transition-colors" />
                    </div>
                    <span class="mt-2 block text-sm text-gray-500 group-hover:text-purple-500 transition-colors">{social.label}</span>
                  </a>
                </Motion>
              ))}
            </div>
          </div>
        </Motion>
      </section>

      {/* Services Section */}
      <section class="py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">What I Do</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FiCode, title: "Web Development", desc: "Building responsive websites with modern technologies" },
              { icon: FiLayout, title: "UI/UX Design", desc: "Creating intuitive and beautiful user interfaces" },
              { icon: FiServer, title: "Backend Development", desc: "Developing robust server-side applications" },
              { icon: FiSmartphone, title: "Mobile Development", desc: "Building cross-platform mobile applications" }
            ].map(service => (
              <Motion whileHover={{ y: -10 }} class="relative group">
                <div class="h-full p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 group-hover:border-purple-500/50 transition-all duration-300">
                  <service.icon class="text-4xl text-purple-500 mb-6" />
                  <h3 class="text-xl font-bold mb-4 text-gray-200">{service.title}</h3>
                  <p class="text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section class="py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Experience</h2>
          <div class="max-w-3xl mx-auto space-y-8">
            {[
              { year: "2023", role: "Senior Developer", company: "Tech Corp" },
              { year: "2021", role: "Full Stack Developer", company: "StartUp Inc" },
              { year: "2019", role: "Junior Developer", company: "Code Lab" }
            ].map((exp, i) => (
              <Motion
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                class="relative pl-12 pb-8 border-l-2 border-purple-500/20 last:border-0 last:pb-0"
              >
                <div class="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full ring-4 ring-black"></div>
                <div class="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-purple-500/50 transition-all duration-300">
                  <span class="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-3">{exp.year}</span>
                  <h3 class="text-2xl font-bold mb-2 text-gray-200">{exp.role}</h3>
                  <p class="text-gray-400">{exp.company}</p>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;