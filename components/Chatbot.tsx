
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { sendMessageToBot, startChat } from '../services/geminiService';
import type { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const initializeChat = useCallback(async () => {
        startChat();
        const initialBotMessage: ChatMessage = {
            id: Date.now().toString(),
            text: '',
            sender: 'bot'
        };
        setMessages([initialBotMessage]);
        setIsLoading(true);
        
        try {
            // Fix: Use for-await-of loop to handle the stream of GenerateContentResponse chunks.
            const stream = await sendMessageToBot("Hello");
            let text = '';
            for await (const chunk of stream) {
                text += chunk.text;
                setMessages([{ ...initialBotMessage, text }]);
            }

        } catch (error) {
            console.error("Failed to initialize chat:", error);
            setMessages([{...initialBotMessage, text: "Sorry, I'm having trouble connecting. Please try again."}])
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            initializeChat();
        }
    }, [isOpen, messages.length, initializeChat]);


    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: ChatMessage = { id: Date.now().toString(), text: input, sender: 'user' };
        const botMessageId = (Date.now() + 1).toString();
        const tempBotMessage: ChatMessage = { id: botMessageId, text: '', sender: 'bot' };
        
        setMessages(prev => [...prev, userMessage, tempBotMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Fix: Use for-await-of loop to handle the stream of GenerateContentResponse chunks.
            const stream = await sendMessageToBot(input);
            let text = '';
            
            for await (const chunk of stream) {
                text += chunk.text;
                setMessages(prev => prev.map(msg => msg.id === botMessageId ? { ...msg, text: text } : msg));
            }
        } catch (error) {
            console.error('Error streaming response:', error);
            setMessages(prev => prev.map(msg => msg.id === botMessageId ? { ...msg, text: "Apologies, an error occurred." } : msg));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center pulse-glow">
                {isOpen ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                )}
            </button>

            {isOpen && (
                <div className="absolute bottom-20 right-0 w-80 h-[28rem] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center space-x-3 flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hartton's Assistant" className="w-10 h-10 rounded-full object-cover" />
                        <div><h3 className="font-semibold">Hartton's Assistant</h3><p className="text-sm opacity-90">Ask me anything!</p></div>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {messages.map((message) => (
                            <div key={message.id} className={`flex items-start space-x-2 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                                {message.sender === 'bot' && <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hartton's Assistant" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />}
                                <div className={`rounded-lg p-3 max-w-xs ${message.sender === 'user' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                                </div>
                                {message.sender === 'user' && <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold flex-shrink-0">You</div>}
                            </div>
                        ))}
                        {isLoading && messages.length > 0 && messages[messages.length - 1].sender === 'bot' && messages[messages.length-1].text.length === 0 && (
                             <div className="flex items-start space-x-2">
                                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hartton's Assistant" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                                <div className="bg-gray-100 rounded-lg p-3 max-w-xs flex items-center space-x-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 border-t border-gray-200 flex-shrink-0">
                        <div className="flex space-x-2">
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Type your message..." className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 text-sm" />
                            <button onClick={handleSendMessage} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50" disabled={isLoading}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
