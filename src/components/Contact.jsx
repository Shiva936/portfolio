import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-b border-white/5 bg-[#0B1220] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Contact</h2>
          <p className="text-white/60 text-sm max-w-2xl">Reach out for collaboration, architecture reviews or system design deep dives.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
            <h3 className="text-sm font-semibold text-white">LinkedIn</h3>
            <p className="mt-2 text-sm text-white/60">Connect on LinkedIn for networking, referrals, and collaboration.</p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-lg bg-blue-500/20 hover:bg-blue-500/30 px-4 py-3 text-sm font-semibold text-blue-200 transition"
            >
              View profile
            </a>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
            <h3 className="text-sm font-semibold text-white">GitHub</h3>
            <p className="mt-2 text-sm text-white/60">
              Inspect code, backend libraries, and open-source tooling maintained in public repositories.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-lg bg-blue-500/20 hover:bg-blue-500/30 px-4 py-3 text-sm font-semibold text-blue-200 transition"
            >
              View repositories
            </a>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
            <h3 className="text-sm font-semibold text-white">LeetCode</h3>
            <p className="mt-2 text-sm text-white/60">
              Performance problem solving and system design practice. Detailed results coming soon.
            </p>
            <button
              type="button"
              disabled
              className="mt-4 inline-flex cursor-not-allowed rounded-lg bg-white/5 px-4 py-3 text-sm font-semibold text-white/40"
            >
              Coming soon
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
