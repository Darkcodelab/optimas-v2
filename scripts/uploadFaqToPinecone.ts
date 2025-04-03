import fs from "fs";
import csvParser from "csv-parser";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

async function getEmbedding(text: string) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: text,
  });

  return response.data[0].embedding;
}

interface IFAQ {
  Question: string;
  Answer: string;
  Category: string;
  Keywords: string;
  Source: string;
  id: string;
}

async function uploadFaqToPinecone() {
  const index = pinecone.index("optimas-faq");
  const faqData: IFAQ[] = [];

  fs.createReadStream("./optimas-faq2.csv")
    .pipe(csvParser())
    .on("data", (row) => {
      faqData.push(row);
    })
    .on("end", async () => {
      console.log(`Processing: ${faqData.length} FAQs...`);

      for (const item of faqData) {
        const vector = await getEmbedding(item.Question);
        await index.upsert([
          {
            id: item.id,
            values: vector,
            metadata: {
              answer: item.Answer || "",
              category: item.Category || "",
              keywords: item.Keywords || "",
              source: item.Source || "",
            },
          },
        ]);
      }

      console.log("FAQ data uploaded to Pinecone!");
    });
}

uploadFaqToPinecone();
