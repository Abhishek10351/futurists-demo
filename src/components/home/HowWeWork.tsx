"use client";

import { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

function BeamLink({
    containerRef,
    fromRef,
    toRef,
}: {
    containerRef: React.RefObject<HTMLDivElement | null>;
    fromRef: React.RefObject<HTMLDivElement | null>;
    toRef: React.RefObject<HTMLDivElement | null>;
}) {
    return (
        <AnimatedBeam
            containerRef={containerRef}
            fromRef={fromRef}
            toRef={toRef}
            pathColor="#f1f0e9"
            gradientStartColor="#c8f04a"
            gradientStopColor="#ff704f"
            pathOpacity={0.25}
            className="hidden md:block"
            curvature={-20}
            duration={4}
        />
    );
}

const steps = [
    ["01", "Listen"],
    ["02", "Plan"],
    ["03", "Make"],
    ["04", "Improve"],
];

export default function HowWeWork() {
    const containerRef = useRef<HTMLDivElement>(null);
    const firstRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const thirdRef = useRef<HTMLDivElement>(null);
    const fourthRef = useRef<HTMLDivElement>(null);

    return (
        <section
            id="process"
            className="relative scroll-mt-20 overflow-hidden bg-surface px-6 py-32 text-foreground sm:px-10 lg:px-16 lg:py-40"
        >
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="font-mono text-xs uppercase tracking-[0.08em] text-primary">How we work</p>
                    <h2 className="mt-5 text-5xl font-semibold leading-[0.88] tracking-tight sm:text-7xl">
                        Simple from start
                        <br />
                        <span className="text-foreground/50">to finish.</span>
                    </h2>
                </div>

                <div ref={containerRef} className="relative mt-24 grid gap-10 md:grid-cols-4">
                    {steps.map(([number, title], index) => (
                        <div
                            key={number}
                            className="relative z-10"
                        >
                            <div
                                ref={
                                    index === 0
                                        ? firstRef
                                        : index === 1
                                          ? secondRef
                                          : index === 2
                                            ? thirdRef
                                            : fourthRef
                                }
                                className="mb-8 flex size-14 items-center justify-center rounded-full border-2 border-primary bg-surface text-sm text-primary"
                            >
                                {number}
                            </div>
                            <h3 className="text-2xl font-semibold">{title}</h3>
                        </div>
                    ))}

                    <BeamLink containerRef={containerRef} fromRef={firstRef} toRef={secondRef} />
                    <BeamLink containerRef={containerRef} fromRef={secondRef} toRef={thirdRef} />
                    <BeamLink containerRef={containerRef} fromRef={thirdRef} toRef={fourthRef} />
                </div>
            </div>
        </section>
    );
}
