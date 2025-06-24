import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
      <body>
        <Header
          name="Yu-Jin Tan"
          image="/aris.png"
          twitter=""
          linkedin=""
        />
        <main>{children}</main>
        <Footer
          twitter=""
          linkedIn=""
        />
      </body>
    </html>

  );
}
