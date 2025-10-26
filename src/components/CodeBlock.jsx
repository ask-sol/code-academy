import { useState } from 'react';

const CodeBlock = ({ code, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);
  
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const highlightSyntax = (code) => {
    return code
      .replace(/(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await)/g, 
        '<span class="syntax-keyword">$1</span>')
      .replace(/(['"`].*?['"`])/g, '<span class="syntax-string">$1</span>')
      .replace(/(\w+)(?=\()/g, '<span class="syntax-function">$1</span>')
      .replace(/(\/\/.*$)/gm, '<span class="syntax-comment">$1</span>');
  };
  
  return (
    <div className="code-block">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[#676e95] text-sm">{language}</span>
        <button 
          onClick={copyCode}
          className="btn-primary !px-4 !py-2 text-sm"
        >
          {copied ? '✓ Copied!' : 'Copy Code'}
        </button>
      </div>
      <pre className="m-0 text-gray-200 overflow-x-auto">
        <code dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }} />
      </pre>
    </div>
  );
};

export default CodeBlock;
