import '@fontsource-variable/josefin-sans';
import '@fontsource-variable/nunito-sans';
import './globals.css';

export const metadata = {
  title: 'TULA Wellness by The Amala | Seminyak, Bali',
  description:
    'TULA interweaves Western and Eastern health philosophies, strengthening the connection between your physical, mental and emotional health. Day experiences, retreats, classes and treatments at The Amala, Seminyak, Bali.',
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: '#fff9f1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
