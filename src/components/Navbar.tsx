import React from 'react';
import { ActiveTab, Language } from '../types';
import { Code2, Moon, Sun, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  language: Language;
  onToggleLanguage: () => void;
  onOpenContact: () => void;
  onOpenCustomizer: () => void;
  brandName: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  isDark,
  onToggleTheme,
  language,
  onToggleLanguage,
  onOpenContact,
  onOpenCustomizer,
  brandName,
}) => {
  const isEn = language === 'en';

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: isEn ? 'Home' : 'Beranda' },
    { id: 'tentang', label: isEn ? 'About' : 'Tentang' },
    { id: 'keahlian', label: isEn ? 'Skills' : 'Keahlian' },
    { id: 'proyek', label: isEn ? 'Projects' : 'Proyek' },
    { id: 'sertifikasi', label: isEn ? 'Credentials' : 'Sertifikasi' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-300 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 bg-white/90 dark:bg-stone-950/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark with Developer Code Icon matching screenshot */}
        <button
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display">
            {brandName}
          </span>
        </button>

        {/* Zone 2: 4-5 Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`relative py-1 text-sm tracking-wide transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Utility Toggles */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switch */}
          <button
            onClick={onToggleLanguage}
            title={isEn ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
            className="px-2.5 py-1 text-xs font-semibold rounded-md border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            {language.toUpperCase()}
          </button>

          {/* Theme Switch */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 rounded-md border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Quick Customizer */}
          <button
            onClick={onOpenCustomizer}
            title={isEn ? 'Customize Portfolio Details' : 'Kustomisasi Data Portofolio'}
            className="hidden sm:inline-flex items-center p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 rounded-md border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* Primary Action Button: "Hubungi Saya" (Vibrant Blue matching screenshot) */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-full transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 whitespace-nowrap shrink-0 cursor-pointer active:scale-98"
          >
            <span>{isEn ? 'Contact Me' : 'Hubungi Saya'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
