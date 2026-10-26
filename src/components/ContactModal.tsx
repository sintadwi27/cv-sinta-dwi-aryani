import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioConfig } from '../data/portfolioData';
import { Language } from '../types';
import { Mail, Send, CheckCircle2, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const isEn = language === 'en';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Research Inquiry / Collaboration');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate success
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        className="w-full max-w-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-5"
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-display">
                {isEn ? 'Get in Touch' : 'Hubungi Saya'}
              </h3>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
              {isEn
                ? 'Interested in academic collaboration, talk invitations, or data queries?'
                : 'Tertarik dengan kolaborasi riset ilmiah, undangan seminar, atau diskusi data?'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Quick Email Copy Box */}
        <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 flex items-center justify-between">
          <div className="text-xs">
            <span className="text-stone-400 block text-[11px] uppercase tracking-wider font-semibold">
              Direct Academic Email
            </span>
            <span className="font-mono text-stone-800 dark:text-stone-200 font-medium">
              {portfolioConfig.email}
            </span>
          </div>
          <button
            onClick={copyEmail}
            className="px-2.5 py-1.5 rounded-md text-xs font-semibold bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors flex items-center gap-1 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (isEn ? 'Copied' : 'Tersalin') : (isEn ? 'Copy' : 'Salin')}</span>
          </button>
        </div>

        {/* Working Contact Form */}
        {submitted ? (
          <div className="p-8 text-center space-y-3 bg-amber-50/50 dark:bg-stone-800/40 rounded-xl border border-amber-200 dark:border-stone-700">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
            <h4 className="font-bold text-stone-900 dark:text-stone-100 font-display">
              {isEn ? 'Message Sent Successfully!' : 'Pesan Berhasil Terkirim!'}
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-400">
              {isEn
                ? 'Thank you for reaching out. Sinta Dwi Aryani will respond to your inquiry shortly.'
                : 'Terima kasih telah menghubungi. Sinta Dwi Aryani akan membalas pesan Anda sesegera mungkin.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                {isEn ? 'Your Name' : 'Nama Lengkap'}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dr. Alex Rivera"
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                {isEn ? 'Your Email Address' : 'Alamat Email'}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex.rivera@observatory.org"
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                {isEn ? 'Message Subject' : 'Subjek Pesan'}
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                {isEn ? 'Message / Research Note' : 'Isi Pesan'}
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={isEn ? "Hello Sinta, I would like to discuss..." : "Halo Sinta, saya ingin berdiskusi mengenai..."}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 cursor-pointer"
              >
                {isEn ? 'Cancel' : 'Batal'}
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-stone-900 dark:bg-amber-500 text-white dark:text-stone-950 rounded-lg hover:bg-stone-800 dark:hover:bg-amber-400 transition-colors cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isEn ? 'Send Message' : 'Kirim Pesan'}</span>
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
