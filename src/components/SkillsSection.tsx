import React from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '../data/portfolioData';
import { Language } from '../types';
import { Code2, BarChart3, Palette, CheckCircle2 } from 'lucide-react';

interface SkillsSectionProps {
  language: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ language }) => {
  const isEn = language === 'en';

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-indigo-500" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-emerald-500" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {isEn ? 'Technical & Analytical Competencies' : 'Kompetensi Teknis & Analitis'}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 font-display mt-1">
          {isEn ? 'Skills & Technical Expertise' : 'Keahlian & Penguasaan Teknologi'}
        </h2>
        <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          {isEn
            ? 'A comprehensive skill set bridging modern software engineering, business process modeling, and intuitive product design.'
            : 'Perpaduan menyeluruh antara rekayasa perangkat lunak modern, analisis proses bisnis, dan perancangan produk digital yang intuitif.'}
        </p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ y: -4 }}
            className="p-6 sm:p-7 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-stone-100 dark:border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 font-display">
                  {category.title}
                </h3>
              </div>

              {/* Skills list with animated progress */}
              <div className="mt-6 space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-baseline text-xs">
                      <span className="font-semibold text-stone-800 dark:text-stone-200">
                        {skill.name}
                      </span>
                      <span className="font-mono text-stone-400 dark:text-stone-500 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          category.id === 'web-dev'
                            ? 'bg-blue-600'
                            : category.id === 'system-analysis'
                            ? 'bg-indigo-600'
                            : 'bg-emerald-600'
                        }`}
                      />
                    </div>

                    <p className="text-[11px] text-stone-500 dark:text-stone-400">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tool Stack Tags Strip */}
      <div className="p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/40">
        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-4">
          {isEn ? 'Daily Development & Productivity Stack' : 'Perangkat Lunak & Lingkungan Kerja Harian'}
        </h4>
        <div className="flex flex-wrap gap-2.5">
          {[
            'VS Code', 'Figma', 'Postman', 'Git & GitHub', 'PostgreSQL', 'Docker',
            'BPMN Camunda', 'draw.io', 'Tableau', 'Jira Software', 'Tailwind CSS', 'Vercel'
          ].map((tool, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 shadow-2xs"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
