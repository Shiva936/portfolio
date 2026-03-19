import { projects } from '../data/portfolio'

function TechBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-200">
      {label}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-b border-white/5 bg-[#0B1220] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Projects</h2>
          <p className="text-white/60 text-sm max-w-2xl">Engineering depth, not marketing copy.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30"
            >
              <div className="flex flex-col gap-5 p-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="text-sm text-slate-300">{project.tagline}</p>
                </div>

                {project.screenshot ? (
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-400/10" />
                    <div className="relative aspect-video bg-slate-900/80 p-4">
                      <img
                        src={project.screenshot}
                        alt={`${project.name} screenshot`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ) : null}

                <div className="space-y-3">
                  <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-slate-100">Key challenges solved</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-300">
                      {project.challenges.map((challenge) => (
                        <li key={challenge} className="flex gap-3">
                          <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
