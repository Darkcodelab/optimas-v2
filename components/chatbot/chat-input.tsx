import { Dispatch, SetStateAction, useState } from "react";
import { Send } from "lucide-react";
import { IChatItem } from "./types";
import { getChatResponseFromOpenAI } from "@/actions";

type Props = {
  setChatList: Dispatch<SetStateAction<IChatItem[]>>;
};

export default function ChatInput({ setChatList }: Props) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim() || loading) {
      // setQuery("");
      return;
    } else {
      const newItem: IChatItem = {
        id: crypto.randomUUID(),
        message: query,
        createdAt: new Date(),
        role: "user",
      };

      const loadingItem: IChatItem = {
        id: crypto.randomUUID(),
        message: "",
        createdAt: new Date(),
        role: "loading",
      };

      setLoading(true);
      setChatList((prev) => [...prev, newItem, loadingItem]);
      setQuery("");
      const AIResponse = await getChatResponseFromOpenAI(query);
      console.log(AIResponse);
      setChatList((prev) => [
        ...prev.slice(0, -1),
        {
          id: crypto.randomUUID(),
          message: AIResponse,
          createdAt: new Date(),
          role: "system",
        },
      ]);
      setLoading(false);
    }
  };

  return (
    <form
      className="m-2 border border-gray-300 p-2 flex items-center justify-center"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        name="chat-input"
        className="w-full focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="cursor-pointer">
        <Send />
      </button>
    </form>
  );
}
