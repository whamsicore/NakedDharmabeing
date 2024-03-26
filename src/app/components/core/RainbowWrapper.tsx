'use client'
import { useEffect, useState } from 'react';

interface RainbowWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const RainbowWrapper: React.FC<RainbowWrapperProps> = ({ children, className }) => {

  const [whiteLight, setWhiteLight] = useState<string[]>(['red', 'orange', 'yellow', 'lime', 'blue', 'indigo', 'violet']);

  useEffect(() => {
    const RainbowVibe = 1200; // Interval set to 300 milliseconds
    const interval = setInterval(() => {
      setWhiteLight((currentColors) => {
        const [first, ...rest] = currentColors;
        return [...rest, first];
      });
    }, RainbowVibe); // Rotate colors every 300 milliseconds using RainbowVibe variable

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      // style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: -10}}
      className={className}
      aria-label="RainbowWrapper"
    >
      { 
        whiteLight.reduceRight(
        (layer, color) => ( // accumulator fn
          <div 
            style={{ backgroundColor: color }}
            className='p-3 w-full h-full'
          >
            {layer}
          </div>
        ), ( // initial
          <div 
            style={{ position: 'relative' }}
            className='h-full'
            aria-label="Main Frame"
          >
            {children}
          </div>
        ))
      }
    </div>
  );
};