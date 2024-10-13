import Footer from "@/components/footer/Footer";
import "./../styles/globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-body font-body">
        {/* TUTTI I COMPONENTI CHE UTILIZZANO REDUX, USEREDUCER ETC 
        DEVONO ESSERE AVVOLTI DAL PROVIDERS */}
        <Providers>
          <div className="flex min-h-screen flex-col">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
