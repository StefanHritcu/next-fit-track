import Header from "@/components/header/Header";
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
        <Header />
        <Providers>{children}</Providers>

        <footer>
          <p>© 2024 My Website</p>
        </footer>
      </body>
    </html>
  );
}
