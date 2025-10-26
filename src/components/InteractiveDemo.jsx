import { useState } from 'react';
import CodeBlock from './CodeBlock';

const InteractiveDemo = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#667eea');
  
  return (
    <div className="bg-[rgba(30,30,46,0.6)] rounded-xl p-8 my-8 border border-[rgba(102,126,234,0.3)]">
      <h3 className="mb-5 text-[#667eea] text-xl font-semibold">
        🎮 Try It Yourself!
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h4 className="mb-4 font-semibold">Interactive Example</h4>
          <div className="bg-[rgba(102,126,234,0.1)] p-8 rounded-xl text-center">
            <div 
              className="text-6xl font-bold mb-5 transition-all duration-300"
              style={{ color }}
            >
              {count}
            </div>
            <div className="flex gap-3 justify-center mb-5">
              <button 
                onClick={() => setCount(count - 1)}
                className="btn-primary"
              >
                -
              </button>
              <button 
                onClick={() => setCount(0)}
                className="btn-primary !bg-gradient-to-r !from-red-500 !to-red-600"
              >
                Reset
              </button>
              <button 
                onClick={() => setCount(count + 1)}
                className="btn-primary"
              >
                +
              </button>
            </div>
            <div>
              <input 
                type="color" 
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full h-10 cursor-pointer rounded"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="mb-4 font-semibold">The Code</h4>
          <CodeBlock code={`function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#667eea');
  
  return (
    <div>
      <h1 style={{ color }}>{count}</h1>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <input 
        type="color" 
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}`} />
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;
