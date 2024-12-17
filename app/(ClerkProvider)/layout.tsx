import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";

export default function CLerkProviderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  );
}
