import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
  pageProps,
}: Readonly<{
  children: React.ReactNode;
  pageProps: { session: Session | null } & Record<string, unknown>;
}>) {
  const { session } = pageProps;

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
