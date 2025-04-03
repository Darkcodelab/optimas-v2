import Chatbot from "@/components/chatbot";

export default function Page() {
  return (
    <main>
      <div className="container mx-auto py-8">
        <h1 className="text-center text-5xl">OpenAI Chatbot</h1>
      </div>
      <Chatbot />
    </main>
  );
}
