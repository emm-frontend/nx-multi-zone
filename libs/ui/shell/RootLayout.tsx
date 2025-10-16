import React from "react";
import { Header } from "./Header";
import { ChatWidget } from "features/chat";
import { NotificationPanel } from "features/notifications";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      <Header />
      <main>{children}</main>
      <ChatWidget userId="12345" />
      <NotificationPanel />
    </body>
  </html>
);
