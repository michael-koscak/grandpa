'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-context-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <Link 
            href="/" 
            className="group flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-colors">
              <span className="font-[family-name:var(--font-playfair)] text-accent text-lg font-semibold">
                MK
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-[family-name:var(--font-playfair)] text-ink font-semibold text-lg leading-tight">
                My Life Story
              </p>
              <p className="text-ink-muted text-xs font-[family-name:var(--font-source-sans)]">
                Mark F. Koscak
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <NavLink href="/" active={isHome}>
              Home
            </NavLink>
            <NavLink href="/chapters/origins-and-family-roots" active={pathname.startsWith('/chapters')}>
              Chapters
            </NavLink>
            <NavLink href="/map" active={pathname === '/map'}>
              Map
            </NavLink>
            <NavLink href="/about" active={pathname === '/about'}>
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({ 
  href, 
  active, 
  children 
}: { 
  href: string; 
  active: boolean; 
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`
        px-3 py-2 rounded-md text-sm font-[family-name:var(--font-source-sans)] font-medium
        transition-colors duration-200
        ${active 
          ? 'bg-accent/10 text-accent' 
          : 'text-ink-light hover:text-ink hover:bg-paper-dark'
        }
      `}
    >
      {children}
    </Link>
  );
}
