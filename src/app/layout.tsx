import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "../Functions/Fonts";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export const metadata: Metadata = {
  title: "Dogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={type_second.variable}>
        <div className="App">
          <Header />
          <main className="AppBody">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
