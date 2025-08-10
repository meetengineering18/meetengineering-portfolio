import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes"; // ✅ Import ThemeProvider
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Meet Engineering | Stainless Steel Hinges & Custom Metal Parts Manufacturer in Gujarat, India",
  description:
    "Meet Engineering manufactures and supplies precision stainless steel hardware parts including hinges, door closers, and custom metal components. Based in Gujarat, India, we offer high-quality, budget-friendly mass production services for industrial clients across India.",
  keywords: [
    "stainless steel hinges manufacturer",
    "custom metal parts manufacturer",
    "hinges manufacturer Gujarat",
    "door closers supplier India",
    "industrial metal parts manufacturer",
    "custom stainless steel parts",
    "precision metal components",
    "mass production stainless parts",
    "metal hardware parts Gujarat",
    "steel part manufacturer India",
    "custom fabrication India",
    "industrial hinges supplier",
    "manufacturing stainless steel parts",
    "metal parts supplier Valsad",
    "door hardware manufacturer Gujarat"
  ],
  authors: [{ name: "Meet Engineering" }],
  robots: "index, follow",
  openGraph: {
    title: "Meet Engineering | Stainless Steel Hinges & Custom Metal Parts Manufacturer in Gujarat, India",
    description:
      "Providing durable and precision-engineered stainless steel hinges, door closers, and custom metal parts for industries across Gujarat and India. Reliable mass production and on-time delivery.",
    type: "website",
    locale: "en_IN",
    siteName: "Meet Engineering",
    url: "https://yourwebsite.com", // Replace with actual URL
    // Optional images:
    // images: [{ url: "https://yourwebsite.com/images/meet-engineering-og.jpg", alt: "Meet Engineering Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Engineering | Stainless Steel Hinges & Custom Metal Parts Manufacturer in Gujarat, India",
    description:
      "Durable, custom stainless steel and metal hardware parts manufactured in Gujarat, India. Serving industrial clients with quality and timely delivery.",
    // image: "https://yourwebsite.com/images/meet-engineering-twitter-card.jpg", // Optional
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"       // ✅ Enables class-based theme switching
          defaultTheme="system"   // ✅ Uses system preference initially
          enableSystem            // ✅ Allows dynamic response to system changes
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
