import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const projects = [
    {
        client: "Morrow",
        category: "Brand concept",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop",
        position: "lg:col-span-7",
        height: "aspect-[4/3]",
    },
    {
        client: "Field Notes",
        category: "Campaign concept",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
        position: "lg:col-span-5 lg:mt-24",
        height: "aspect-[4/5]",
    },
    {
        client: "Northstar",
        category: "Website concept",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1400&auto=format&fit=crop",
        position: "lg:col-span-7",
        height: "aspect-[16/10]",
    },
];

export default function Work() {
    return (
        <section
            id="work"
            className="relative isolate overflow-hidden scroll-mt-20 bg-background px-6 py-32 sm:px-10 lg:px-16 lg:py-44"
        >
            <div className="relative z-10 mx-auto max-w-7xl">
                <BlurFade
                    inView
                    className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"
                >
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
                            Selected work
                        </p>
                        <h2 className="mt-5 text-5xl font-semibold leading-[0.88] tracking-tight sm:text-7xl">
                            Selected
                            <br />
                            <span className="text-foreground/45">work.</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm leading-6 text-muted-foreground">
                        Brand, campaign, and website work.
                    </p>
                </BlurFade>

                <div className="mt-16 grid gap-x-6 gap-y-16 lg:grid-cols-12 lg:gap-y-24">
                    {projects.map((project, index) => (
                        <BlurFade
                            key={project.client}
                            inView
                            delay={index * 0.12}
                            className={`${project.position} ${index === 2 ? "lg:w-10/12" : ""}`}
                        >
                            <figure className="group">
                                <div className={`relative overflow-hidden bg-secondary ${project.height}`}>
                                    <Image
                                        src={project.image}
                                        alt={`${project.client} ${project.category} project`}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
                                </div>
                                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-foreground/30 pt-4">
                                    <span className="text-2xl font-semibold tracking-tight">
                                        {project.client}
                                    </span>
                                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
                                        {project.category}
                                    </span>
                                </figcaption>
                            </figure>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
