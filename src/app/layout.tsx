import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RibasBotWidget } from "@/components/RibasBotWidget";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a2540",
};

export const metadata: Metadata = {
  title: "Alcaldía de José Félix Ribas | La Victoria, Estado Aragua",
  description: "Portal Oficial del Municipio José Félix Ribas. Trámites en línea, oficina virtual, gacetas municipales, rutas de aseo y atención comunitaria Ribas Resuelve.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-watermark-la-victoria text-slate-900"
      >
        <AuthProvider>
          <TopBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <RibasBotWidget />
        </AuthProvider>
      </body>
    </html>
  );
}
