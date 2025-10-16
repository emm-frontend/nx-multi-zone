import React from "react";
import { Header } from "./Header";

interface ZoneLayoutProps {
  children: React.ReactNode;
}

export const ZoneLayout: React.FC<ZoneLayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      <Header />
      <main>{children}</main>
    </body>
  </html>
);
