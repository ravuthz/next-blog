/* eslint-disable @next/next/no-head-element */
import "@/styles/globals.css";

import "prismjs/themes/prism-dark.css";
import { NavBar2 } from "../components/NavBar";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "Github",
    href: "https://github.com/ravuthz/nextjs-starter-blog.git",
  },
];

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar2 menus={navigation} />
        <main className="container mx-auto py-4">
          <div className="h-12"></div>
          {children}
          <div className="h-12"></div>
        </main>
      </body>
    </html>
  );
}
