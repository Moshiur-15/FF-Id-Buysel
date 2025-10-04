import { Mail, Phone, MapPin, Github, Linkedin, Globe, Code, Database, Wrench, Heart, GraduationCap, Languages } from 'lucide-react';

export default function AboutPage() {
  const skills = {
    frontend: ['React.js', 'JavaScript', 'Next.js', 'Mongoose', 'HTML', 'CSS', 'TailwindCSS'],
    backend: ['Node.js', 'Express.js'],
    database: ['MongoDB'],
    tools: ['Git', 'GitHub', 'Postman']
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">Moshiur Rahman</h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">Frontend Developer</p>
          
          <div className="flex flex-wrap gap-4 text-gray-300">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Patuakhali, Barisal, Bangladesh</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+880 1327023639</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>masiurislam28@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <a href="#" className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
              <Globe className="w-5 h-5" />
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-6 text-black">Professional Summary</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm a front-end developer who builds nice and fast websites using React.js, Next.js, Tailwind, and JavaScript. I can take a design and turn it into a real website that works on all devices. I love learning new things, working with a team, and solving problems. I'm looking for a remote job where I can grow, help build cool web apps, and make users happy with clean, smooth design.
        </p>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-black">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border-2 border-black">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, i) => (
                  <span key={i} className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-black">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Backend & Database</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Backend</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, i) => (
                      <span key={i} className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Database</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.database.map((skill, i) => (
                      <span key={i} className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-black">
              <div className="flex items-center space-x-3 mb-6">
                <Wrench className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-black">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span className="text-gray-700">Fast Learner & Tech Enthusiast</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span className="text-gray-700">I like working and talking with other people</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span className="text-gray-700">I love Clean UI/UX Design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Languages */}
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              <div className="bg-white text-black p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Patuakhali Polytechnic Institute</h3>
                <p className="text-gray-600 mb-1">Computer Science and Technology</p>
                <p className="text-sm text-gray-500">Session: 2022 - 2023</p>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Languages className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Languages</h2>
              </div>
              <div className="space-y-3">
                <div className="bg-white text-black p-4 rounded-xl">
                  <span className="font-bold">Bengali:</span> Native
                </div>
                <div className="bg-white text-black p-4 rounded-xl">
                  <span className="font-bold">English:</span> Basic proficiency
                </div>
                <div className="bg-white text-black p-4 rounded-xl">
                  <span className="font-bold">Hindi:</span> Conversation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}