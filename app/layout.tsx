import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fandi Ahmad Zulfikar | Portofolio",
  description:
    "Saya mahasiswa Teknik Informatika di Politeknik Negeri Malang yang memiliki ketertarikan dalam pengembangan web dan teknologi. Saya senang mempelajari hal baru, mengembangkan keterampilan pemrograman, serta membangun solusi digital yang bermanfaat. Saya terus berusaha mengembangkan diri melalui proyek, pengalaman, dan kolaborasi.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
