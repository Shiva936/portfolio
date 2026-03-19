import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:gap-0 sm:px-6 lg:px-8">
        <p>© 2026 {profile.name}</p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-200"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
