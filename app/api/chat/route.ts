import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAI } from "openai";
import { ChatCompletionMessageParam } from "openai/resources";

// Initialize clients
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });

// Function to generate embeddings
async function getEmbedding(text: string) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: text,
  });
  return response.data[0].embedding;
}

// Function to search Pinecone
async function searchFAQ(userInput: string) {
  const index = pinecone.index("optimas-faq");
  const queryVector = await getEmbedding(userInput);

  const queryResponse = await index.query({
    vector: queryVector,
    topK: 1,
    includeMetadata: true,
  });

  if (queryResponse.matches.length > 0) {
    return queryResponse.matches?.[0]?.metadata?.answer as string;
  }
  return "";
}

// API route
export async function POST(req: Request) {
  const { message } = await req.json();
  const faqAnswer: string = await searchFAQ(message);

  const chatMessages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "You are an AI chatbot providing OptimasAI FAQs and support. Don't answer anything irrelevant to Optimas AI Company",
    },
    { role: "user", content: message },
  ];

  if (faqAnswer) {
    console.log(faqAnswer);
    chatMessages.push({ role: "assistant", content: faqAnswer });
  }

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: chatMessages,
  });

  return NextResponse.json({ reply: response.choices[0].message.content });
}
