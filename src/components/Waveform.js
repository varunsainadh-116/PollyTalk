export function Waveform({ isPlaying }) {
  return (
    <div className="waveform">
      {[...Array(100)].map((_, index) => (
        <div key={index} className={`wave ${isPlaying ? 'animate' : ''}`}></div>
      ))}
      <style jsx>{`
        .waveform {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          overflow: hidden;
          padding: 0 2px;
        }
        .wave {
          flex: 1;
          height: 100%;
          transform-origin: bottom;
          margin: 0 1px;
          transform: scaleY(0.2);
        }
        .wave.animate {
          animation: wave 1s ease-in-out infinite;
        }
        @keyframes wave {
          0%, 100% {
            transform: scaleY(0.2);
          }
          50% {
            transform: scaleY(1);
          }
        }
        ${[...Array(100)].map((_, index) => `
          .wave:nth-child(${index + 1}) {
            background: linear-gradient(45deg, 
              hsl(${220 + index * 0.6}, 30%, ${10 + index * 0.2}%), 
              hsl(${240 + index * 0.6}, 40%, ${15 + index * 0.2}%)
            );
          }
          .wave.animate:nth-child(${index + 1}) {
            animation-delay: ${index * 0.02}s;
          }
        `).join('')}
      `}</style>
    </div>
  )
}