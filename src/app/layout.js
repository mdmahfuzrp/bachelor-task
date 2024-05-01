import { Inter } from "next/font/google";
import "../globals.css";
import "../animation.css";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bachelors Task: Manage Your Project",
  description: "Manage your complex project with this free task",
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
