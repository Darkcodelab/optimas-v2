import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { IChatItem } from "./types";
import ReactMarkdown from "react-markdown";

function UserChatItem({ item }: { item: IChatItem }) {
  return (
    <motion.li
      className="text-right flex flex-col self-end"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-[300px] bg-[#ffbf47] p-2 rounded-sm text-left">
        {item.message}
      </div>
      <div className="text-gray-500 text-xs p-1">
        Sent: {item.createdAt.toLocaleTimeString()}
      </div>
    </motion.li>
  );
}

function SystemChatItem({ item }: { item: IChatItem }) {
  return (
    <motion.li
      className="text-left flex gap-1 items-start self-start"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-2 w-[30px] h-[30px] flex justify-center items-center bg-[#11174a] rounded-full">
        <Image src="/optimas-chat-logo.png" width={20} height={24} alt="" />
      </div>
      <div>
        <div className="max-w-[260px] p-1 rounded-sm">
          <ReactMarkdown>{item.message}</ReactMarkdown>
        </div>
        <div className="text-gray-500 text-xs p-1">
          Sent: {item.createdAt.toLocaleTimeString()}
        </div>
      </div>
    </motion.li>
  );
}

function LoadingChatItem() {
  return (
    <motion.li
      className="text-left flex gap-1 items-start self-start"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-2 w-[30px] h-[30px] flex justify-center items-center bg-[#11174a] rounded-full">
        <Image src="/optimas-chat-logo.png" width={20} height={24} alt="" />
      </div>
      <div>
        <div className="flex flex-col gap-1 animate-pulse space-x-4">
          <div className="w-[250px] h-2 bg-[#11174a63] rounded-full"></div>
          <div className="w-[250px] h-2 bg-[#11174a63] rounded-full"></div>
          <div className="w-[205px] h-2 bg-[#11174a63] rounded-full"></div>
          <div className="w-[230px] h-2 bg-[#11174a63] rounded-full"></div>
          <div className="w-[220px] h-2 bg-[#11174a63] rounded-full"></div>
        </div>
      </div>
    </motion.li>
  );
}

type ChatListProps = {
  chatList: IChatItem[];
};

export default function ChatList({ chatList }: ChatListProps) {
  const chatListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chatList]);

  return (
    <ul
      className="grow px-2 py-4 flex flex-col gap-8 text-gray-700 text-sm overflow-y-scroll h-full"
      ref={chatListRef}
    >
      {chatList.map((chat) => {
        if (chat.role === "system") {
          return <SystemChatItem key={chat.id} item={chat} />;
        } else if (chat.role === "user") {
          return <UserChatItem key={chat.id} item={chat} />;
        } else {
          return <LoadingChatItem key={chat.id} />;
        }
      })}
    </ul>
  );
}
