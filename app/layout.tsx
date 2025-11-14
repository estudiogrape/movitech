import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
    title: "Movitech",
    description: "Somos especialistas em manutenção preventiva, diagnóstico e reparos. Transparência e qualidade em casa serviço.",
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
