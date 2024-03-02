import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreProvider from "./StoreProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Food Express - Order Delicious Meals for Delivery",
  // template: "%s | Food Express - Order Delicious Meals for Delivery",
  description:
    "Order delicious meals from your favorite restaurants and have them delivered right to your doorstep with Food Express. Enjoy a wide variety of cuisines, quick delivery, and hassle-free online payments. Start exploring our menu now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} relative`}>
        <ClerkProvider>
          <StoreProvider>
            <Navbar />
            <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </StoreProvider>
        </ClerkProvider>
        <Toaster richColors={true} />
      </body>
    </html>
  );
}
