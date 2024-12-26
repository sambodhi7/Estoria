import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import NavBar from "@/Components/customNavbar/navbar";
import Footer from "@/Components/Footer/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Estoria",
  description: "Dynamics of Stages and Screens",
  keywords: "Estoria, iiitn, indian istitute of information technology nagpur, iiit, drama club,  ",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      {/* <header>
        <link rel="shortcut icon" href="../../../../../logo2.png" type="image/x-icon" />
      </header> */}
   
      <body className={`${inter.className} relative`}>
        <Providers>
          <NavBar/>
          
        

      
          {children}
          
        </Providers>
      <Footer/>
      </body>
    </html>
  );
}

