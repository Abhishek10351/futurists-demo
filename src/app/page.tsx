import {
    Contact,
    Hero,
    HowWeWork,
    Services,
    Work,
} from "@/components/home";
export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Services />
            <Work />
            <HowWeWork />
            <Contact />
        </main>
    );
}
