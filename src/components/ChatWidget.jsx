import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const sendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue;
        setInputValue("");

        // Add user message to chat
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", text: userMessage },
        ]);

        // Simulate typing indicator
        setIsTyping(true);

        // Send message to backend
        try {
            const response = await fetch("http://localhost:3001/ask-assistant", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "assistant", text: data.reply },
            ]);
        } catch (error) {
            console.error(error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "assistant", text: "Sorry, something went wrong." },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    // Auto-scroll to the bottom of the chat
    useEffect(() => {
        const chatOutput = document.getElementById("chat-output");
        if (chatOutput) {
            chatOutput.scrollTop = chatOutput.scrollHeight;
        }
    }, [messages]);

    return (
        <div>
            {/* Chat Toggle Button */}
            <button
                onClick={toggleChat}
                className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110"
            >
                💬
            </button>

            {/* Chat Widget */}
            {isOpen && (
                <div className="fixed bottom-20 right-5 w-96 h-[500px] bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col overflow-hidden">
                    {/* Chat Header */}
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                        <span className="font-semibold">Portfolio Assistant</span>
                        <button onClick={toggleChat} className="text-xl hover:text-gray-200">
                            ×
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div
                        id="chat-output"
                        className="flex-1 p-4 overflow-y-auto bg-gray-50"
                    >
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-4 ${
                                    msg.sender === "user" ? "text-right" : "text-left"
                                }`}
                            >
                                <div
                                    className={`inline-block max-w-[80%] px-4 py-2 rounded-lg ${
                                        msg.sender === "user"
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200 text-gray-800"
                                    }`}
                                >
                                    {msg.sender === "assistant" ? (
                                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                                    ) : (
                                        msg.text
                                    )}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="text-left">
                                <span className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">
                                    Typing...
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Chat Input */}
                    <div className="flex border-t border-gray-200 p-3 bg-white">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Ask me about my projects..."
                            className="flex-1 p-2 outline-none border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                        <button
                            onClick={sendMessage}
                            className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;