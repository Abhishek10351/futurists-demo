import Link from "next/link";

const navItems = [
    { label: "Studio", href: "#process" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
];

export default function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/85 backdrop-blur-md">
            <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-6 lg:px-12">
                <Link
                    href="/"
                    className="font-display text-xl font-bold tracking-tight transition-colors hover:text-primary"
                >
                    Futurists<span className="text-primary">.</span>
                </Link>

                <nav className="flex items-center gap-5 sm:gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-xs text-muted-foreground transition-colors duration-300 hover:text-primary sm:text-sm"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="#contact"
                    className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors duration-300 hover:bg-accent sm:px-5 sm:py-2.5 sm:text-sm"
                >
                    Let&apos;s Talk
                </Link>
            </div>
        </header>
    );
}
