"use client";
import OpenAI from "openai";
import Navbar from "../components/Navbar";
import { useState } from "react";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function ChatBot() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = async () => {
    if (!userInput.trim()) return; // Prevent sending empty input
    setIsLoading(true);

    setChatHistory((prevChat) => [
      ...prevChat,
      { role: "user", content: userInput },
    ]);

    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [...chatHistory, { role: "user", content: userInput }],
        model: "gpt-3.5-turbo",
      });

      setChatHistory((prevChat) => [
        ...prevChat,
        { role: "assistant", content: chatCompletion.choices[0].message.content },
      ]);
    } catch (error) {
      console.error("Error fetching completion:", error);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-6">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          ChatBot
        </h2>

        {/* Chat display area */}
        <div className="bg-white shadow-md rounded-lg p-6 h-96 overflow-y-auto">
          {chatHistory.length === 0 ? (
            <p className="text-gray-500 text-center">Start the conversation...</p>
          ) : (
            chatHistory.map((message, index) => (
              <div
                key={index}
                className={`flex mb-4 ${
                  message.role === "user" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`${
                    message.role === "user" ? "bg-blue-500" : "bg-green-500"
                  } text-white p-4 rounded-lg max-w-xs md:max-w-md shadow-lg`}
                >
                  {message.content}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input field and send button */}
        <div className="mt-4 flex items-center">
          <input
            type="text"
            placeholder="Type a message"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-grow border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleUserInput}
            className={`ml-4 p-2 px-4 rounded-lg text-white ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
