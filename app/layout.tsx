import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
    title: "Movitech",
    description: "Somos especialistas em manutenção preventiva, diagnóstico e reparos. Transparência e qualidade em casa serviço.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pt-br">
            {/* Google Tag Manager */}
            <Script id="gtm-script" strategy="afterInteractive">
                {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5NNL4PR2');
        `}
            </Script>
            {/* End Google Tag Manager */}

            <body className={`${poppins.className} antialiased overflow-x-hidden`}>

                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-5NNL4PR2"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}

                {children}
            </body>
        </html>
    );
}
