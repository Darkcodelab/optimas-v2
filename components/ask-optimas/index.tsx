"use client";

import { useState } from "react";
import { IChatItem, IViewState } from "./types";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { CircleX, SendHorizonal } from "lucide-react";
import animations from "./motion-animations";
import FullView from "./full-view";
import HalfView from "./half-view";

export default function AskOptimas() {
  const [viewState, setViewState] = useState<IViewState>("full-hidden");
  const [chatList, setChatList] = useState<IChatItem[]>([
    {
      id: "0",
      message:
        "Hello, I am OPTIBOT, an AI Assistant from Optimas AI. I can provide insights, guidance and solutions tailored to individual needs. How can I help you today?",
      role: "system",
      createdAt: new Date(),
    },
  ]);
  const [loading, setLoading] = useState(false);

  const FullHiddenView = () => (
    <motion.aside
      className="fixed bottom-0 w-full  max-w-[700px] left-[50%] translate-x-[-50%] flex flex-col"
      {...animations.fadeUp}
    >
      <button
        className="mb-1.5 self-end cursor-pointer"
        onClick={() => setViewState("half-hidden")}
      >
        <CircleX className="bg-gray-200 rounded-full p-1 text-sm text-gray-500" />
      </button>
      <div
        className="flex flex-col primary-gradient p-4 rounded-t-lg w-full cursor-pointer"
        onClick={() => setViewState("full")}
      >
        <div className="bg-white rounded-lg p-3 flex justify-between items-center gap-2">
          <Image src="/optimas-chat-logo.png" alt="" width={20} height={20} />
          <p className="grow text-sm text-gray-500">
            Ask me about solutions, industries, use cases, or connect to a
            specialist.
          </p>
          <SendHorizonal className="text-gray-500" />
        </div>
      </div>
    </motion.aside>
  );

  const HalfHiddenView = () => (
    <motion.aside
      className="fixed bottom-10 right-10 w-full max-w-[200px] p-2 py-4 rounded-t-full rounded-bl-full primary-gradient cursor-pointer"
      {...animations.fadeUp}
      onClick={() => setViewState("half")}
    >
      <div className="text-white rounded-lg flex justify-center items-center gap-3">
        <Image src="/optimas-chat-logo.png" alt="" width={20} height={20} />
        <p className="text-lg">Ask OPTIBOT</p>
      </div>
    </motion.aside>
  );

  return (
    <AnimatePresence mode="wait">
      {viewState === "full-hidden" && <FullHiddenView key="full-hidden" />}
      {viewState === "half-hidden" && <HalfHiddenView key="half-hidden" />}
      {viewState === "full" && (
        <FullView
          key="full"
          setViewState={setViewState}
          setChatList={setChatList}
          chatList={chatList}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      {viewState === "half" && (
        <HalfView
          key="half"
          setViewState={setViewState}
          setChatList={setChatList}
          chatList={chatList}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </AnimatePresence>
  );
}
