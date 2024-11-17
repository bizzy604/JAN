import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AccessibilityProvider } from "@/components/providers/accessibility-provider";
import { AccessibilityMenu } from "@/components/accessibility-menu";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dr. John Ariko Namoit for Governor",
  description: "Building a Better Turkana Together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${poppins.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AccessibilityProvider>
            <a href="#main-content" className="skip-to-main">
              Skip to main content
            </a>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main id="main-content" tabIndex={-1} className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <AccessibilityMenu />
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}