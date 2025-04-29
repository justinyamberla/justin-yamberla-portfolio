import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justin Yamberla's Portfolio",
  description: "Personal portfolio of Justin Yamberla, who is a Software Engineer.",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} antialiased`}
      >
      <ThemeProvider
          attribute={'class'}
          defaultTheme={'system'}
          enableSystem
          disableTransitionOnChange
      >
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
