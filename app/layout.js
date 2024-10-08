import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
// Import Swiper styles
import "swiper/css";
import "./globals.css";

const actOfRejection = localFont({
  src: "./fonts/Act_Of_Rejection.ttf",
  variable: "--font-act-of-rejection",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "VTMERCH",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${actOfRejection.variable} antialiased`}
    >
      <body className="font-inter">{children}</body>
    </html>
  );
}
