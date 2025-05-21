import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

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
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={`${montserrat.className} bg-slate-200 text-slate-950 relative pt-28 sm:pt-36 dark:bg-slate-950 dark:text-slate-50 dark:text-opacity-100`}
      >
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#083B38FF]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#271534FF]"></div>
      <ThemeProvider
          attribute={'class'}
          defaultTheme={'system'}
          enableSystem
          disableTransitionOnChange
      >
          <ActiveSectionContextProvider>
              <Header />
              {children}
          </ActiveSectionContextProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
