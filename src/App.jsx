import AnimatedBackground from './components/AnimatedBackground';
import TypingText from './components/TypingText';
import WaveText from './components/WaveText';
import LearningPath from './components/LearningPath';
import InteractiveDemo from './components/InteractiveDemo';
import TutorialSection from './components/TutorialSection';
import Resources from './components/Resources';

function App() {
  return (
    <div className="min-h-screen grid-bg">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="px-10 py-5 bg-[rgba(10,10,15,0.8)] backdrop-blur-md border-b border-[rgba(102,126,234,0.2)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="gradient-text text-3xl font-black">
            CodeAcademy
          </h1>
          <div className="flex gap-5">
            <a href="#home" className="nav-link">Home</a>
            <a href="#tutorials" className="nav-link">Tutorials</a>
            <a href="#resources" className="nav-link">Resources</a>
            <a href="#practice" className="nav-link">Practice</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="px-10 py-24 text-center relative">
        <div className="animate-float">
          <h1 className="text-7xl font-black mb-8 leading-tight gradient-text">
            <WaveText text="Learn to Code" />
          </h1>
          <p className="text-2xl text-[#a0a0b0] mb-8 max-w-3xl mx-auto">
            <TypingText 
              text="Master modern web development with interactive tutorials, stunning animations, and hands-on projects." 
              speed={50}
            />
          </p>
          <div className="flex gap-5 justify-center mt-10">
            <button className="btn-primary text-lg px-10 py-4">
              🚀 Start Learning
            </button>
            <button className="btn-primary !bg-transparent border-2 border-[#667eea] text-lg px-10 py-4">
              📚 View Courses
            </button>
          </div>
        </div>
      </section>
      
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#667eea] to-transparent my-16" />
      
      {/* Learning Paths */}
      <section className="px-10 py-16 max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-5 gradient-text font-bold">
          Your Learning Journey
        </h2>
        <p className="text-center text-[#a0a0b0] text-xl mb-12 max-w-3xl mx-auto">
          Choose your path and progress at your own pace with structured courses
        </p>
        <LearningPath />
      </section>
      
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#667eea] to-transparent my-16" />
      
      {/* Interactive Demo */}
      <section className="px-10 py-16 max-w-6xl mx-auto">
        <h2 className="text-5xl text-center mb-12 gradient-text font-bold">
          Interactive Learning
        </h2>
        <InteractiveDemo />
      </section>
      
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#667eea] to-transparent my-16" />
      
      {/* Tutorials */}
      <section id="tutorials" className="px-10 py-16 max-w-7xl mx-auto">
        <TutorialSection />
      </section>
      
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#667eea] to-transparent my-16" />
      
      {/* Key Concepts */}
      <section className="px-10 py-16 max-w-6xl mx-auto">
        <h2 className="text-5xl text-center mb-12 gradient-text font-bold">
          Master the Fundamentals
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: '🎨', title: 'HTML & CSS', desc: 'Build beautiful, responsive layouts with modern HTML5 and CSS3 techniques' },
            { icon: '⚡', title: 'JavaScript', desc: 'Master the programming language of the web with ES6+ features' },
            { icon: '⚛️', title: 'React', desc: 'Create powerful single-page applications with React and its ecosystem' },
            { icon: '🎭', title: 'Animations', desc: 'Bring your websites to life with GSAP, Framer Motion, and CSS animations' },
            { icon: '🔧', title: 'Tools & Setup', desc: 'Learn modern development tools like Git, npm, and VS Code' },
            { icon: '🚀', title: 'Best Practices', desc: 'Write clean, maintainable code following industry standards' }
          ].map((concept, i) => (
            <div key={i} className="glow-card">
              <div className="text-5xl mb-4">{concept.icon}</div>
              <h3 className="text-[#667eea] mb-4 text-xl font-semibold">{concept.title}</h3>
              <p className="text-[#a0a0b0] leading-relaxed">{concept.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#667eea] to-transparent my-16" />
      
      {/* Resources */}
      <section id="resources" className="px-10 py-16 max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-5 gradient-text font-bold">
          Curated Resources
        </h2>
        <p className="text-center text-[#a0a0b0] text-xl mb-12 max-w-3xl mx-auto">
          Handpicked resources to accelerate your learning journey
        </p>
        <Resources />
      </section>
      
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#667eea] to-transparent my-16" />
      
      {/* React Bits Showcase */}
      <section className="px-10 py-16 max-w-6xl mx-auto">
        <h2 className="text-5xl text-center mb-5 gradient-text font-bold">
          Powered by React Bits
        </h2>
        <p className="text-center text-[#a0a0b0] text-xl mb-12 max-w-3xl mx-auto">
          This site features animations and components inspired by React Bits - 
          a collection of 135+ animated React components
        </p>
        
        <div className="glow-card">
          <h3 className="text-3xl mb-5 text-[#667eea] font-semibold">
            What is React Bits?
          </h3>
          <p className="text-[#a0a0b0] leading-relaxed mb-5">
            React Bits is an open-source collection of high-quality, animated, interactive, 
            and fully customizable React components for building stunning, memorable user interfaces. 
            It includes text animations, backgrounds, interactive components, and more.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { title: 'Text Animations', desc: 'Stunning text effects and transitions' },
              { title: 'Components', desc: 'Buttons, cards, and interactive elements' },
              { title: 'Backgrounds', desc: 'Dynamic and animated backgrounds' },
              { title: 'Animations', desc: 'Smooth transitions and effects' }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-[rgba(102,126,234,0.1)] rounded-lg">
                <h4 className="text-[#667eea] mb-2 font-semibold">{item.title}</h4>
                <p className="text-[#a0a0b0] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://reactbits.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4 inline-block no-underline"
            >
              Explore React Bits →
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="px-10 py-16 mt-24 bg-[rgba(10,10,15,0.8)] border-t border-[rgba(102,126,234,0.2)]">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="gradient-text text-3xl mb-5 font-bold">
            Start Your Coding Journey Today
          </h3>
          <p className="text-[#a0a0b0] mb-8 text-lg">
            Join thousands of developers learning to code with interactive tutorials
          </p>
          <button className="btn-primary text-lg px-10 py-4">
            Get Started Free
          </button>
          <div className="mt-12 pt-8 border-t border-[rgba(102,126,234,0.1)]">
            <p className="text-[#676e95] text-sm">
              Built with React • Animations inspired by React Bits • © 2025 CodeAcademy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
