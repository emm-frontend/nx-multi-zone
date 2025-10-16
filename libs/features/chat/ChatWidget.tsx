"use client";
import React from "react";

export interface ChatWidgetProps {
  userId?: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ userId }) => (
  <div className="chat-widget fixed bottom-4 right-4 p-4 bg-white rounded-2xl shadow-md">
    <h3 className="font-semibold">Chat</h3>
    <p className="text-sm text-gray-600">
      {userId ? `Connected as ${userId}` : "Not logged in"}
    </p>
  </div>
);
