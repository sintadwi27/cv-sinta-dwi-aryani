import React from 'react';
import { motion } from 'motion/react';
import { certificationsList, experienceList } from '../data/portfolioData';
import { Language } from '../types';
import { Award, Briefcase, GraduationCap, CheckCircle2, ExternalLink } from 'lucide-react';

interface CertificationsSectionProps {
  language: Language;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ language }) => {
  const isEn = language === 'en';

  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {isEn ? 'Credentials & Track Record' : 'Kredensial & Rekam Jejak'}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 font-display mt-1">
          {isEn ? 'Certifications & Practical Experience' : 'Sertifikasi Profesional & Pengalaman'}
        </h2>
        <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          {isEn
            ? 'Industry-certified competencies in data analytics, front-end engineering, and formal academic leadership.'
            : 'Kompetensi terverifikasi industri dalam analitik data, pengembangan antarmuka, serta pengalaman kepemimpinan akademik.'}
        </p>
      </div>

      {/* Grid: Certifications & Practical Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Certifications (Col 6) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 font-bold text-lg font-display">
            <Award className="w-5 h-5 text-blue-600" />
            <span>{isEn ? 'Professional Certifications' : 'Sertifikasi Keahlian'}</span>
          </div>

          <div className="space-y-4">
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/80 shadow-2xs space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-stone-500 font-semibold tabular-nums">
                    {cert.date}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="text-[11px] font-mono text-stone-400 pt-1 border-t border-stone-100 dark:border-stone-800">
                  ID: {cert.credentialId} · Verified
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Academic Track (Col 6) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 font-bold text-lg font-display">
            <Briefcase className="w-5 h-5 text-indigo-600" />
            <span>{isEn ? 'Practical & Academic Roles' : 'Pengalaman Nyata & Laboratorium'}</span>
          </div>

          <div className="space-y-4">
            {experienceList.map((exp) => (
              <div
                key={exp.id}
                className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/80 shadow-2xs space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-stone-500 font-semibold tabular-nums">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 pt-1 text-xs text-stone-600 dark:text-stone-400">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
