"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
  CheckCircle2,
  Loader2,
  Sparkles,
  UserCheck,
  MessageSquarePlus,
  ExternalLink,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { personalInfo, TestimonialItem } from "@/data/portfolioData";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.76-1.75-1.76-1.75.79-1.75 1.76.78 1.76 1.75 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

export default function Testimonials() {
  const { content, language, isRtl } = useThemeLanguage();
  const testimonialsData = content.testimonials;

  // Approved testimonials come strictly from portfolioData.ts (100% owner controlled)
  const approvedTestimonials: TestimonialItem[] = testimonialsData?.items || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [submittedPayload, setSubmittedPayload] = useState<{
    name: string;
    role: string;
    quote: string;
    rating: number;
    linkedinUrl: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    linkedinUrl: "",
    quote: "",
    rating: 5,
  });

  const [hoverRating, setHoverRating] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  const count = approvedTestimonials.length;

  const nextSlide = useCallback(() => {
    if (count <= 1) return;
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  const prevSlide = useCallback(() => {
    if (count <= 1) return;
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Auto-play timer for multi-item carousel (pauses on hover or when modal is open)
  useEffect(() => {
    if (isModalOpen || count <= 1) return;

    const startTimer = () => {
      autoPlayTimerRef.current = setInterval(() => {
        if (!isHoveredRef.current) {
          setActiveIndex((prev) => (prev + 1) % count);
        }
      }, 7000);
    };

    startTimer();
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [count, isModalOpen]);

  const normalizeLinkedInUrl = (rawUrl: string): string => {
    const trimmed = rawUrl.trim();
    if (!trimmed) return "";
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  };

  const getWhatsAppReviewLink = (payload: {
    name: string;
    role: string;
    quote: string;
    rating: number;
    linkedinUrl: string;
  }) => {
    const stars = "⭐".repeat(payload.rating || 5);
    const lines = [
      isRtl ? "🌟 *تقييم جديد للبورتفوليو*" : "🌟 *New Portfolio Testimonial*",
      "",
      `👤 *${isRtl ? "الاسم" : "Name"}:* ${payload.name}`,
      `💼 *${isRtl ? "المسمى الوظيفي" : "Role"}:* ${payload.role}`,
      `⭐ *${isRtl ? "التقييم" : "Rating"}:* ${stars} (${payload.rating}/5)`,
      ...(payload.linkedinUrl ? [`🔗 *LinkedIn:* ${payload.linkedinUrl}`] : []),
      "",
      `💬 *${isRtl ? "الرأي" : "Review"}:*`,
      `"${payload.quote}"`,
    ];
    return `${personalInfo.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const getEmailReviewLink = (payload: {
    name: string;
    role: string;
    quote: string;
    rating: number;
    linkedinUrl: string;
  }) => {
    const subject = isRtl
      ? `تقييم جديد للبورتفوليو من ${payload.name}`
      : `New Portfolio Testimonial from ${payload.name}`;
    const body = [
      `Name: ${payload.name}`,
      `Role: ${payload.role}`,
      `Rating: ${payload.rating}/5`,
      ...(payload.linkedinUrl ? [`LinkedIn: ${payload.linkedinUrl}`] : []),
      "",
      `Testimonial:`,
      `"${payload.quote}"`,
    ].join("\n");
    return `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setFormError(
        language === "ar" ? "يرجى كتابة اسمك (حرفين على الأقل)" : "Please enter your name (at least 2 characters)"
      );
      return;
    }

    if (!formData.role.trim()) {
      setFormError(
        language === "ar"
          ? "يرجى كتابة المسمى الوظيفي أو صفتك (مثال: عميل، زميل عمل)"
          : "Please enter your role or title (e.g. Client, Data Scientist)"
      );
      return;
    }

    let formattedLinkedin = "";
    if (formData.linkedinUrl.trim()) {
      formattedLinkedin = normalizeLinkedInUrl(formData.linkedinUrl);
      if (!/linkedin\.com\/(in|company|pub)\//i.test(formattedLinkedin)) {
        setFormError(
          language === "ar"
            ? "يرجى إدخال رابط حساب LinkedIn صحيح (مثال: https://linkedin.com/in/username)"
            : "Please enter a valid LinkedIn profile URL (e.g. https://linkedin.com/in/username)"
        );
        return;
      }
    }

    if (!formData.quote.trim() || formData.quote.trim().length < 5) {
      setFormError(language === "ar" ? "يرجى كتابة رأيك في بضعة أسطر" : "Please share your review");
      return;
    }

    const payload = {
      name: formData.name.trim(),
      role: formData.role.trim(),
      linkedinUrl: formattedLinkedin,
      quote: formData.quote.trim(),
      rating: formData.rating,
    };

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setSubmittedPayload(payload);
        setSubmitSuccess(true);
        setFormData({ name: "", role: "", linkedinUrl: "", quote: "", rating: 5 });
      } else {
        setFormError(
          result.error ||
            (language === "ar" ? "حدث خطأ أثناء الإرسال. يرجى المحاولة ثانية." : "Failed to submit review. Please try again.")
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setFormError(
        language === "ar" ? "تعذر الاتصال بالخادم. يرجى التحقق من اتصالك." : "Network error. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to generate initials from name
  const getInitials = (nameStr: string) => {
    const parts = nameStr.trim().split(" ");
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return nameStr.slice(0, 2).toUpperCase();
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative bg-transparent scroll-mt-20 md:scroll-mt-24 overflow-hidden"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-300 border border-indigo-200/50 dark:border-indigo-800/50 mb-3 shadow-xs">
            <Quote className="w-3.5 h-3.5" />
            <span>{testimonialsData?.title || (isRtl ? "التوصيات والآراء" : "Testimonials")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {testimonialsData?.title || (isRtl ? "التوصيات والآراء" : "Testimonials & Reviews")}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {testimonialsData?.subtitle ||
              (isRtl
                ? "ما يقوله الزملاء والعملاء وأصحاب العمل عن دقة التنفيذ والتعاون معي"
                : "What colleagues, clients, and collaborators say about my engineering delivery and work ethic")}
          </p>

          {/* Add Review Trigger Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setFormError("");
                setSubmitSuccess(false);
                setSubmittedPayload(null);
                setIsModalOpen(true);
              }}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <Plus className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
              <span>{isRtl ? "أضف رأيك أو تقييمك" : "Add Your Review"}</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
            </button>
          </div>
        </div>

        {/* Content Display: Empty State / Single Card / 3D Slider */}
        {count === 0 ? (
          /* Empty State */
          <div className="max-w-xl mx-auto p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md text-center shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-800/60 text-indigo-600 dark:text-cyan-400 flex items-center justify-center mx-auto mb-4">
              <MessageSquarePlus className="w-7 h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
              {isRtl ? "شارك رأيك وتجربتك في العمل معي" : "Share Your Experience Working With Me"}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {isRtl
                ? "هل تعاونا معاً في مشروع أو عمل سابق؟ يسعدني جداً كتابة رأيك وإضافة حسابك على LinkedIn ليظهر هنا في البورتفوليو."
                : "Have we collaborated on a project or worked together? I'd love to feature your feedback along with your LinkedIn profile here."}
            </p>
            <button
              type="button"
              onClick={() => {
                setFormError("");
                setSubmitSuccess(false);
                setSubmittedPayload(null);
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{isRtl ? "اكتب رأيك الآن" : "Leave a Review"}</span>
            </button>
          </div>
        ) : count === 1 ? (
          /* Single Card Display (Centered) */
          <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-slate-900/95 border-2 border-indigo-500/40 dark:border-cyan-500/40 shadow-2xl shadow-indigo-500/10 dark:shadow-cyan-500/10 relative">
            <Quote className="absolute top-6 end-6 w-12 h-12 text-slate-200/70 dark:text-slate-800/60 pointer-events-none" />
            <div className="relative z-10 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, sIdx) => {
                    const isFilled = sIdx + 1 <= (approvedTestimonials[0].rating || 5);
                    return (
                      <Star
                        key={sIdx}
                        className={`w-4 h-4 ${
                          isFilled
                            ? "fill-amber-400 text-amber-400"
                            : "fill-slate-200 dark:fill-slate-700 text-slate-300 dark:text-slate-600"
                        }`}
                      />
                    );
                  })}
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60">
                  <UserCheck className="w-3 h-3" />
                  <span>{isRtl ? "موصى به" : "Verified"}</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal mb-6">
                &quot;{approvedTestimonials[0].quote}&quot;
              </p>

              <div className="flex items-center justify-between gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm shadow-indigo-500/20">
                    {getInitials(approvedTestimonials[0].name)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                      {approvedTestimonials[0].name}
                    </h4>
                    <p className="text-xs font-medium text-indigo-600 dark:text-cyan-400 truncate">
                      {approvedTestimonials[0].role}
                    </p>
                  </div>
                </div>

                {approvedTestimonials[0].linkedinUrl && (
                  <a
                    href={approvedTestimonials[0].linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${approvedTestimonials[0].name} LinkedIn Profile`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-[#0A66C2]/25 transition-all text-xs font-semibold shrink-0 shadow-2xs"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Multi-item 3D Coverflow Slider (Count >= 2) */
          <>
            <div className="relative w-full max-w-5xl mx-auto h-[480px] sm:h-[420px] flex items-center justify-center [perspective:1200px]">
              {approvedTestimonials.map((item, index) => {
                let diff = index - activeIndex;
                if (diff > count / 2) diff -= count;
                if (diff < -count / 2) diff += count;

                const isCenter = diff === 0;
                const isPrev = diff === -1;
                const isNext = diff === 1;
                const isVisible = isCenter || isPrev || isNext;

                if (!isVisible) return null;

                const xMultiplier = isRtl ? -1 : 1;
                const xOffset = isCenter ? "0%" : diff > 0 ? `${56 * xMultiplier}%` : `${-56 * xMultiplier}%`;
                const rotateAngle = isCenter ? 0 : diff > 0 ? (isRtl ? 16 : -16) : (isRtl ? -16 : 16);
                const scale = isCenter ? 1 : 0.85;
                const zIndex = isCenter ? 30 : 15;
                const opacity = isCenter ? 1 : 0.45;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => {
                      if (!isCenter) setActiveIndex(index);
                    }}
                    initial={false}
                    animate={{
                      x: xOffset,
                      scale,
                      rotateY: rotateAngle,
                      opacity,
                      zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 28,
                      mass: 0.8,
                    }}
                    className={`absolute w-[92%] sm:w-[480px] md:w-[540px] p-6 sm:p-8 rounded-3xl backdrop-blur-md transition-shadow duration-300 select-none ${
                      isCenter
                        ? "bg-white/95 dark:bg-slate-900/95 border-2 border-indigo-500/40 dark:border-cyan-500/40 shadow-2xl shadow-indigo-500/10 dark:shadow-cyan-500/10 cursor-default"
                        : "bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-md cursor-pointer hover:opacity-75"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Quote className="absolute top-6 end-6 w-12 h-12 text-slate-200/70 dark:text-slate-800/60 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, sIdx) => {
                            const starVal = sIdx + 1;
                            const isFilled = starVal <= (item.rating || 5);
                            return (
                              <Star
                                key={sIdx}
                                className={`w-4 h-4 ${
                                  isFilled
                                    ? "fill-amber-400 text-amber-400"
                                    : "fill-slate-200 dark:fill-slate-700 text-slate-300 dark:text-slate-600"
                                }`}
                              />
                            );
                          })}
                        </div>

                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60">
                          <UserCheck className="w-3 h-3" />
                          <span>{isRtl ? "موصى به" : "Verified"}</span>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal mb-6 min-h-[72px] line-clamp-4">
                        &quot;{item.quote}&quot;
                      </p>

                      <div className="flex items-center justify-between gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm shadow-indigo-500/20">
                            {getInitials(item.name)}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                              {item.name}
                            </h4>
                            <p className="text-xs font-medium text-indigo-600 dark:text-cyan-400 truncate">
                              {item.role}
                            </p>
                          </div>
                        </div>

                        {item.linkedinUrl && (
                          <a
                            href={item.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`${item.name} LinkedIn Profile`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-[#0A66C2]/25 transition-all text-xs font-semibold shrink-0 shadow-2xs"
                          >
                            <LinkedInIcon className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">LinkedIn</span>
                            <ExternalLink className="w-3 h-3 opacity-80" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Buttons and Dots */}
            <div className="mt-6 flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={isRtl ? nextSlide : prevSlide}
                  aria-label={isRtl ? "التالي" : "Previous review"}
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-300 dark:hover:border-cyan-500/50 shadow-sm hover:shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
                  {approvedTestimonials.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setActiveIndex(dotIdx)}
                      aria-label={`Slide ${dotIdx + 1}`}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        dotIdx === activeIndex
                          ? "w-6 h-2 bg-indigo-600 dark:bg-cyan-400 shadow-xs"
                          : "w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={isRtl ? prevSlide : nextSlide}
                  aria-label={isRtl ? "السابق" : "Next review"}
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 hover:border-indigo-300 dark:hover:border-cyan-500/50 shadow-sm hover:shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Add Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isSubmitting) setIsModalOpen(false);
              }}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl z-10 my-8"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                disabled={isSubmitting}
                className="absolute top-5 end-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isRtl ? "مشاركة الرأي" : "Share Your Review"}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {isRtl ? "أضف رأيك في العمل معي" : "Add Your Testimonial"}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {isRtl
                    ? "سيتم إرسال رأيك للمراجعة وتأكيده قبل ظهوره في البورتفوليو."
                    : "Your feedback will be sent to Mostafa for verification and publishing."}
                </p>
              </div>

              {submitSuccess && submittedPayload ? (
                <div className="py-6 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-9 h-9 text-emerald-500" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {isRtl ? "شكراً جزيلاً على رأيك!" : "Thank You for Your Review!"}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
                    {isRtl
                      ? "لتأكيد نشر رأيك فوراً في الموقع، اضغط على زر الإرسال عبر واتساب أو الإيميل بالأسفل:"
                      : "To finalize and publish your review right away, please send it directly via WhatsApp or Email below:"}
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                    <a
                      href={getWhatsAppReviewLink(submittedPayload)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>{isRtl ? "إرسال الرأي عبر واتساب" : "Send via WhatsApp"}</span>
                    </a>

                    <a
                      href={getEmailReviewLink(submittedPayload)}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02]"
                    >
                      <Mail className="w-4 h-4 shrink-0" />
                      <span>{isRtl ? "إرسال عبر الإيميل" : "Send via Email"}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="mt-5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
                  >
                    {isRtl ? "إغلاق النافذة" : "Close Window"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        {isRtl ? "اسمك بالكامل *" : "Your Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder={isRtl ? "مثال: م. أحمد سامي" : "e.g. John Doe"}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        {isRtl ? "المسمى الوظيفي أو صفتك *" : "Role / Title / Company *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                        placeholder={isRtl ? "مثال: Senior Data Engineer" : "e.g. Senior Data Scientist"}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* LinkedIn Profile Field (Optional) */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2] dark:text-cyan-400" />
                      <span>
                        {isRtl ? "رابط حسابك على LinkedIn (اختياري)" : "LinkedIn Profile URL (Optional)"}
                      </span>
                    </label>
                    <input
                      type="url"
                      dir="ltr"
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData((prev) => ({ ...prev, linkedinUrl: e.target.value }))}
                      placeholder="https://www.linkedin.com/in/your-profile"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      {isRtl ? "التقييم بالنجوم" : "Rating"}
                    </label>
                    <div className="flex items-center gap-1.5 pt-0.5">
                      {[1, 2, 3, 4, 5].map((val) => {
                        const activeStar = hoverRating ? val <= hoverRating : val <= formData.rating;
                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, rating: val }))}
                            onMouseEnter={() => setHoverRating(val)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 focus:outline-none cursor-pointer transition-transform hover:scale-110"
                          >
                            <Star
                              className={`w-6 h-6 ${
                                activeStar
                                  ? "fill-amber-400 text-amber-400"
                                  : "fill-slate-200 dark:fill-slate-700 text-slate-300 dark:text-slate-600"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      {isRtl ? "رأيك وانطباعك في العمل والتعاون معي *" : "Your Review / Testimonial *"}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.quote}
                      onChange={(e) => setFormData((prev) => ({ ...prev, quote: e.target.value }))}
                      placeholder={
                        isRtl
                          ? "اكتب هنا رأيك عن جودة العمل، الالتزام، أو النتائج المحققة..."
                          : "Share your experience regarding code quality, execution, communication, or results..."
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    />
                  </div>

                  {formError && (
                    <p className="text-xs font-medium text-rose-500 dark:text-rose-400 pt-1">
                      {formError}
                    </p>
                  )}

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      {isRtl ? "إلغاء" : "Cancel"}
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-indigo-500/25 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{isRtl ? "جاري المعالجة..." : "Processing..."}</span>
                        </>
                      ) : (
                        <span>{isRtl ? "إرسال التقييم" : "Submit Review"}</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
