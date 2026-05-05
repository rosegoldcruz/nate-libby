import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nate Libby | Financial Strategies for Truck Drivers",
  description:
    "Nate Libby helps truck drivers and owner-operators understand how Indexed Universal Life insurance may fit into a smarter long-term financial strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
