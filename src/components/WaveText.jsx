const WaveText = ({ text }) => {
  return (
    <div className="inline-block">
      {text.split('').map((char, index) => (
        <span 
          key={index}
          className="inline-block animate-wave"
          style={{ 
            animationDelay: `${index * 0.1}s`,
            display: char === ' ' ? 'inline' : 'inline-block'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default WaveText;
