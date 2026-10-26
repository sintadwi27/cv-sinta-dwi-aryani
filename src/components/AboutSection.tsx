import React from 'react';
import { motion } from 'motion/react';
import { portfolioConfig } from '../data/portfolioData';
import { Language } from '../types';
import { BookOpen, CheckCircle2, Laptop } from 'lucide-react';

interface AboutSectionProps {
  language: Language;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  language,
  onOpenContact,
}) => {
  const isEn = language === 'en';

  const highlights = [
    {
      title: isEn ? "Education" : "Pendidikan",
      desc: isEn ? "Universitas Komputama Majenang - S1 Information Systems" : "Universitas Komputama Majenang - S1 Sistem Informasi",
      icon: BookOpen,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/60"
    },
    {
      title: isEn ? "Focus Specialty" : "Fokus Keahlian",
      desc: isEn ? "Business Process Modeling" : "Pemodelan Proses Bisnis",
      icon: Laptop,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/60"
    }
  ];

  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {isEn ? 'About Me' : 'Tentang Saya'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 font-display mt-1">
            {isEn ? 'Bridging Tech & Business Solutions' : 'Menghubungkan Teknologi & Kebutuhan Bisnis'}
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            {isEn ? portfolioConfig.aboutDetailedEn : portfolioConfig.aboutDetailedId}
          </p>
        </div>

        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shrink-0 shadow-md shadow-blue-500/20"
        >
          <span>{isEn ? 'Work Together' : 'Mulai Kolaborasi'}</span>
        </button>
      </div>

      {/* 2 Pillars Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Deep Narrative & Vision */}
      <div className="p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/50 space-y-6">
        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-display">
          {isEn ? 'My Philosophy in Digital Systems' : 'Prinsip Saya Dalam Membangun Sistem Digital'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
          <div className="space-y-2">
            <h4 className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>1. Berorientasi Solusi Bisnis</span>
            </h4>
            <p>
              Teknologi tidak dibuat sekadar untuk ada, melainkan untuk menyederhanakan alur kerja pengguna, memangkas inefisiensi operasional, dan menghadirkan nilai tambah nyata.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>2. Kerapian Kode & Data</span>
            </h4>
            <p>
              Menjunjung tinggi penulisan kode modular yang mudah dirawat (clean code), normalisasi basis data terstruktur (1NF-3NF), dan dokumentasi API yang jelas.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>3. Empati Pengguna (UI/UX)</span>
            </h4>
            <p>
              Menggabungkan estetika visual yang segar dengan interaksi yang intuitif agar sistem dapat diadopsi dengan cepat oleh semua tingkatan pengguna organisasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
