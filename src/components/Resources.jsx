const Resources = () => {
  const resources = [
    {
      title: 'React Bits Component Library',
      description: '135+ animated React components for building stunning UIs',
      link: 'https://reactbits.dev/',
      category: 'Components',
      tags: ['React', 'Animations', 'UI']
    },
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive documentation for web technologies',
      link: 'https://developer.mozilla.org/',
      category: 'Documentation',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'React Documentation',
      description: 'Official React documentation and guides',
      link: 'https://react.dev/',
      category: 'Documentation',
      tags: ['React', 'Tutorial']
    },
    {
      title: 'FreeCodeCamp',
      description: 'Free coding bootcamp with certifications',
      link: 'https://www.freecodecamp.org/',
      category: 'Learning Platform',
      tags: ['Beginner', 'Free', 'Certification']
    },
    {
      title: 'CSS-Tricks',
      description: 'Tips, tricks, and techniques on using CSS',
      link: 'https://css-tricks.com/',
      category: 'Blog',
      tags: ['CSS', 'Design']
    },
    {
      title: 'JavaScript.info',
      description: 'The Modern JavaScript Tutorial',
      link: 'https://javascript.info/',
      category: 'Tutorial',
      tags: ['JavaScript', 'Advanced']
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {resources.map((resource, index) => (
        <div key={index} className="glow-card">
          <div className="flex justify-between items-start mb-4">
            <span className="badge !bg-gradient-to-r !from-[#667eea] !to-[#764ba2] border-none">
              {resource.category}
            </span>
            <span className="w-3 h-3 bg-[#667eea] rounded-full animate-pulse-slow"></span>
          </div>
          <h3 className="text-xl mb-3 text-gray-200 font-semibold">
            {resource.title}
          </h3>
          <p className="text-[#a0a0b0] mb-4 leading-relaxed">
            {resource.description}
          </p>
          <div className="mb-4">
            {resource.tags.map((tag, i) => (
              <span key={i} className="badge text-xs">
                {tag}
              </span>
            ))}
          </div>
          <a 
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full block text-center no-underline"
          >
            Explore Resource →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Resources;
