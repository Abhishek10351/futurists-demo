import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-foreground/20 px-6 py-6 sm:px-10 lg:px-16">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                <Link href="/" className="font-display text-sm text-foreground">
                    Futurists<span className="text-primary">.</span>
                </Link>
                <p>Strategy, campaigns, and websites.</p>
                <p>© 2026 Futurists</p>
            </div>
        </footer>
    );
}
