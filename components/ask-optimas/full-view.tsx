import { motion } from "motion/react";
import animations from "./motion-animations";
import { CircleX, Minimize2, SendHorizonal } from "lucide-react";
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

const ChatItem = ({ item }: { item: IChatItem }) => {
  return <li>{item.message}</li>;
};

export default function FullView({
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

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

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
      className="fixed top-0 left-0 w-screen
     h-screen bg-[#0000002d] z-50 backdrop-blur-xs"
      {...animations.fadeUp}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="fixed bottom-0 left-[50%] translate-x-[-50%] h-[90vh] max-w-[1200px] w-full  faded-gradient rounded-t-lg flex flex-col justify-between">
        {/* HEADER */}
        <div className="p-3 flex justify-between items-center bg-white border-b border-gray-300 rounded-t-lg">
          <h4 className="text-lg">OPTIBOT</h4>
          <div className="flex items-center justify-center gap-4">
            <button
              className="cursor-pointer"
              onClick={() => setViewState("half")}
            >
              <Minimize2 className="text-gray-600 text-xs" width={20} />
            </button>
            <button
              className="cursor-pointer"
              onClick={() => setViewState("full-hidden")}
            >
              <CircleX className="text-gray-600 text-xs" width={20} />
            </button>
          </div>
        </div>

        <div className="grow overflow-y-auto h-full mb-2" ref={chatListRef}>
          <h2 className="text-3xl text-center py-6 font-semibold text-primary">
            How can <span className="text-secondary-yellow">OPTIBOT</span> help?
          </h2>
          <ul className="max-w-[700px] mx-auto mt-4 flex flex-col gap-6 text-gray-600">
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
      </div>
    </motion.div>
  );
}
