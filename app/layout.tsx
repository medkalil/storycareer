import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Story Carrer",
  description: "StoryCarrer is a unique plateform where undividual from all walks of like can share there storirs, challenges and sucesses.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: "/favicon-black.svg",
        href: "/favicon-black.svg"
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: "/favicon-white.svg",
        href: "/favicon-white.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
