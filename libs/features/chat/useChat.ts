'use client'
import { useState, useEffect } from 'react';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const BOT_RESPONSES = [
  "Thanks for your message! How can I help you today?",
  "I understand. Let me connect you with the right team member.",
  "That's a great question! Let me find that information for you.",
  "I'm here to help! Can you provide more details?",
  "I'll make sure to pass this along to our support team.",
  "Is there anything else I can assist you with?",
  "I appreciate your patience. Let me look into this for you.",
  "That sounds like something our team can help with right away!",
  "I've noted your request and will get back to you shortly.",
  "Let me check our knowledge base for that information.",
  "I can help you with that! What specific details do you need?",
  "That's a common question. Let me provide you with the answer.",
  "I'll escalate this to our technical team for you.",
  "Thanks for reaching out! I'm here to assist you.",
  "I understand your concern. Let me help you resolve this."
];

const KEYWORD_RESPONSES: Record<string, string[]> = {
  'accounting': [
    "I can help you with accounting questions! Are you looking for invoice management, expense tracking, or financial reports?",
    "For accounting support, I can connect you with our finance team. What specific accounting issue can I help with?"
  ],
  'hr': [
    "I can assist with HR-related questions! Are you looking for employee information, payroll, or recruitment?",
    "For HR support, I can help you with employee management, benefits, or hiring processes. What do you need?"
  ],
  'crm': [
    "I can help with CRM and sales questions! Are you looking for lead management, contact information, or deal tracking?",
    "For CRM support, I can assist with customer relationships, sales pipeline, or contact management. How can I help?"
  ],
  'invoice': [
    "I can help with invoice-related questions! You can view and manage invoices in the Accounting section.",
    "For invoice support, check the Invoices page in the Accounting app. I can guide you through the process."
  ],
  'employee': [
    "I can help with employee-related questions! Check the Employees section in the HR app for employee information.",
    "For employee support, visit the HR app's Employee Directory. I can help you find what you need."
  ],
  'lead': [
    "I can help with lead management! Check the Leads section in the CRM app to track your prospects.",
    "For lead support, visit the CRM app's Leads page. I can help you manage your sales pipeline."
  ],
  'help': [
    "I'm here to help! You can navigate between different sections using the menu above. What would you like to know?",
    "I can assist you with Accounting, HR, and CRM features. Just let me know what you need help with!"
  ],
  'support': [
    "I'm your support assistant! I can help you navigate the system and answer questions about our features.",
    "For technical support, I can connect you with our support team. What issue are you experiencing?"
  ]
};

export const useChat = (userId?: string) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    // Check if we're on the client side before accessing localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('chat-messages');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return parsed.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }));
        } catch {
          // If parsing fails, return default message
        }
      }
    }
    return [
      {
        id: '1',
        text: 'Welcome! How can we help you today?',
        sender: 'bot',
        timestamp: new Date()
      }
    ];
  });
  const [isTyping, setIsTyping] = useState(false);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    // Only save to localStorage on the client side
    if (typeof window !== 'undefined') {
      localStorage.setItem('chat-messages', JSON.stringify(messages));
    }
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for keyword matches
    for (const [keyword, responses] of Object.entries(KEYWORD_RESPONSES)) {
      if (lowerMessage.includes(keyword)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    
    // Default random response
    return BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot response with realistic delay
    const delay = 800 + Math.random() * 2000;
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, delay);
  };

  const clearMessages = () => {
    setMessages([
      {
        id: '1',
        text: 'Welcome! How can we help you today?',
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  return {
    messages,
    isTyping,
    sendMessage,
    clearMessages
  };
};
