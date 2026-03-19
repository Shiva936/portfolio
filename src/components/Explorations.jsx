import { explorations } from '../data/portfolio'

export default function Explorations() {
  return (
    <section id="explorations" className="scroll-mt-24 border-t border-b border-white/5 bg-[#0B1220] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Explorations</h2>
          <p className="text-white/60 text-sm max-w-2xl">Ongoing studies in scalable systems and operational engineering.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {explorations.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
