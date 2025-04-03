"use server";

export const getChatResponseFromOpenAI = async (message: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }
    );

    if (!response.ok) throw new Error("Failed to fetch response");

    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error("Error fetching chat response", error);
    return "Sorry, something went wrong";
  }
};
