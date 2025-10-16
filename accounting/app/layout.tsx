import './global.css';

export const metadata = {
  title: 'Multi-Zone App - Accounting',
  description: 'Next.js Multi-Zone Monorepo Accounting Zone',
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
