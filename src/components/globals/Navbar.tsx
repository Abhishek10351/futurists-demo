import Link from "next/link";

const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <header className="w-full fixed bg-surface z-[10]" >
            <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-6 lg:px-12">
                <Link
                    href="/"
                    className="font-display text-xl font-bold tracking-tight"
                >
                    Futurists
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="/contact"
                    className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-accent md:block"
                >
                    Let's Talk
                </Link>
            </div>
        </header>
    );
}
