import themeHydration from "./theme-hydration";
import "./index.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script
          id="theme-hydration"
          dangerouslySetInnerHTML={{ __html: themeHydration }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
