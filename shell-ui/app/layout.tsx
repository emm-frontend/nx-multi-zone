import './global.css';
import { Header } from 'ui/shell';
import { ChatWidget } from 'features/chat';
import { NotificationPanel } from 'features/notifications';

export const metadata = {
  title: 'Multi-Zone App - Dashboard',
  description: 'Next.js Multi-Zone Monorepo Dashboard',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Header currentZone="shell" />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <ChatWidget />
        <NotificationPanel />
      </body>
    </html>
  );
}
