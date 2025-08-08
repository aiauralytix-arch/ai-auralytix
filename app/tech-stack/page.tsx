import TechStackCarousel from "./techstack-carousel";

export default function TechStackPage() {
    return (
        <main className=" w-full bg-white dark:bg-neutral-950">
            <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
                <header className="mb-10 text-center">
                    <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                        Technologies We Use
                    </h1>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        Explore the high-performance technologies and tools that power Auralytix AI solutions
                    </p>
                </header>

                <div className="relative">
                    <TechStackCarousel durationSeconds={26} height={48} pauseOnHover direction="left" />
                </div>

                <div className="mt-12">
                    <TechStackCarousel
                        durationSeconds={32}
                        height={40}
                        direction="right"
                        className="mt-6"
                    />
                </div>
            </section>
        </main>
    )
}
