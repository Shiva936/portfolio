export default function Loader({ active }) {
  if (!active) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-10 text-center shadow-glow">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-700 border-t-indigo-400" />
        <p className="text-sm text-slate-200">Loading portfolio…</p>
      </div>
    </div>
  )
}
