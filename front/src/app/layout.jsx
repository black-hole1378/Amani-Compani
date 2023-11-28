import { RootLayout } from "./my_layout";

export const metadata = {
  title: {
    default: "Amani Brothers Company",
    template: "%s",
  },
  description: "Amani Brothers Company exports and imports goods in China",
  keywords: ["Imports", "Exports", "Exporting goods", "Amani Brothers Company"],
  icons: [
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon.png" },
  ],
};

export default function Layout({ children }) {
  return <RootLayout children={children} />;
}
