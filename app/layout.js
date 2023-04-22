import "./globals.css";

export const metadata = {
  title: "Pomodoro Timer",
  description: "Get your productivity on",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
