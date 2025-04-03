import { X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import ChatInput from "./chat-input";
import ChatList from "./chat-list";
import { IChatItem } from "./types";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function ChatWindow({ setOpen }: Props) {
  const [chatMaxView, setChatMaxView] = useState(true);
  const [chatList, setChatList] = useState<IChatItem[]>([
    {
      id: "0",
      message:
        "Hello, I am AskOptimas, an AI Assistant from Optimas AI. I can provide insights, guidance and solutions tailored to individual needs. How can I help you today?",
      role: "system",
      createdAt: new Date(),
    },
  ]);

  return (
    <div
      className={
        chatMaxView
          ? "h-[80vh] w-[900px] shadow-lg flex flex-col absolute left-[50%] translate-x-[-50%] bottom-0"
          : "min-h-[600px] w-[400px] h-full shadow-lg flex flex-col"
      }
    >
      <div className="bg-[#11174a] px-2 py-3 flex justify-between items-center text-white">
        <h4 className="text-md font-light">AskOptimas</h4>
        <div className="flex justify-center items-center">
          <button className="cursor-pointer" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>
      </div>
      <ChatList chatList={chatList} />
      <ChatInput setChatList={setChatList} />
    </div>
  );
}
