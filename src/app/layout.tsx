import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from "next/font/google";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const montserrat = Montserrat({ weight: ["200", "400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Keeper App',
  description: 'App for creating notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
