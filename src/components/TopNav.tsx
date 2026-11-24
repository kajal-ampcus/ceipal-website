import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CeipalLogo } from './CeipalLogo';
import { ProductModule } from '../data/portalData';

interface TopNavProps {
  activeModule: ProductModule;
  onSelectModule: (module: ProductModule) => void;
  onOpenSupport: () => void;
  onOpenDemo: () => void;
}

export function TopNav({
  activeModule,
  onSelectModule,
  onOpenSupport,
  onOpenDemo,
}: TopNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; module?: ProductModule; action?: () => void }[] = [
    { label: 'ATS', module: 'ats' },
    { label: 'Workforce', module: 'workforce' },
    { label: 'Procurewise', module: 'procurewise' },
    { label: 'Support', action: onOpenSupport },
  ];

  const handleNavClick = (item: (typeof navItems)[number]) => {
    if (item.module) {
      onSelectModule(item.module);
    } else if (item.action) {
      item.action();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-30 bg-white border-b border-slate-200/90">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onSelectModule('ats');
          }}
          aria-label="Ceipal Home"
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:rounded-md"
        >
          <CeipalLogo variant="light" />
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Ceipal products and support"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => {
            const isActive = item.module === activeModule;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-[#0B1F3A] font-semibold'
                    : 'text-slate-600 hover:text-[#0B1F3A]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[21px] h-[2px] bg-[#F46933]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single primary action button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenDemo}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#132F54] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Request Demo
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-2">
          {navItems.map((item) => {
            const isActive = item.module === activeModule;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-100 text-[#0B1F3A] font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-[#0B1F3A]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#132F54] rounded-lg transition-colors"
            >
              Request Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
