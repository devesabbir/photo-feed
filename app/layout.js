import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Photo Feed App",
  description: "Created by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <body className={poppins.className}>
        <Navbar />
        <main className="container my-4 lg:my-8">{children}</main>
      </body>
    </html>
  );
}
