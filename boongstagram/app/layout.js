import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "Boongstagram",
  description: "Let me introduce Boongranii",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
