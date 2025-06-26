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
        <section className="container">
          <Header
            name="Yu-Jin Tan"
            image="/Yu-Jin.jpeg"
            // twitter=""
            // linkedin=""
          />
          <main>{children}</main>
          <Footer
            twitter=""
            linkedIn=""
          />
        </section>
      </body>
    </html>

  );
}
