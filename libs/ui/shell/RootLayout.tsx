import React from "react";
import { Header } from "./Header";
import { ShellProvider } from "./ShellProvider";

interface RootLayoutProps {
  children: React.ReactNode;
  userId?: string;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children, userId = "12345" }) => (
  <html lang="en">
    <body>
      <Header />
      <main>{children}</main>
      <ShellProvider userId={userId}>
        <div />
      </ShellProvider>
    </body>
  </html>
);
