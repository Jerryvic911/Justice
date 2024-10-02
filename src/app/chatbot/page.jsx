'use client';
import OpenAI from 'openai';
import { useState } from 'react';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function ChatBot() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = async () => {
    if (!userInput.trim()) return; // Prevent sending empty input
    setIsLoading(true);

    setChatHistory((prevChat) => [
      ...prevChat,
      { role: 'user', content: userInput },
    ]);

    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [...chatHistory, { role: 'user', content: userInput }],
        model: 'gpt-3.5-turbo',
      });

      setChatHistory((prevChat) => [
        ...prevChat,
        {
          role: 'assistant',
          content: chatCompletion.choices[0].message.content,
        },
      ]);
    } catch (error) {
      console.error('Error fetching completion:', error);
    } finally {
      setUserInput('');
      setIsLoading(false);
    }
  };

  return (
    <div className='flex min-h-screen flex-col bg-gray-100'>
      <div className='container mx-auto flex-grow px-4 py-6'>
        <h2 className='mb-6 text-center text-3xl font-semibold text-gray-700'>
          ChatBot
        </h2>

        {/* Chat display area */}
        <div className='h-96 overflow-y-auto rounded-lg bg-white p-6 shadow-md'>
          {chatHistory.length === 0 ? (
            <p className='text-center text-gray-500'>
              Start the conversation...
            </p>
          ) : (
            chatHistory.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.role === 'user' ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`${
                    message.role === 'user' ? 'bg-blue-500' : 'bg-green-500'
                  } max-w-xs rounded-lg p-4 text-white shadow-lg md:max-w-md`}
                >
                  {message.content}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input field and send button */}
        <div className='mt-4 flex items-center'>
          <input
            type='text'
            placeholder='Type a message'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className='flex-grow rounded-lg border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none'
          />
          <button
            onClick={handleUserInput}
            className={`ml-4 rounded-lg p-2 px-4 text-white ${
              isLoading
                ? 'cursor-not-allowed bg-gray-500'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
