"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ChatWindow from "./chat-window";
import Image from "next/image";

export default function Chatbot() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <aside className="absolute bottom-10 right-10 p-2">
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="button"
            className="rounded-full px-6 py-4 cursor-pointer z-20 flex gap-2 shadow-lg rounded-br-none border border-gray-100 "
            onClick={() => setOpen(true)}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Image src="/optimas-chat-logo.png" alt="" width={20} height={20} />
            AskOptimas
          </motion.button>
        ) : (
          <motion.div
            key="chat-window"
            className="w-full z-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChatWindow setOpen={setOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
