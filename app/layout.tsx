import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rosaebrew.com"),
  title: "RosaeBrew — Digital homes for good cafés",
  description:
    "Websites, menus, digital identity and social content for independent cafés with a point of view. Based in Jaipur, working everywhere.",
  keywords: ["café website", "digital studio", "Jaipur", "independent café", "branding"],
  openGraph: {
    title: "RosaeBrew — Digital homes for good cafés",
    description: "Websites, menus, digital identity and social content for independent cafés with a point of view.",
    url: "https://rosaebrew.com",
    siteName: "RosaeBrew",
    type: "website",
  },
  icons: {
    icon: "/rosaebrew-logo.png",
    shortcut: "/rosaebrew-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('rosaebrew-theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
