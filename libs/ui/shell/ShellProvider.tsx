"use client";
import React, { memo } from "react";
import { ChatWidget } from "features/chat";
import { NotificationPanel } from "features/notifications";

interface ShellProviderProps {
  children: React.ReactNode;
  userId?: string;
}

// Memoized widgets to prevent re-rendering during navigation
const MemoizedChatWidget = memo(ChatWidget);
const MemoizedNotificationPanel = memo(NotificationPanel);

export const ShellProvider: React.FC<ShellProviderProps> = ({ children, userId }) => {
  return (
    <>
      {children}
      <MemoizedChatWidget key="chat-widget" userId={userId} />
      <MemoizedNotificationPanel key="notification-panel" />
    </>
  );
};
