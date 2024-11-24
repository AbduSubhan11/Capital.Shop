import NavBar from "@/Components/NavBar";
import { CartProvider } from "../../../context/cartContext";
import { WishProvider } from "../../../context/wishlistContext";
import Footer from "@/Components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" type="image/png" />
      <body>
        <CartProvider>
          <WishProvider>
            <NavBar />
            {children}
            <Footer />
          </WishProvider>
        </CartProvider>
      </body>
    </html>
  );
}
