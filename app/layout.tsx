import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
    title: "Renquip - Logística Integrada",
    description: "Locação de equipamentos industriais com segurança, agilidade e confiança.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pt-br">
            <body className={`${poppins.className} antialiased overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}
