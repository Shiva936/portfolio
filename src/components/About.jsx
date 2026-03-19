export default function About() {
  return (
    <section id="about" className="border-t border-b border-white/5 bg-[#0B1220] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto max-w-sm">
            <img
              src="assets/about-dev.png"
              alt="About section illustration"
              className="h-80 w-full rounded-2xl object-cover shadow-xl shadow-blue-500/10 border border-white/10 transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Background & focus</h2>

            <p className="mt-6 text-base leading-relaxed text-slate-300">
              Backend engineer with deep expertise in Golang, distributed systems, and high-performance backend infrastructure across fintech and cybersecurity domains.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Strong track record of building resilient, observable, and scalable systems designed for real-world production environments. Experience includes architecting idempotent payment systems, designing distributed data pipelines, and optimizing APIs for high-throughput, low-latency workloads.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Demonstrates strong ownership in system design, performance engineering, and reliability optimization across complex, high-stakes platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
