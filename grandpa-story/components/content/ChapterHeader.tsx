interface ChapterHeaderProps {
  number: number;
  title: string;
  subtitle: string;
  yearRange: string;
}

export default function ChapterHeader({ number, title, subtitle, yearRange }: ChapterHeaderProps) {
  return (
    <header className="mb-12 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-full mb-6">
        <span className="w-6 h-6 rounded-full bg-accent text-paper text-sm font-[family-name:var(--font-source-sans)] font-medium flex items-center justify-center">
          {number}
        </span>
        <span className="text-accent text-sm font-[family-name:var(--font-source-sans)] font-medium">
          {yearRange}
        </span>
      </div>
      
      <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-4 leading-tight">
        {title}
      </h1>
      
      <p className="text-ink-light text-lg font-[family-name:var(--font-source-serif)] max-w-lg mx-auto">
        {subtitle}
      </p>
      
      <div className="divider mt-8 max-w-xs mx-auto">
        <svg className="w-6 h-6 text-accent/50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    </header>
  );
}
