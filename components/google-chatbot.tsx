"use client";

import { useEffect } from "react";

// declare module "react" {
//   namespace JSX {
//     interface IntrinsicElements {
//       ["df-messenger"]: React.DetailedHTMLProps<
//         React.HTMLAttributes<HTMLElement>,
//         HTMLElement
//       >;
//       ["df-messenger-chat-bubble"]: React.DetailedHTMLProps<
//         React.HTMLAttributes<HTMLElement>,
//         HTMLElement
//       >;
//     }
//   }
// }

export default function GoogleChatbot() {
  useEffect(() => {
    // Load Dialogflow CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css";
    document.head.appendChild(link);

    // Load Dialogflow Script
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <df-messenger
        project-id="utopian-sky-455103-p4"
        agent-id="83f21764-965d-4865-b5c2-bf9633487968"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="Optimas"></df-messenger-chat-bubble>
      </df-messenger>

      <style>{`
        df-messenger {
          z-index: 999;
          position: fixed;
          --df-messenger-font-color: #000;
          --df-messenger-font-family: Google Sans;
          --df-messenger-chat-background: #f3f6fc;
          --df-messenger-message-user-background: #d3e3fd;
          --df-messenger-message-bot-background: #fff;
          bottom: 16px;
          right: 16px;
        }
      `}</style>
    </div>
  );
}
