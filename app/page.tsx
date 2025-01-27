import Image from "next/image"
import ContactForm from "./components/ContactForm"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-8">I'm a web developer passionate about creating amazing digital experiences.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/Ojas.png" alt="Profile" width={300} height={300} className="rounded-full" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Hi, I'm Kumar Ojas. I'm a passionate web developer with experience in building modern, responsive
                websites and applications. I specialize in React, Next.js, and Node.js.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="/placeholder.svg" alt="Project 1" width={400} height={200} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p className="text-gray-600 mb-4">Description of Project 1</p>
                <a href="https://github.com/KumarOjas/Nextjs-blogapp" className="text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="/placeholder.svg" alt="Project 2" width={400} height={200} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <p className="text-gray-600 mb-4">Description of Project 2</p>
                <a href="https://github.com/KumarOjas/Portfolio-website" className="text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="/placeholder.svg" alt="Project 3" width={400} height={200} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 3</h3>
                <p className="text-gray-600 mb-4">Description of Project 3</p>
                <a href="https://github.com/KumarOjas/Social-media-dashboard" className="text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

