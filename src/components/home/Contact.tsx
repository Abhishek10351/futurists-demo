import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative isolate scroll-mt-20 overflow-hidden bg-background px-6 py-32 sm:px-10 lg:px-16 lg:py-44"
        >
            <div className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-foreground/20 bg-surface/40 px-6 py-16 sm:px-12 sm:py-24">
                <p className="relative font-mono text-xs uppercase tracking-[0.08em] text-primary">
                    Make something happen
                </p>
                <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                    <h2 className="relative max-w-4xl text-6xl font-semibold leading-[0.84] tracking-tight sm:text-8xl">
                        Bring us the
                        <br />
                        <span className="text-foreground/45">strange idea.</span>
                    </h2>
                    <Link
                        href="#contact"
                        className="relative group flex w-fit items-center gap-4 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent sm:text-base"
                    >
                        Start a conversation
                        <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
