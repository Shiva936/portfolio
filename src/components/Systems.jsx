import { systems } from '../data/portfolio'

export default function Systems() {
  return (
    <section id="systems" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Systems Built</h2>
          <p className="text-white/60 text-sm max-w-2xl">A view into architecture decisions and scale challenges.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {systems.map((system) => (
            <div
              key={system.name}
              className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-white">{system.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{system.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
