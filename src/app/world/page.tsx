"use client";

// import {
//   CopilotKit,
// } from "@/vendor/CopilotKit/packages/react-core";
// import { CopilotSidebar } from "@/vendor/CopilotKit/packages/react-ui";
import {
  CopilotKit,
} from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import {AppContext} from "../layout"

import { useState, useContext } from "react";
import { Presentation } from "../components/Presentation";
import Grid from "../components/Grid";
import Grid2 from "../components/Grid2";

export default function Home() {
  const [chatInProgress, setChatInProgress] = useState(false);
  const {app, updateApp} = useContext(AppContext)

  return (
    <div 
      className="bg-white h-full"
      aria-label="Home World">
      <Grid2 />
    </div>
  );
}



