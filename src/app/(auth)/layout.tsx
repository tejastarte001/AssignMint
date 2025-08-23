import { Logo } from "@/components/icons/logo";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
        <div className="mb-6">
            <Link href="/" className="flex items-center gap-2 text-foreground">
                <Logo className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold font-headline">AssignMint</span>
            </Link>
        </div>
        {children}
    </div>
  );
}
