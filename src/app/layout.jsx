import "./globals.css";

export const metadata = {
  title: "Marketiq",
  description: "Marketiq",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
