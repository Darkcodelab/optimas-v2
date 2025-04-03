import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="container mx-auto py-12 flex justify-center items-center gap-8">
        <Link href="/google" className="p-4 border rounded-sm">
          Google Chatbot
        </Link>
        <Link href="/open-ai" className="p-4 border rounded-sm">
          OpenAI Chatbot
        </Link>
      </div>
    </main>
  );
}
