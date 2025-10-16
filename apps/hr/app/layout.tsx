import { RootLayout } from "ui/shell";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
