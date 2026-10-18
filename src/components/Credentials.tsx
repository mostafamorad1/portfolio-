"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { CertificateItem } from "@/data/portfolioData";
import {
  ShieldCheck,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  ExternalLink,
  Award,
} from "lucide-react";

interface CategoryTab {
  id: string;
  labelEn: string;
  labelAr: string;
}

const CATEGORIES: CategoryTab[] = [
  { id: "all", labelEn: "All", labelAr: "الكل" },
  { id: "ai-data", labelEn: "AI & Data", labelAr: "البيانات والذكاء الاصطناعي" },
  { id: "programming", labelEn: "Programming", labelAr: "البرمجة" },
];

export default function Credentials() {
  const { content, language } = useThemeLanguage();
  const education = content.education;

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [copiedId, setCopiedId] = useState<boolean>(false);

  // Filter certificates based on selected category
  const filteredCerts = useMemo(() => {
    const list = education.certificates || [];
    if (activeCategory === "all") return list;
    return list.filter((cert) => cert.category === activeCategory);
  }, [activeCategory, education.certificates]);

  // Navigate between certificates inside the popup modal
  const handlePrevCert = React.useCallback(() => {
    if (!selectedCert) return;
    const currentIndex = filteredCerts.findIndex((c) => c.id === selectedCert.id);
    const prevIndex = (currentIndex - 1 + filteredCerts.length) % filteredCerts.length;
    setSelectedCert(filteredCerts[prevIndex]);
  }, [filteredCerts, selectedCert]);

  const handleNextCert = React.useCallback(() => {
    if (!selectedCert) return;
    const currentIndex = filteredCerts.findIndex((c) => c.id === selectedCert.id);
    const nextIndex = (currentIndex + 1) % filteredCerts.length;
    setSelectedCert(filteredCerts[nextIndex]);
  }, [filteredCerts, selectedCert]);

  // Keyboard navigation & body scroll locking when modal is open
  useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      } else if (e.key === "ArrowLeft") {
        if (language === "ar") {
          handleNextCert();
        } else {
          handlePrevCert();
        }
      } else if (e.key === "ArrowRight") {
        if (language === "ar") {
          handlePrevCert();
        } else {
          handleNextCert();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedCert, handlePrevCert, handleNextCert, language]);

  // Copy credential ID handler
  const handleCopyId = (idString: string) => {
    navigator.clipboard.writeText(idString);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section
      id="credentials"
      className="py-20 md:py-28 relative bg-transparent scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching requested reference */}
        <div className="text-center sm:text-start max-w-3xl mb-8">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 font-mono text-xs sm:text-sm font-bold text-emerald-500 dark:text-emerald-400 tracking-wider mb-2">
            <span>{"//"}</span>
            <span>{language === "ar" ? "الشهادات والاعتمادات" : "CREDENTIALS"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {education.certificatesTitle || (language === "ar" ? "شهاداتي المهنية والتقنية" : "My Certifications")}
          </h2>

          {education.certificatesSubtitle && (
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              {education.certificatesSubtitle}
            </p>
          )}
        </div>

        {/* Filter Categories Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const label = language === "ar" ? cat.labelAr : cat.labelEn;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer select-none ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/25 scale-105"
                    : "bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-700/60 hover:border-slate-400 dark:hover:border-slate-500"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Certificate Cards Grid - 4 Columns on Large Screens */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setSelectedCert(cert)}
                className="group relative rounded-2xl bg-white dark:bg-[#0c1222]/90 border border-slate-200/90 dark:border-slate-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
              >
                {/* Certificate Preview Image Frame */}
                <div className="relative w-full aspect-[16/11] bg-slate-100 dark:bg-slate-950/70 overflow-hidden flex items-center justify-center p-2.5">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={400}
                      height={280}
                      className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                      priority={index < 4}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 text-slate-400 rounded-lg">
                      <Award className="w-12 h-12 text-emerald-500/60 mb-2" />
                      <span className="text-xs font-mono">{cert.issuer}</span>
                    </div>
                  )}

                  {/* Circular Expand Button (matching user reference screenshot) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-11 h-11 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <Maximize2 className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    {/* Title */}
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Issuer + Shield */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{cert.issuer}</span>
                    </div>

                    {/* Date */}
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {cert.date}
                    </div>

                    {/* Key Learnings & Skills Header with Cyan Bullet */}
                    <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-3.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 inline-block flex-shrink-0" />
                      <span>{language === "ar" ? "المهارات والمكتسبات الأساسية:" : "Key Learnings & Skills:"}</span>
                    </div>

                    {/* Learnings description */}
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {cert.learnings || cert.title}
                    </p>
                  </div>

                  {/* Divider line & Skill Tags */}
                  <div>
                    <div className="border-t border-slate-100 dark:border-slate-800/80 my-3.5" />
                    <div className="flex flex-wrap gap-1.5">
                      {(cert.skills || []).slice(0, 4).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/60 text-slate-700 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {(cert.skills || []).length > 4 && (
                        <span className="text-[10px] font-mono text-slate-400 self-center">
                          +{(cert.skills || []).length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enlarged In-Page Certificate Popup Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-900/70">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {selectedCert.issuer} · {selectedCert.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  {/* Prev / Next buttons */}
                  <button
                    onClick={handlePrevCert}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title={language === "ar" ? "السابق" : "Previous"}
                    aria-label="Previous certificate"
                  >
                    <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                  </button>
                  <button
                    onClick={handleNextCert}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title={language === "ar" ? "التالي" : "Next"}
                    aria-label="Next certificate"
                  >
                    <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                  </button>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
                    title={language === "ar" ? "إغلاق" : "Close"}
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
                {/* Certificate High-Res Image Frame */}
                <div className="relative w-full rounded-xl bg-slate-950 p-2 sm:p-4 border border-slate-800 shadow-inner flex items-center justify-center">
                  {selectedCert.image ? (
                    <Image
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      width={1000}
                      height={700}
                      unoptimized
                      className="max-h-[50vh] sm:max-h-[55vh] w-auto max-w-full object-contain rounded-lg shadow-md"
                    />
                  ) : (
                    <div className="py-20 flex flex-col items-center justify-center text-slate-400">
                      <Award className="w-16 h-16 text-emerald-500 mb-2" />
                      <p className="text-sm font-semibold">{selectedCert.title}</p>
                    </div>
                  )}

                  {/* External link to full image / vector */}
                  {selectedCert.image && (
                    <a
                      href={selectedCert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-slate-900/80 hover:bg-emerald-500 text-white hover:text-slate-950 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-sm transition-all duration-200 flex items-center gap-1.5 border border-slate-700 shadow-md"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{language === "ar" ? "فتح بالحجم الكامل" : "Open Full Image"}</span>
                    </a>
                  )}
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-slate-800">
                  {/* Left: Metadata */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                        {language === "ar" ? "الجهة المانحة" : "Issuing Organization"}
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        {selectedCert.issuer}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                        {language === "ar" ? "تاريخ الإصدار" : "Issue Date"}
                      </span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {selectedCert.date}
                      </span>
                    </div>

                    {selectedCert.credentialId && (
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                          {language === "ar" ? "معرّف الاعتماد (Credential ID)" : "Credential ID"}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-mono font-bold bg-white dark:bg-slate-900 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 select-all">
                            {selectedCert.credentialId}
                          </span>
                          <button
                            onClick={() => handleCopyId(selectedCert.credentialId!)}
                            className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                            title={language === "ar" ? "نسخ المعرّف" : "Copy ID"}
                            aria-label="Copy credential ID"
                          >
                            {copiedId ? (
                              <Check className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Learnings & Skills */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 inline-block" />
                        {language === "ar" ? "المهارات والمكتسبات الأساسية" : "Key Learnings & Impact"}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        {selectedCert.learnings || selectedCert.title}
                      </p>
                    </div>

                    {selectedCert.skills && selectedCert.skills.length > 0 && (
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-1.5">
                          {language === "ar" ? "المهارات والتقنيات المعتمدة" : "Verified Skills"}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedCert.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-mono px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50 text-xs text-slate-500">
                <span>
                  {language === "ar"
                    ? "اضغط Esc أو انقر خارج النافذة للإغلاق"
                    : "Press Esc or click outside to close"}
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold transition-colors"
                >
                  {language === "ar" ? "إغلاق" : "Close"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
