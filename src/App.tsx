import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab, Language } from './types';
import { portfolioConfig } from './data/portfolioData';
import { CosmicBackground } from './components/CosmicBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { CustomizerDrawer } from './components/CustomizerDrawer';
import { Home, User, BarChart3, Briefcase, Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('id');
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);

  // Profile data state
  const [name, setName] = useState<string>(portfolioConfig.name);
  const [nickName, setNickName] = useState<string>(portfolioConfig.nickName);
  const [brandName, setBrandName] = useState<string>(portfolioConfig.devBrand);
  const [role, setRole] = useState<string>(portfolioConfig.role);
  const [bio, setBio] = useState<string>(portfolioConfig.taglineId);

  // Sync role & bio when language changes
  useEffect(() => {
    if (language === 'id') {
      if (role === portfolioConfig.roleEn) setRole(portfolioConfig.role);
      if (bio === portfolioConfig.taglineEn) setBio(portfolioConfig.taglineId);
    } else {
      if (role === portfolioConfig.role) setRole(portfolioConfig.roleEn);
      if (bio === portfolioConfig.taglineId) setBio(portfolioConfig.taglineEn);
    }
  }, [language]);

  // Dark mode toggle on document root
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const handleUpdateProfile = (
    newName: string,
    newNickName: string,
    newBrandName: string,
    newRole: string,
    newBio: string
  ) => {
    setName(newName);
    setNickName(newNickName);
    setBrandName(newBrandName);
    setRole(newRole);
    setBio(newBio);
  };

  const handleResetDefaults = () => {
    setName(portfolioConfig.name);
    setNickName(portfolioConfig.nickName);
    setBrandName(portfolioConfig.devBrand);
    setRole(language === 'en' ? portfolioConfig.roleEn : portfolioConfig.role);
    setBio(language === 'en' ? portfolioConfig.taglineEn : portfolioConfig.taglineId);
  };

  const isEn = language === 'en';

  return (
    <div
      className={`min-h-screen relative flex flex-col transition-colors duration-500 ${
        isDark ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'
      }`}
    >
      {/* Subtle Cosmic Twinkling Background */}
      <CosmicBackground isDark={isDark} />

      {/* Modern Developer Navbar (Matching Screenshot) */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        language={language}
        onToggleLanguage={() => setLanguage((prev) => (prev === 'en' ? 'id' : 'en'))}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        brandName={brandName}
      />

      {/* Main Content Area with Fluid Animated Transitions */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroSection
                name={name}
                nickName={nickName}
                role={role}
                bio={bio}
                portraitUrl={portfolioConfig.images.pasFoto}
                onSelectTab={(tab) => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenContact={() => setIsContactOpen(true)}
                language={language}
              />
              
              {/* Featured Highlights preview section on Home */}
              <div className="border-t border-stone-200/80 dark:border-stone-800/80 bg-white/50 dark:bg-stone-950/40">
                <AboutSection
                  language={language}
                  onOpenContact={() => setIsContactOpen(true)}
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'tentang' && (
            <motion.div
              key="tentang"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <AboutSection
                language={language}
                onOpenContact={() => setIsContactOpen(true)}
              />
            </motion.div>
          )}

          {activeTab === 'keahlian' && (
            <motion.div
              key="keahlian"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <SkillsSection language={language} />
            </motion.div>
          )}

          {activeTab === 'proyek' && (
            <motion.div
              key="proyek"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectsSection language={language} />
            </motion.div>
          )}

          {activeTab === 'sertifikasi' && (
            <motion.div
              key="sertifikasi"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <CertificationsSection language={language} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Bottom Navigation Bar for Mobile */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-lg border border-stone-200 dark:border-stone-800 rounded-2xl p-2 shadow-xl flex items-center justify-around">
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-medium transition-colors cursor-pointer ${
            activeTab === 'home'
              ? 'text-blue-600 dark:text-blue-400 font-bold'
              : 'text-stone-500 dark:text-stone-400'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>Beranda</span>
        </button>
        <button
          onClick={() => {
            setActiveTab('tentang');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-medium transition-colors cursor-pointer ${
            activeTab === 'tentang'
              ? 'text-blue-600 dark:text-blue-400 font-bold'
              : 'text-stone-500 dark:text-stone-400'
          }`}
        >
          <User className="w-4 h-4 mb-0.5" />
          <span>Tentang</span>
        </button>
        <button
          onClick={() => {
            setActiveTab('keahlian');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-medium transition-colors cursor-pointer ${
            activeTab === 'keahlian'
              ? 'text-blue-600 dark:text-blue-400 font-bold'
              : 'text-stone-500 dark:text-stone-400'
          }`}
        >
          <BarChart3 className="w-4 h-4 mb-0.5" />
          <span>Keahlian</span>
        </button>
        <button
          onClick={() => {
            setActiveTab('proyek');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-medium transition-colors cursor-pointer ${
            activeTab === 'proyek'
              ? 'text-blue-600 dark:text-blue-400 font-bold'
              : 'text-stone-500 dark:text-stone-400'
          }`}
        >
          <Briefcase className="w-4 h-4 mb-0.5" />
          <span>Proyek</span>
        </button>
        <button
          onClick={() => {
            setActiveTab('sertifikasi');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center py-1 px-2 text-[10px] font-medium transition-colors cursor-pointer ${
            activeTab === 'sertifikasi'
              ? 'text-blue-600 dark:text-blue-400 font-bold'
              : 'text-stone-500 dark:text-stone-400'
          }`}
        >
          <Award className="w-4 h-4 mb-0.5" />
          <span>Sertifikasi</span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        language={language}
        onOpenContact={() => setIsContactOpen(true)}
        brandName={brandName}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        language={language}
      />

      {/* Interactive Customizer Drawer */}
      <CustomizerDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        language={language}
        name={name}
        nickName={nickName}
        brandName={brandName}
        role={role}
        bio={bio}
        onUpdateProfile={handleUpdateProfile}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
