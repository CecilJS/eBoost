import "./globals.css";
import "/dist/output.css";
import { PredictionProvider } from "./context/PredictionContext";

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
      <body>
        <PredictionProvider>{children}</PredictionProvider>
      </body>
    </html>
  );
}
