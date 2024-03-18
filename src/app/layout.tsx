'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import "@copilotkit/react-ui/styles.css";
import "@copilotkit/react-textarea/styles.css";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const inter = Inter({ subsets: ["latin"] });
import { useState } from 'react';

// export const metadata: Metadata = {
//   title: "The Dharmabot",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const router = useRouter();

  // Example test code to demonstrate useRouter capabilities
  useEffect(() => {
    // Navigate to a different page after 5 seconds
    const navigateTimer = setTimeout(() => {
      // router.push('/dashboard');
    }, 5000);

    // Example of prefetching a page (improves performance by loading data in advance)
    router.prefetch('/about');

    return () => clearTimeout(navigateTimer);
  }, [router]);
  
  const [whiteLight, setWhiteLight] = useState(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']);

  useEffect(() => {
    const RainbowVibe = 300; // Interval set to 1000 milliseconds
    const interval = setInterval(() => {
      setWhiteLight((currentColors) => {
        const [first, ...rest] = currentColors;
        return [...rest, first];
      });
    }, RainbowVibe); // Rotate colors every second using RainbowVibe variable

    return () => clearInterval(interval);
  }, [])
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationComponent/>
        
        {
          whiteLight.reduceRight((layer, color) => ( // Accumulator
            <div style={{ 
              padding: '25px', backgroundColor: color, borderLeft: `2px solid ${color}`, borderRight: `2px solid ${color}` 
            }}>
              {layer}
            </div>
          ), ( // initial value
          <div>
            {children}
          </div>)
        )
      }

      </body>
    </html>
  );
}

const NavigationComponent = () => {
  const router = useRouter();
  // Assuming paths are dynamically determined or fetched from some source
  const [paths, setPaths] = useState(["/dashboard", "/users", "/settings"]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const goToRandomPage = () => {
    const randomPath = paths[Math.floor(Math.random() * paths.length)];
    router.push(randomPath);
    const newHistory = [...history];
    newHistory.splice(historyIndex + 1, history.length - historyIndex, randomPath);
    setHistory(newHistory);
    setHistoryIndex(historyIndex + 1);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      router.push(history[historyIndex - 1]);
      setHistoryIndex(historyIndex - 1);
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      router.push(history[historyIndex + 1]);
      setHistoryIndex(historyIndex + 1);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goToRandomPage}>Go to a Random Page</button>
      <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${historyIndex <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={goBack} disabled={historyIndex <= 0}>Back</button>
      <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${historyIndex >= history.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={goForward} disabled={historyIndex >= history.length - 1}>Forward</button>
    </nav>
  );
};

// export default NavigationComponent;