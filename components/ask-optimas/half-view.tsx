import { motion } from "motion/react";
import animations from "./motion-animations";
import { CircleX, Maximize2, SendHorizonal } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IChatItem, IViewState } from "./types";
import { LoadingChatItem, SystemChatItem, UserChatItem } from "./chat-item";
import { getChatResponseFromOpenAI } from "@/actions";

type Props = {
  setViewState: Dispatch<SetStateAction<IViewState>>;
  setChatList: Dispatch<SetStateAction<IChatItem[]>>;
  chatList: IChatItem[];
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export default function HalfView({
  setViewState,
  chatList,
  setChatList,
  loading,
  setLoading,
}: Props) {
  const chatListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatListRef.current) {
      //   chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
      chatListRef.current.scrollTo({
        top: chatListRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatList]);

  const [query, setQuery] = useState("");

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
    <motion.div
      className="fixed bottom-0 right-0 lg:right-5 h-[70vh] max-w-[400px] w-full rounded-t-lg flex flex-col justify-between z-50 bg-primary"
      {...animations.fadeUp}
    >
      {/* HEADER */}
      <div className="p-3 flex justify-between items-center bg-white border-b border-gray-300 rounded-t-lg">
        <h4 className="text-md">OPTIBOT</h4>
        <div className="flex items-center justify-center gap-4">
          <button
            className="cursor-pointer"
            onClick={() => setViewState("full")}
          >
            <Maximize2 className="text-gray-600" width={18} />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => setViewState("half-hidden")}
          >
            <CircleX className="text-gray-600" width={18} />
          </button>
        </div>
      </div>

      <div
        className="grow overflow-y-auto h-full mb-2 px-3 text-white"
        ref={chatListRef}
      >
        <h2 className="text-xs lg:text-sm text-center py-4 font-semibold text-primary">
          How can <span className="text-secondary-yellow">OPTIBOT</span> help?
        </h2>
        <ul className="max-w-[700px] mx-auto mt-4 flex flex-col gap-6">
          {chatList.map((item) => {
            if (item.role === "system") {
              return <SystemChatItem item={item} key={item.id} />;
            } else if (item.role === "user") {
              return <UserChatItem item={item} key={item.id} />;
            } else if (item.role === "loading") {
              return <LoadingChatItem key={item.id} />;
            }
          })}
        </ul>
      </div>

      {/* INPUT */}
      <div className="p-4 bg-white shadow-lg max-w-[700px] w-full mx-auto rounded-t-lg">
        <form
          className="border border-gray-500 p-3 flex gap-2 rounded-lg"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            className="grow w-full text-sm focus:outline-none"
            placeholder="Message OPTIBOT"
            autoFocus={true}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="cursor-pointer">
            <SendHorizonal className="text-gray-500" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}
