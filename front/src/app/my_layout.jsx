"use client";
import Header from "@/component/Header/Header";
import "../style/globals.css";
import Footer from "@/component/footer/Footer";
import global_en from "../translation/english/global.json";
import global_pe from "../translation/persian/global.json";
import global_ch from "../translation/chinese/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Providers from "@/store/Provider";
import urls from "../url/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "English",
  resources: {
    English: {
      global: global_en,
    },
    Persian: {
      global: global_pe,
    },
    Chinese: {
      global: global_ch,
    },
  },
});

export const client = new ApolloClient({
  uri: urls.url.uri,
  cache: new InMemoryCache(),
});

export function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <I18nextProvider i18n={i18next}>
          <Providers>
            <ApolloProvider client={client}>
              <Header />
              {children}
              <Footer />
            </ApolloProvider>
          </Providers>
        </I18nextProvider>
      </body>
    </html>
  );
}
