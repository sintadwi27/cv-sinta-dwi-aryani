import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Language, ActiveTab } from '../types';
import { Code2, Mail, Github, Linkedin, Check, Copy, ArrowUp } from 'lucide-react';

interface FooterProps {
  language: Language;
  onOpenContact: () => void;
  brandName: string;
  onSelectTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenContact,
  brandName,
  onSelectTab,
}) => {
  const isEn = language === 'en';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-950/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-200/80 dark:border-stone-800/80 text-left">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-stone-900 dark:text-stone-100 font-display">
                {brandName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-sm">
              {isEn ? portfolioConfig.taglineEn : portfolioConfig.taglineId}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 font-display">
              {isEn ? 'Navigation' : 'Navigasi Cepat'}
            </h4>
            <div className="flex flex-col space-y-1.5 text-xs text-stone-600 dark:text-stone-400">
              <button
                onClick={() => { onSelectTab('tentang'); scrollToTop(); }}
                className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {isEn ? 'About Me' : 'Tentang Saya'}
              </button>
              <button
                onClick={() => { onSelectTab('keahlian'); scrollToTop(); }}
                className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {isEn ? 'Skills & Tech' : 'Keahlian & Penguasaan'}
              </button>
              <button
                onClick={() => { onSelectTab('proyek'); scrollToTop(); }}
                className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {isEn ? 'Projects' : 'Karya & Studi Kasus'}
              </button>
              <button
                onClick={() => { onSelectTab('sertifikasi'); scrollToTop(); }}
                className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {isEn ? 'Certifications' : 'Sertifikasi & Riwayat'}
              </button>
            </div>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 font-display">
              {isEn ? 'Get in Touch' : 'Terhubung Langsung'}
            </h4>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="text-xs font-mono text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5 transition-colors cursor-pointer p-1.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900"
                title="Salin Email"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>{portfolioConfig.email}</span>
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 opacity-60" />}
              </button>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={portfolioConfig.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenContact}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-xs"
              >
                {isEn ? 'Send Message' : 'Kirim Pesan'}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 dark:text-stone-400 gap-3">
          <p>© 2026 {portfolioConfig.name}. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px]">
              {portfolioConfig.role}
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-900 text-stone-600 dark:text-stone-400 transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Ke Atas</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
