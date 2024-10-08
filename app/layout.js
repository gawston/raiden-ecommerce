import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const lineseed = localFont({
  src: [
    {
      path: './fonts/LINESeedSansTH_W_Th.woff2',
      weight: '100'
    },
    {
      path: './fonts/LINESeedSansTH_W_Rg.woff2',
      weight: '400'
    },
    {
      path: './fonts/LINESeedSansTH_W_Bd.woff2',
      weight: '700'
    }
  ],
  variable: '--font-lineseed'
})

export const metadata = {
  title: "EEiShop",
  description: "จะซื้อก็ซื้อ ไม่ซื้อก็เรื่องของแม่มึง ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lineseed.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
