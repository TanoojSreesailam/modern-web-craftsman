
const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Professional headshot"
              className="w-32 h-32 rounded-full mx-auto shadow-lg object-cover border-4 border-white"
            />
          </div>
          
          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Full-Stack Developer | Innovator | Problem Solver
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions that bridge the gap between 
            cutting-edge technology and real-world applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Connect with Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
