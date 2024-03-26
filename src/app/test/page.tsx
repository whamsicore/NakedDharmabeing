"use client";
import { getServerSession } from "next-auth";
import { Presentation } from "../components/Presentation";
import { useEffect, useState } from 'react';

export default function Testing() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      // const sessionData = await getServerSession(authOptions);
      // setSession(sessionData);
    };
    fetchSession();
  }, []);

  
  return (
    <pre>{JSON.stringify(session)} </pre>


  )
}



