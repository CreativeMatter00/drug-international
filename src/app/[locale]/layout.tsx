import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
  title: "Drug International Ltd",
  description:
    "Drug International Limited was incorporated under the Registrar of Joint Stock Companies in 1974 as a Private Limited Company. The company commenced formulation and production in 1983 and emerged as a pioneer in Bangladesh for adding a state of the art oral solid dosage plant. Since inception, Drug International Limited's primary objective has been to meet guidelines provided by major global regulatory bodies such as the World Health Organization Good Manufacturing Practices (WHO cGMP) guidelines.",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className="max-w-screen overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
