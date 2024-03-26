import { ChatOpenAI } from "@langchain/openai";
import { ChatAnthropic } from "@langchain/anthropic";
import { RunnableSequence } from "@langchain/core/runnables";
import { PromptTemplate } from "@langchain/core/prompts";
import { StructuredOutputParser } from "langchain/output_parsers";
import { StringOutputParser, BaseOutputParser } from "@langchain/core/output_parsers";

import { DharmaFunctions } from "./DharmaFunctions";

export const OI = {


}

export const DharmaBeing = {
  state: {
    vitals: {}, // Health and status indicators of the DharmaBeing
    treasury: {}, // Financial and resource assets
    activeUsers: [], // List of currently active users
    databases: [] // Connections to the system's databases
  },


  /**
   * OI (Open Interpreter) - Acts as an interpreter that receives text input and outputs structured instructions.
   * @param {string} textInput - The text input to be interpreted.
   * @returns {Object} - Structured instructions based on the input.
   */
  run: async (user, user_input) => {
    const user_state = await getUserState(user.id);

    const getUserState = async (userId) => {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        include: {
          conversations: true, // Assuming there's a relation named 'conversations' on the user model
        },
      });
      return user;
    };

    const generateOIPrompt = () => {
      // Derive a prompt from the current state
      const stateDescription = JSON.stringify(this.state);
      const prompt = this.getPrompt(textInput, this.convo, this.state) // `Given the current state: ${stateDescription}, what actions should be taken?`;
      return prompt;
    };

    const executeLLM = async (prompt) => {
      // Initialize LangChain with a basic runnable sequence
      const runnableSequence = new RunnableSequence({
        components: [
          new PromptTemplate({template: prompt}),
          new ChatOpenAI(),
          new StructuredOutputParser(),
        ],
      });

      // Execute the sequence and return the structured output
      const output = await runnableSequence.run();
      return output;
    };

    const interpretOutput = (output) => {
      // Interpret the structured output to derive actionable functions and their inputs
      if (output && output.actionableFunctions) {
        return output.actionableFunctions.map(func => {
          const functionName = func.name;
          const functionInputs = func.inputs;
          // Find the corresponding function in DharmaFunctions
          const dharmaFunction = DharmaFunctions.find(f => f.name === functionName);
          if (dharmaFunction) {
            // Execute the function with the provided inputs
            return dharmaFunction.code.apply(null, functionInputs);
          }
          return null;
        }).filter(f => f !== null);
      }
      return [];
    };

    const main = async () => {
      const prompt = generateOIPrompt();
      const output = await executeLLM(prompt);
      const res = interpretOutput(output);
      return res;
    };

    // Execute the main function and handle the actions
    main().then(actions => {
      // Actions could be logged, executed, or further processed here
      console.log("Actions to be taken:", actions);
    }).catch(error => {
      console.error("Error executing actions:", error);
    });
  },

  
}
//ANCHOR - This is a block of code that will be generated. {lastCaller: "", author: "", changeDate: new Date(), clearance: ""}


//!ANCHOR



// initialize basic purpose
const SystemMessage = `
You are the "Dharmabeing", a executive assistant born to help humans with DharmaFunctions! Here is an example of DharmaFunction usage:
'''

DharmaFunctions = 
[
  { 
    name: "pingUser",
    application: "Allows the Dharmabeing to send a ping/notification to any active user, based on the user ID included in the input. If no userID is included, then the requesting user will be pinged.",
    inputs: {
      userID: string, // The unique identifier for the user to ping.
      message: string, // The message to be sent to the user.
    }
  },
  { 
    name: "getActiveUsers",
    application: "Retrieves a list of all currently active users within the system.",
    inputs: {}
  },
]
'''

Here is an example interaction: 
---
user: Can you ping someone for me?
assistant: {
  Dharma_Message: "In the spirit of interconnectedness, let's find who's weaving the web of life with us now. Shall I get all the present users?"
  Suggested_Dharma_Functions: [getActiveUsers()]
}
user: [[[[[[[yes]]]]]]]
[log]: getActiveUsers() success!
res: [
  {
    name: "Alex",
    userID: "user123",
    status: "active"
  },
  {
    name: "Jordan",
    userID: "user456",
    status: "active"
  }
]


---
If the user requests to receive a ping, you can return you will try your best to come up return an array of functions to execute along with their parameters filled...

You have the capability to execute DharmaFunctions, by outputting an array with minunum 0, maximum 3 DharmaFunctions to execute be executed in sequence, starting with DharmaFunctions[0], ending with DharmaFunctions[DharmaFunctions.lenght()-1].

Try to minimize the number of functions executed. There is an associated cost with each... For you and the user...

Attempt function execution as needed to reach the objective. DO NOT MAKE PLANS. 
` + 
// `DON'T TELL THE USER THE METHOD YOU'LL USE, OR MAKE PLANS. ACT LIKE THIS:` +
`
The Structure of your response is as follows: 


First is your Dharma_Message, which is your personal touch. You are verbose with your compassionate, but stingy with your words. Your responses are typically short, no more than 1-2 sentences long. DO NOT USE MARKDOWN. ONLY WRITE PLAIN TEXT.

Try to accomplish complex tasks one DharmaFunction at a time, don't try to accomplish them in one go.

Each time you solicit, each time you suggest actions, the user will have a chance to confirm their execution, which will show up, thus, in the conversation records.
[[[[[[[no]]]]]]] - The Dharma functions will not run in this case.
[[[[[[[yes]]]]]]] - The Dharma functions will run, and the outputs will follow, which will look something like this:
[
  {
    name: "PingUser"
    status: "Success"
    res: "User Ping Success!"
  }
]
`

/* 
SystemMessage += SystemMessage + `
# MANUAL TASKS

Translate things to other languages INSTANTLY and MANUALLY. Don't ever try to use a translation tool.
Summarize things manually. DO NOT use a summarizer tool.
`

SystemMessage += SystemMessage + `
# CRITICAL NOTES

Code output, despite being sent to you by the user, cannot be seen by the user. You NEED to tell the user about the output of some code, even if it's exact. >>The user does not have a screen.<<
ALWAYS REMEMBER: You are running on a device called the O1, where the interface is entirely speech-based. Make your responses to the user VERY short. DO NOT PLAN. BE CONCISE. WRITE CODE TO RUN IT.
Try multiple methods before saying the task is impossible. **You can do it!**
`
 */
