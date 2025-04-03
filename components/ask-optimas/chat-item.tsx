import { motion } from "motion/react";
import { IChatItem } from "./types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export function UserChatItem({ item }: { item: IChatItem }) {
  return (
    <motion.li
      className="text-right flex flex-col self-end"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-[300px] bg-[#ffbf47] p-2 rounded-sm text-left text-sm">
        {item.message}
      </div>
      <div className="text-gray-500 text-xs p-1">
        Sent: {item.createdAt.toLocaleTimeString()}
      </div>
    </motion.li>
  );
}

export function SystemChatItem({ item }: { item: IChatItem }) {
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
      <div className="grow w-[90%]">
        <div className="p-1 rounded-sm text-sm">
          <ReactMarkdown>{item.message}</ReactMarkdown>
        </div>
        <div className="text-gray-500 text-xs p-1">
          Sent: {item.createdAt.toLocaleTimeString()}
        </div>
      </div>
    </motion.li>
  );
}

export function LoadingChatItem() {
  return (
    <motion.li
      className="text-left flex gap-1 items-start self-start w-full"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-2 w-[30px] h-[30px] flex justify-center items-center bg-[#11174a] rounded-full">
        <Image src="/optimas-chat-logo.png" width={20} height={24} alt="" />
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-1 animate-pulse space-x-4">
          <div className="max-w-[580px] w-full h-2.5 bg-[#11174a63] rounded-full"></div>
          <div className="max-w-[550px] w-full h-2.5 bg-[#11174a63] rounded-full"></div>
          <div className="max-w-[505px] w-full h-2.5 bg-[#11174a63] rounded-full"></div>
          <div className="max-w-[530px] w-full h-2.5 bg-[#11174a63] rounded-full"></div>
          <div className="max-w-[520px] w-full h-2.5 bg-[#11174a63] rounded-full"></div>
        </div>
      </div>
    </motion.li>
  );
}
