import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Experience</h2>
          <p className="text-white/60 text-sm max-w-2xl">
            Impact-driven delivery in high-stakes, production environments.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{experience.company}</p>
                  <p className="text-sm text-slate-300">{experience.role}</p>
                </div>
                <div className="text-sm font-medium text-indigo-200">
                  {experience.period}
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" />
                    <span>{highlight}</span>
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
