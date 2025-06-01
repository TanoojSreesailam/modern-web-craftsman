
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            About Me
          </h2>
          
          <div className="mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm a passionate full-stack developer with a deep love for creating innovative digital experiences. 
            With expertise spanning both frontend and backend technologies, I enjoy tackling complex challenges 
            and turning ideas into reality through clean, efficient code.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            My journey in technology is driven by curiosity and a commitment to continuous learning. 
            I believe in the power of collaboration and am always excited to work on projects that make a 
            meaningful impact. When I'm not coding, you'll find me exploring new technologies, 
            contributing to open source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
