import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ActiveTab, Language } from '../types';
import { Code2, BarChart3, Palette, ArrowRight, Download, CheckCircle2, Sparkles, User } from 'lucide-react';

interface HeroSectionProps {
  name: string;
  nickName: string;
  role: string;
  bio: string;
  portraitUrl: string;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
  language: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  nickName,
  role,
  bio,
  portraitUrl,
  onSelectTab,
  onOpenContact,
  language,
}) => {
  const isEn = language === 'en';
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadCV = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
    window.print();
  };

  return (
    <div className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background soft ambient gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Headline & Actions (Matching Screenshot) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Primary Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 dark:text-stone-50 font-display leading-[1.12]">
              {isEn ? 'Hello! I am ' : 'Halo! Saya '}
              <span className="block text-stone-900 dark:text-stone-100">{nickName},</span>
              <span className="text-blue-600 dark:text-blue-400">
                {isEn ? 'Information Systems' : 'Sistem Informasi'}
              </span>{' '}
              <span>Enthusiast.</span>
            </h1>

            {/* Subtext Description */}
            <p className="mt-6 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl font-normal">
              {bio}
            </p>

            {/* Two Main Action Buttons (Matching Screenshot) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Primary: "Lihat Karya Saya ->" */}
              <button
                onClick={() => onSelectTab('proyek')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-full transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer active:scale-98 group"
              >
                <span>{isEn ? 'View My Work' : 'Lihat Karya Saya'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary: "Unduh CV" */}
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-700 dark:text-stone-200 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-full transition-all cursor-pointer active:scale-98 shadow-2xs"
              >
                {downloaded ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>{isEn ? 'Downloaded' : 'Tersimpan'}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                    <span>{isEn ? 'Download CV' : 'Unduh CV'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Competency Badges below buttons */}
            <div className="mt-10 pt-6 border-t border-stone-200/80 dark:border-stone-800/80 flex flex-wrap items-center gap-6 text-xs text-stone-500 dark:text-stone-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="font-medium">Full-Stack Web & API</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="font-medium">BPMN & Enterprise Modeling</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-medium">UI/UX & User Research</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Signature Organic Blob & Floating Badges (Matching Screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Organic Hand-Drawn Blue Ring Outline (Matching Screenshot) */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full text-blue-500/85 pointer-events-none transition-transform duration-1000 animate-pulse-glow"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 40,100 C 35,45 60,20 115,22 C 165,24 185,55 182,105 C 180,155 155,185 105,182 C 55,180 42,150 40,100 Z"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="4 2"
                  className="opacity-90"
                />
              </svg>

              {/* Second subtle fluid accent ring */}
              <div className="absolute inset-4 rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] border-2 border-blue-400/30 dark:border-blue-500/20 animate-spin-slow pointer-events-none" />

              {/* Center Portrait Container with User's Pas Foto */}
              <div className="relative w-56 h-56 sm:w-68 sm:h-68 rounded-full overflow-hidden border-4 border-white dark:border-stone-800 shadow-2xl bg-stone-100 dark:bg-stone-800 group">
                <img
                  src={portraitUrl}
                  alt={name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle inner shadow overlay */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full pointer-events-none" />
                
                {/* Subtle Name overlay ribbon */}
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-stone-950/70 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
                    {nickName}
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: "</> Developer" (Top-Left matching screenshot) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 left-0 sm:left-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 shadow-lg text-xs font-semibold text-stone-800 dark:text-stone-200"
              >
                <div className="w-5 h-5 rounded-md bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 font-mono text-[10px] font-bold">
                  &lt;/&gt;
                </div>
                <span>Developer</span>
              </motion.div>

              {/* Floating Badge 2: "📊 Business Analyst" (Bottom-Right matching screenshot) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2 right-0 sm:right-2 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 shadow-lg text-xs font-semibold text-stone-800 dark:text-stone-200"
              >
                <div className="w-5 h-5 rounded-md bg-indigo-100 dark:bg-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
                <span>Business Analyst</span>
              </motion.div>

              {/* Floating Badge 3: "🎨 UI/UX Designer" (Left Center) */}
              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="hidden sm:flex absolute bottom-8 -left-6 z-20 items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 shadow-lg text-xs font-semibold text-stone-800 dark:text-stone-200"
              >
                <div className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Palette className="w-3.5 h-3.5" />
                </div>
                <span>UI/UX Design</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
