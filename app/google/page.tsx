import GoogleChatbot from "@/components/google-chatbot";

export default function Page() {
  return (
    <main>
      <div className="container mx-auto py-8">
        <h1 className="text-center text-5xl">Google Chatbot</h1>
      </div>

      <GoogleChatbot />
    </main>
  );
}
