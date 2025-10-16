import './global.css';

export const metadata = {
  title: 'Multi-Zone App - CRM',
  description: 'Next.js Multi-Zone Monorepo CRM Zone',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
