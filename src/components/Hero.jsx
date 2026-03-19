import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] w-full flex items-center md:min-h-[90vh] overflow-hidden pb-16 md:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/intro-dev.png"
          alt="Portfolio background"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Dark Overlay Gradient - Left to Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent" />

      {/* Blur Glow Effect (Optional Depth) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[560px] h-[560px] sm:w-[680px] sm:h-[680px] lg:w-[800px] lg:h-[800px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              {profile.name}
            </h1>

            <p className="mt-4 text-xl text-white/80 font-medium">
              {profile.title}
            </p>

            <p className="mt-6 text-base leading-relaxed text-white/60">
              {profile.tagline}
            </p>

            <p className="mt-3 text-base leading-relaxed text-white/60">
              {profile.subtext}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition duration-300"
              >
                View Projects
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 backdrop-blur-md hover:border-white/40 hover:bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300"
              >
                GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 backdrop-blur-md hover:border-white/40 hover:bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
