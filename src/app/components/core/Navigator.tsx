'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../UI';


interface NavigatorProps {
  // children: React.ReactNode;
  className?: string;
}

// export const RainbowWrapper: React.FC<RainbowWrapperProps> = ({ children, className }) => {

export const Navigater: React.FC<NavigatorProps> = ({className}) => {
  
  const router = useRouter();
  // console.log(`Class Name: ${className}`);
  // Assuming paths are dynamically determined or fetched from some source
  const [paths, setPaths] = useState(["/dashboard", "/users", "/settings"]);
  const [history, setHistory] = useState<string[]>([]);
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

  const handleLogout = async () => {
    try {
      const response = await fetch('/logout', {
        method: 'POST',
        credentials: 'include', // Necessary to include the session cookie
      });
      if (response.ok) {
        console.log('Logged out successfully');
        router.push('/portal/login'); // Redirect to login page after successful logout
      } else {
        console.error('Failed to logout');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav 
      // className={" from-gray-500/500 to-gray-700/500 p-4 flex justify-between items-center "+className}
      className='bg-gradient-to-r from-slate-900/90 to-slate-800/90 p-6 flex  justify-end items-center absolute bottom-0 left-0 w-full'
      aria-label="Navigator"
    >

      {/* <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goToRandomPage}>Go to a Random Page</Button>
      <div>
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${historyIndex <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={goBack} disabled={historyIndex <= 0}>Back</button>
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${historyIndex >= history.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={goForward} disabled={historyIndex >= history.length - 1}>Forward</button>
      </div> */}
      <Button className="bg-red-500 hover:bg-red-700 " onClick={handleLogout}>Logout</Button>
    </nav>
  );
};

