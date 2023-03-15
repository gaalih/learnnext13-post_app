import "./globals.css";
import Nav from "./auth/Nav";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-roboto",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // className={`bg-slate-700 space-y-20 mx-4 md:mx-48 xl:mx-96 ${roboto.variable}`}
        className={`bg-slate-700 space-y-20 mx-4 md:mx-48 xl:mx-96`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
