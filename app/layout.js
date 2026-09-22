export const metadata = {
  title: "CI/CD Demo",
  description: "Next.js CI/CD practice application"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
