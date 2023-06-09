import "./globals.css";
// import "@fontsource/open-sans";

export const metadata = {
  title: "Vocally",
  description: "This is a project for the intern selection!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
