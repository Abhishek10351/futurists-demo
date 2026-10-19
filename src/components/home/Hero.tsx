import Image from "next/image";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <InteractiveGridPattern
                className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
                width={64}
                height={64}
                squares={[24,24]}
                x="50%,"
                y={0}
            />

            <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-32 sm:px-10 lg:px-16">
                <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    {/* LEFT */}
                    <div className="flex flex-col items-start">
                        <span className="mb-6 font-caveat text-4xl font-bold text-accent">
                            Futurists
                        </span>

                        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                            Building
                            <br />
                            things for
                            <br />
                            <span className="text-accent">what's next.</span>
                        </h1>

                        <p className="mt-8 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
                            We design and build digital products, websites and
                            software for businesses ready to move forward.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="/contact"
                                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-accent"
                            >
                                Let's Talk
                            </a>

                            <a
                                href="/work"
                                className="rounded-full border px-6 py-3 text-sm font-medium transition-all hover:bg-muted"
                            >
                                View Work
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop"
                                alt="Futurists"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
