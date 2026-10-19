import { BlurFade } from "@/components/ui/blur-fade";

const services = [
    {
        number: "01",
        title: "Strategy",
        description: "Positioning, research, and the decisions behind the work.",
    },
    {
        number: "02",
        title: "Campaigns",
        description: "Launch ideas, content systems, and creative that travels.",
    },
    {
        number: "03",
        title: "Websites",
        description: "Clear, fast websites built to make the next step obvious.",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative isolate scroll-mt-20 overflow-hidden bg-surface px-6 py-32 sm:px-10 lg:px-16 lg:py-44"
        >
            <div className="relative z-10 mx-auto max-w-7xl">
                <BlurFade inView className="flex flex-col gap-8 border-b border-foreground/30 pb-10 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.08em] text-primary">
                            What we do
                        </p>
                        <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-tight sm:text-7xl">
                            Strategy, creative,
                            <br />
                            <span className="text-foreground/45">and growth.</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm leading-6 text-muted-foreground">
                        We turn unclear ideas into work people can act on.
                    </p>
                </BlurFade>

                <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-0">
                    {services.map((service, index) => (
                        <BlurFade
                            key={service.number}
                            inView
                            delay={index * 0.12}
                            className={`min-h-56 border-foreground/30 p-1 sm:p-8 ${
                                index > 0 ? "border-t sm:border-l sm:border-t-0" : ""
                            }`}
                        >
                            <article
                                className="min-h-56"
                            >
                                <p className="font-mono text-xs uppercase tracking-[0.08em] text-primary">
                                    {service.number}
                                </p>
                                <h3 className="mt-16 text-3xl font-semibold tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
                                    {service.description}
                                </p>
                            </article>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
