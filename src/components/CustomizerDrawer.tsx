import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioConfig } from '../data/portfolioData';
import { Language } from '../types';
import { SlidersHorizontal, RotateCcw, Check, Sparkles, UserCheck } from 'lucide-react';

interface CustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  name: string;
  nickName: string;
  brandName: string;
  role: string;
  bio: string;
  onUpdateProfile: (name: string, nickName: string, brandName: string, role: string, bio: string) => void;
  onResetDefaults: () => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  isOpen,
  onClose,
  language,
  name,
  nickName,
  brandName,
  role,
  bio,
  onUpdateProfile,
  onResetDefaults,
}) => {
  const isEn = language === 'en';
  const [localName, setLocalName] = useState(name);
  const [localNickName, setLocalNickName] = useState(nickName);
  const [localBrandName, setLocalBrandName] = useState(brandName);
  const [localRole, setLocalRole] = useState(role);
  const [localBio, setLocalBio] = useState(bio);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(localName, localNickName, localBrandName, localRole, localBio);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };

  const applyHumairaPreset = () => {
    setLocalName("Humaira");
    setLocalNickName("Humaira");
    setLocalBrandName("Humaira Dev.");
    setLocalRole(isEn ? "Information Systems Enthusiast" : "Sistem Informasi Enthusiast");
    setLocalBio(isEn ? portfolioConfig.taglineEn : portfolioConfig.taglineId);
    onUpdateProfile("Humaira", "Humaira", "Humaira Dev.", isEn ? "Information Systems Enthusiast" : "Sistem Informasi Enthusiast", isEn ? portfolioConfig.taglineEn : portfolioConfig.taglineId);
  };

  const applySintaPreset = () => {
    setLocalName(portfolioConfig.name);
    setLocalNickName(portfolioConfig.nickName);
    setLocalBrandName(portfolioConfig.devBrand);
    setLocalRole(isEn ? portfolioConfig.roleEn : portfolioConfig.role);
    setLocalBio(isEn ? portfolioConfig.taglineEn : portfolioConfig.taglineId);
    onUpdateProfile(portfolioConfig.name, portfolioConfig.nickName, portfolioConfig.devBrand, isEn ? portfolioConfig.roleEn : portfolioConfig.role, isEn ? portfolioConfig.taglineEn : portfolioConfig.taglineId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-xs">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 26, stiffness: 240 }}
        className="w-full max-w-md h-full bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 font-display">
                {isEn ? 'Customize Portfolio' : 'Kustomisasi Data Portofolio'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Quick Presets */}
          <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 block">
              {isEn ? 'Quick Switch Presets' : 'Pilihan Preset Cepat'}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={applySintaPreset}
                className="flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold bg-white dark:bg-stone-800 border border-blue-300 dark:border-blue-800 text-stone-800 dark:text-stone-200 hover:bg-blue-100/50 transition-colors cursor-pointer"
              >
                Sinta Dwi Aryani
              </button>
              <button
                type="button"
                onClick={applyHumairaPreset}
                className="flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold bg-white dark:bg-stone-800 border border-blue-300 dark:border-blue-800 text-stone-800 dark:text-stone-200 hover:bg-blue-100/50 transition-colors cursor-pointer"
              >
                Humaira Dev.
              </button>
            </div>
          </div>

          <form id="customizer-form" onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                {isEn ? 'Full Name' : 'Nama Lengkap'}
              </label>
              <input
                type="text"
                value={localName}
                onChange={(e) => setLocalName(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  {isEn ? 'Call Name (Headline)' : 'Nama Panggilan'}
                </label>
                <input
                  type="text"
                  value={localNickName}
                  onChange={(e) => setLocalNickName(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  {isEn ? 'Navbar Brand' : 'Brand Navigasi'}
                </label>
                <input
                  type="text"
                  value={localBrandName}
                  onChange={(e) => setLocalBrandName(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                {isEn ? 'Specialization Title' : 'Bidang Peminatan / Gelar'}
              </label>
              <input
                type="text"
                value={localRole}
                onChange={(e) => setLocalRole(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                {isEn ? 'Short Bio Description' : 'Deskripsi Ringkas Bio'}
              </label>
              <textarea
                rows={3}
                value={localBio}
                onChange={(e) => setLocalBio(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
          </form>
        </div>

        <div className="pt-6 border-t border-stone-200 dark:border-stone-800 space-y-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={applySintaPreset}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isEn ? 'Reset Default' : 'Kembalikan Default'}</span>
            </button>

            <button
              type="submit"
              form="customizer-form"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-sm"
            >
              {savedNotice ? <Check className="w-3.5 h-3.5 text-white" /> : <Sparkles className="w-3.5 h-3.5" />}
              <span>{savedNotice ? (isEn ? 'Saved!' : 'Tersimpan!') : (isEn ? 'Apply Changes' : 'Terapkan')}</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
