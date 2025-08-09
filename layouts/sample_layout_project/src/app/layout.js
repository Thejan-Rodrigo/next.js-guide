import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Layout App",
  description: "Learn Layouts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="wrapper">
          <div>
            <h1 className="raw">
              Globle Header
            </h1>
          </div>
          {children}
          <div>
            <h1 className="raw">
              Globle footer
            </h1>
          </div>
        </div>
      </body>
    </html>
  );
}
