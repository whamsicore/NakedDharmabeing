
//NOTE - All the actions available to our powerful Dharmabeing. 

export type DharmaFunction = {
  name: string;
  application: string;
  note: string;
  inputs: Array<{ name: string; }>;
  code: ()=>any;
  // logs: string;
} 

export const DharmaFunctions:DharmaFunction[] = [
  {
    name: "runIO",
    application: "Allows the Dharmabeing to execute system-level commands, providing a bridge between the user's requests and the system's capabilities.",
    note: "This function is crucial for performing operations that require direct interaction with the host system.",
    inputs: [
      {
        name: "command", // The system command to be executed.
      }
    ],
    code: ()=>{}, // The arguments to be passed to the command, if any.
  },
  {
    name: "pingFrontEnd",
    application: "Verifies the availability and responsiveness of a front-end service by sending it a network request.",
    note: "Useful for health checks and monitoring the status of web services.",
    inputs: [
      {
        name: "url", // The URL of the front-end service to ping.
      }
    ],
    code: ()=>{}, // Maximum time to wait for a response.
  },
  {
    name: "createNewFunction",
    application: "Enables the dynamic expansion of the Dharmabeing's capabilities by allowing the creation of new functions on-the-fly.",
    note: "Empowers users to customize and extend functionality according to their needs.",
    inputs: [
      {
        name: "functionName", // The name for the new function.
      }
    ],
    code: ()=>{}, // The parameters the new function will accept and the code that defines its behavior.
  },
  {
    name: "testAllFunctions",
    application: "Facilitates the validation and verification of all available DharmaFunctions to ensure they are working as expected.",
    note: "Critical for maintaining the reliability and integrity of the system.",
    inputs: [
      {
        name: "testSuite", // A collection of tests to be run against the functions.
      }
    ],
    code: ()=>{}, // The format in which the test results should be reported.
  },
]

