import "./globals.css";
import "/dist/output.css";

export const metadata = {
  title: "eBoost - Predictive Maintenance System",
  description: "Predictive Maintenance System Using Machine Learning",
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
