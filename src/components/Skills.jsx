import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Skills</h2>
          <p className="text-white/60 text-sm max-w-2xl">Core technologies and tooling used in production systems.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([group, list]) => (
            <div
              key={group}
              className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <h3 className="text-sm font-semibold text-white">{group}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {list.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
