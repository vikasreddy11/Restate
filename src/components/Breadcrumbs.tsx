type BreadcrumbsProps = {
  current: string
  onBack: () => void
}

export function Breadcrumbs({ current, onBack }: BreadcrumbsProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-sm text-neutral-500">
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-neutral-500 hover:text-cyan-600 transition-colors duration-200 cursor-pointer group"
        aria-label="Back to home"
      >
        <svg
          className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Home
      </button>
      <span className="text-neutral-300">/</span>
      <span className="text-neutral-800 font-semibold">{current}</span>
    </div>
  )
}
