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





/*!SECTION

try {
  // const langChain = new ChatOpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const llm = new ChatOpenAI({ temperature: 0.9 });
  const model = llm.withListeners({
    onStart: (input) => {
      // console.log("@LLM start input:", input)
    },
  })

  // const model = new ChatOpenAI({apiKey: process.env.OPENAI_API_KEY});


  const structured_parser = StructuredOutputParser.fromZodSchema(
    z.object({
      answer: z.string().describe("answer to the user's question"),
      sources: z
        .array(z.string())
        .describe("sources used to answer the question, should be websites."),
    })
  )

  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      "Answer the users question as best as possible.\n{format_instructions}\n{question}"
    ),
    (input) => {
      console.log("@model input:", input)
      return model.bind(input)
    },
    structured_parser,
    // (input)=> {
    //   console.log("test input:", input)
    //   return new PromptTemplate.fromTemplate(`Give me more informationi based on {answer} and {source}`)
    // },
    (input) => {
      console.log("@testing langchain middleware, input:", input)
      return {
        answer: input.answer,
        sources: input.sources,
      }
    },
    PromptTemplate.fromTemplate(`Give me more information based on {answer} and {source}`),
    model,
    new StringOutputParser()
    // }
    // PromptTemplate.fromTemplate(
    //   "Given the answer: \n{answer}, and sentiment: \n{sentiment} \n{format_instructions}\n{question}"
    // ),
  ]);

  // console.log(structured_parser.getFormatInstructions());

  const response = await chain.invoke({
    question: "What is the capital of France?",
    format_instructions: structured_parser.getFormatInstructions(),
  });

  // const promptTemplate = "Please summarize the following text: {{text}}";
  // const promptTemplate = PromptTemplate.fromTemplate("Tell me a joke about {topic}");
  // const requestText = req.body.text || "Dharmaverse sci-fi is about enlightened technology in a world of AI gods."; // Assuming the text to process is under the 'text' key in the request body


  // const chain = promptTemplate.pipe(model);

  console.log(response);
  // const response = await langChain.chat({
  //   promptTemplate,
  //   variables: { text: requestText },
  // });
  res.json({ response });
} catch (err) {
  console.error(err);
  res.status(500).send('Internal Server Error');
}
*/