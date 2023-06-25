import { Layout } from "@/components/organisms/Layout";
import "./globals.css";
import { Inter } from "next/font/google";
import ParentProvider from "./parentWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nekodigi Service Framework",
  description: "Manage account and subscription for Nekodigi services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ParentProvider>{children}</ParentProvider>
      </body>
    </html>
  );
}
