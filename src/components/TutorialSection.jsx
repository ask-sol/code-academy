import CodeBlock from './CodeBlock';

const TutorialSection = () => {
  const tutorials = [
    {
      step: 1,
      title: 'Setting Up Your Environment',
      content: 'Install Node.js, set up your code editor, and create your first project.',
      code: `// Install create-react-app globally
npm install -g create-react-app

// Create a new React project
npx create-react-app my-first-app

// Navigate to your project
cd my-first-app

// Start the development server
npm start`
    },
    {
      step: 2,
      title: 'Understanding Components',
      content: 'Learn how to create reusable components, the building blocks of React.',
      code: `// Functional Component
function Welcome({ name }) {
  return (
    <div className="welcome">
      <h1>Hello, {name}!</h1>
      <p>Welcome to React</p>
    </div>
  );
}

// Using the component
<Welcome name="Developer" />`
    },
    {
      step: 3,
      title: 'Working with State',
      content: 'Manage dynamic data in your components using React hooks.',
      code: `import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  };
  
  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}`
    }
  ];
  
  return (
    <div className="my-16">
      <h2 className="text-5xl mb-10 text-center gradient-text font-bold">
        Step-by-Step Tutorials
      </h2>
      
      <div className="max-w-4xl mx-auto">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="glow-card mb-8">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] 
                            flex items-center justify-center text-2xl font-bold mr-5">
                {tutorial.step}
              </div>
              <h3 className="text-2xl text-[#667eea] font-semibold">
                {tutorial.title}
              </h3>
            </div>
            <p className="text-[#a0a0b0] mb-5 leading-relaxed">
              {tutorial.content}
            </p>
            <CodeBlock code={tutorial.code} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialSection;
