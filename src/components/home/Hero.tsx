import Image from "next/image";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <InteractiveGridPattern
                className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
                width={64}
                height={64}
                squares={[24,24]}
                x="50%"
                y={0}
            />

            <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-32 sm:px-10 lg:px-16">
                <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    {/* LEFT */}
                    <div className="flex flex-col items-start">
                        <span className="mb-6 font-caveat text-4xl font-bold text-primary">
                            Futurists®
                        </span>

                        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                            Building
                            <br />
                            things for
                            <br />
                            <span className="text-accent">what&apos;s next.</span>
                        </h1>

                        <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                            We turn unclear ideas into brands, campaigns, and websites people can act on.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-accent"
                            >
                                Let&apos;s Talk
                            </a>

                            <a
                                href="#work"
                                className="rounded-full border border-foreground/40 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-secondary"
                            >
                                View Work
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-foreground">
                            <Image
                                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop"
                                alt="Futurists"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover"
                            />
                            <BorderBeam />
                            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                                <span className="font-mono text-xs uppercase tracking-[0.08em]">Strategy / Creative / Growth</span>
                                <span className="font-caveat text-3xl">make it matter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
