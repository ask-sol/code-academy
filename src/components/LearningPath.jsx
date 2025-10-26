const LearningPath = () => {
  const paths = [
    {
      title: 'Web Fundamentals',
      level: 'Beginner',
      duration: '4 weeks',
      topics: ['HTML5', 'CSS3', 'JavaScript Basics', 'DOM Manipulation'],
      progress: 65,
      icon: '🌐'
    },
    {
      title: 'React Development',
      level: 'Intermediate',
      duration: '6 weeks',
      topics: ['Components', 'Hooks', 'State Management', 'React Router'],
      progress: 40,
      icon: '⚛️'
    },
    {
      title: 'Advanced Frontend',
      level: 'Advanced',
      duration: '8 weeks',
      topics: ['TypeScript', 'Next.js', 'Performance', 'Testing'],
      progress: 15,
      icon: '🚀'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
      {paths.map((path, index) => (
        <div 
          key={index} 
          className="glow-card opacity-0 animate-[slideInUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="text-5xl mb-4">{path.icon}</div>
          <h3 className="text-2xl mb-3 text-[#667eea] font-bold">
            {path.title}
          </h3>
          <div className="flex gap-2 mb-4">
            <span className="badge">{path.level}</span>
            <span className="badge">⏱️ {path.duration}</span>
          </div>
          <div className="mb-4">
            {path.topics.map((topic, i) => (
              <span key={i} className="badge bg-[rgba(102,126,234,0.15)]">
                {topic}
              </span>
            ))}
          </div>
          <div className="h-2 bg-[rgba(102,126,234,0.2)] rounded-full overflow-hidden my-4">
            <div 
              className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full transition-all duration-500"
              style={{ width: `${path.progress}%` }}
            />
          </div>
          <p className="mt-3 text-[#676e95] text-sm">
            {path.progress}% Complete
          </p>
          <button className="btn-primary w-full mt-5">
            Continue Learning
          </button>
        </div>
      ))}
    </div>
  );
};

export default LearningPath;
