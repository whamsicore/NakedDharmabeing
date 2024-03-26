"use client"
// import { CopilotKit } from "@/vendor/CopilotKit/packages/react-core";
// import { CopilotSidebar } from "@/vendor/CopilotKit/packages/react-ui";
import { createContext, useState, useEffect } from 'react';


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import "@copilotkit/react-ui/styles.css";
import "@copilotkit/react-textarea/styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
// import "@/vendor/copilotkit/packages/react-textarea/src/styles.css";
// import "@/vendor/copilotkit/packages/react-ui/src/styles.css";
// import "@/vendor/copilotkit/packages/react-textarea/src/styles.css";
const inter = Inter({ subsets: ["latin"] });
import { Navigater } from "./components/core/Navigator"
import { RainbowWrapper } from "./components/core/RainbowWrapper"
import {diff} from "deep-diff"

// export const metadata: Metadata = {
//   title: "The Dharmabot",
//   description: "",
// };
// interface AppContextType {
//   app: { name: string; isActive: boolean } | null;
// }

// ANCHOR - generate the layout based on the endpoint - last: manual
interface App {
  dao?: {
    canvas: string;
  },
  dharmabeing?: {}
} 
// !ANCHOR

interface AppContextType {
  app: App | null;
  updateApp: (newApp: App) => void;
}

export const AppContext = createContext<AppContextType>({
  app: {
    dao:{
      canvas:""
    },
    dharmabeing:{}
  },
  updateApp: () => {}, // Placeholder function
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [app, setApp] = useState<App|null>(null)

  const updateApp = async (newApp: App) => {
    const differences = diff(app, newApp);
    console.log("@deep-diff:", differences)

    setApp(newApp); // Update state locally

    console.log('Debug log: App context updating...');
    try {
      // Send a POST request to update the backend
      const response = await fetch('/setApp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newApp),
      });
      if (!response.ok) {
        throw new Error('Failed to update app context in the backend');
      }
      console.log('App context updated successfully in the backend');
    } catch (error) {
      console.error('Error updating app context:', error);
    }
  }

  useEffect(() => {
    const fetchAppContext = async () => {
      try {
        console.log('Fetching app context...');
        const response = await fetch('/getApp');
        if (response.ok) {
          const data:App = await response.json();
          // console.log('Type:', typeof data);
          console.log('App context fetched successfully, Type:', typeof data);
          
          setApp(data);
        } else {
          throw new Error('Failed to fetch app context');
        }
      } catch (error) {
        console.error('Error fetching app context:', error);
      }
    };

    fetchAppContext();
  }, []);
  // const [chatInProgress, setChatInProgress] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Dharmabot v1</title>
      </head>
      <body className={inter.className}>
        <div className="relative min-h-screen min-w-full">
          <AppContext.Provider value={{app, updateApp}}>
            <RainbowWrapper className="h-screen bg-white text-black">
              {children}  
            </RainbowWrapper>
            <Navigater className="absolute bottom-0 left-0 right-0" />
          </AppContext.Provider>
        </div>
      </body>
    </html>
  );
}