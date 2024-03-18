"use client";
import { getServerSession } from "next-auth";
import {
  CopilotKit,
} from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { Presentation } from "../components/Presentation";
import { authOptions } from '../api/auth/[...nextauth]/route'
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function Testing() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      // const sessionData = await getServerSession(authOptions);
      // setSession(sessionData);
    };
    fetchSession();
  }, []);

  useEffect(() => {
    const socket = io();

    socket.on('connect', () => {
      console.log('Connected to WebSocket server')


    });

    // Return a function that performs the cleanup
    return () => {
      socket.disconnect();
    };
  }, []);
  
  return (
    <pre>{JSON.stringify(session)} </pre>


  )
}



