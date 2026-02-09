export default function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-context-border bg-paper-dark/50">
      <div className="max-w-[680px] mx-auto px-4 sm:px-6 text-center">
        <p className="font-[family-name:var(--font-playfair)] text-ink-light text-sm">
          &ldquo;And life goes on&mdash;&rdquo;
        </p>
        <p className="text-ink-muted text-xs mt-2 font-[family-name:var(--font-source-sans)]">
          A memoir by Mark F. Koscak • Written October 1992, Updated January 1999
        </p>
        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-ink-muted font-[family-name:var(--font-source-sans)]">
          <span>Ljubljana → Austria → America</span>
        </div>
      </div>
    </footer>
  );
}
