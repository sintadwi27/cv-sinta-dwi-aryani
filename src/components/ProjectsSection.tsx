import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsList } from '../data/portfolioData';
import { ProjectItem, Language } from '../types';
import { ExternalLink, Github, ArrowUpRight, FileText, CheckCircle2 } from 'lucide-react';

interface ProjectsSectionProps {
  language: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  const isEn = language === 'en';
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'si' | 'web' | 'mobile'>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsList.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header & Filter Controls */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {isEn ? 'Selected Portfolio' : 'Portofolio Terpilih'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 font-display mt-1">
            {isEn ? 'Featured Projects & Case Studies' : 'Karya & Studi Kasus Sistem Informasi'}
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-xl">
            {isEn
              ? 'Real-world digital systems engineered for usability, business impact, and modern technological standards.'
              : 'Implementasi sistem digital nyata yang dirancang untuk efisiensi bisnis, kemudahan pengguna, dan performa tinggi.'}
          </p>
        </div>

        {/* Clean Segmented Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800/80 rounded-xl text-xs">
          {[
            { id: 'all', label: isEn ? 'All Projects' : 'Semua Proyek' },
            { id: 'si', label: 'Sistem Informasi' },
            { id: 'web', label: 'Web Platform' },
            { id: 'mobile', label: 'Mobile App' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-3.5 py-2 font-medium rounded-lg transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-white dark:bg-stone-900 text-blue-600 dark:text-blue-400 shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/80 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
            >
              {/* Project Image Preview */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md text-stone-900 dark:text-stone-100 text-xs font-semibold shadow-xs">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-[11px] font-mono text-stone-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{isEn ? 'View Case Study' : 'Studi Kasus'}</span>
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                          title="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-stone-800 dark:text-stone-200 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <span>Preview</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
          >
            {/* Header Image */}
            <div className="relative aspect-16/8 w-full bg-stone-900 overflow-hidden shrink-0">
              <img
                src={activeProjectModal.imageUrl}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {activeProjectModal.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 font-display mt-1">
                  {activeProjectModal.title}
                </h3>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/60">
                {activeProjectModal.metrics.map((m, idx) => (
                  <div key={idx}>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block">
                      {m.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Case Study Text */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  {isEn ? 'Problem & Engineering Solution' : 'Analisis Masalah & Solusi Arsitektur'}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {activeProjectModal.fullCaseStudy}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  {isEn ? 'Technologies & Frameworks' : 'Teknologi & Kerangka Kerja'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  Repository: github.com/sintaryn
                </span>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 cursor-pointer"
                >
                  {isEn ? 'Close Preview' : 'Tutup'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
