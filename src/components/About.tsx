"use client";

import React from "react";
import { motion } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import {
  User,
  Briefcase,
  Settings,
  GraduationCap,
  Sparkles,
  Mail,
  MapPin,
  Terminal,
  Database,
  Code2,
  TrendingUp,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
    </svg>
  );
}

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

function TargetWithArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <defs>
        <filter id="neonBlurGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <radialGradient id="targetBackdropGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#818cf8" stopOpacity="0.1" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="coreCyanGlow" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="45%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#2563eb" />
        </radialGradient>
        <linearGradient id="purpleRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="blueRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="arrowShaftGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="fletchCyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="fletchPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7e22ce" />
        </linearGradient>
      </defs>

      {/* Ambient Radial Halo */}
      <circle cx="95" cy="100" r="90" fill="url(#targetBackdropGlow)" />

      {/* Outer Metallic Base Disc */}
      <circle cx="95" cy="100" r="80" fill="#090d18" stroke="#1c273c" strokeWidth="2.5" />
      <circle cx="95" cy="100" r="70" fill="none" stroke="#121a2d" strokeWidth="8" />

      {/* Ring 1: Glowing Purple / Indigo Ring */}
      <circle
        cx="95"
        cy="100"
        r="57"
        fill="none"
        stroke="url(#purpleRingGrad)"
        strokeWidth="8"
        filter="url(#neonBlurGlow)"
      />

      {/* Deep Groove Between Rings */}
      <circle cx="95" cy="100" r="47" fill="none" stroke="#090d18" strokeWidth="6" />

      {/* Ring 2: Glowing Electric Blue Ring */}
      <circle
        cx="95"
        cy="100"
        r="38"
        fill="none"
        stroke="url(#blueRingGrad)"
        strokeWidth="9"
        filter="url(#neonBlurGlow)"
      />

      {/* Inner Groove */}
      <circle cx="95" cy="100" r="26" fill="none" stroke="#090d18" strokeWidth="5" />

      {/* Bullseye Core (Radiant Cyan Core) */}
      <circle
        cx="95"
        cy="100"
        r="17"
        fill="url(#coreCyanGlow)"
        filter="url(#neonBlurGlow)"
      />
      <circle cx="95" cy="100" r="4" fill="#ffffff" />

      {/* Embedded Arrow (from 158, 37 to 95, 100) */}
      <g filter="url(#neonBlurGlow)">
        {/* Shaft */}
        <line
          x1="158"
          y1="37"
          x2="95"
          y2="100"
          stroke="url(#arrowShaftGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Arrow Fletching Fins (Feathers) at top-right */}
        {/* Top cyan chevron */}
        <polygon points="152,43 164,31 174,35 160,49" fill="url(#fletchCyan)" />
        {/* Bottom purple chevron */}
        <polygon points="154,41 166,49 172,59 158,53" fill="url(#fletchPurple)" />
        {/* Secondary rear notch */}
        <polygon points="163,33 175,23 183,28 171,40" fill="url(#fletchCyan)" opacity="0.85" />
        <polygon points="166,39 176,47 182,56 170,51" fill="url(#fletchPurple)" opacity="0.85" />
      </g>

      {/* Ambient 4-Point Sparkles and Neon Dust */}
      <path
        d="M 22 45 Q 22 50 17 50 Q 22 50 22 55 Q 22 50 27 50 Q 22 50 22 45 Z"
        fill="#38bdf8"
      />
      <path
        d="M 172 150 Q 172 155 167 155 Q 172 155 172 160 Q 172 155 177 155 Q 172 155 172 150 Z"
        fill="#c084fc"
      />
      <circle cx="34" cy="155" r="1.5" fill="#38bdf8" opacity="0.8" />
      <circle cx="168" cy="85" r="1.5" fill="#c084fc" opacity="0.8" />
      <circle cx="135" cy="170" r="1" fill="#ffffff" opacity="0.6" />
    </svg>
  );
}

function IsometricCubesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      {/* Top Cube */}
      <path d="M14 2L20 5.5L14 9L8 5.5L14 2Z" fill="#d8b4fe" />
      <path d="M8 5.5L14 9V15L8 11.5V5.5Z" fill="#a855f7" />
      <path d="M20 5.5L14 9V15L20 11.5V5.5Z" fill="#7e22ce" />

      {/* Bottom Left Cube */}
      <path d="M8 12.5L14 16L8 19.5L2 16L8 12.5Z" fill="#d8b4fe" />
      <path d="M2 16L8 19.5V25.5L2 22V16Z" fill="#a855f7" />
      <path d="M14 16L8 19.5V25.5L14 22V16Z" fill="#7e22ce" />

      {/* Bottom Right Cube */}
      <path d="M20 12.5L26 16L20 19.5L14 16L20 12.5Z" fill="#d8b4fe" />
      <path d="M14 16L20 19.5V25.5L14 22V16Z" fill="#a855f7" />
      <path d="M26 16L20 19.5V25.5L26 22V16Z" fill="#7e22ce" />
    </svg>
  );
}

function LightningBoltIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 2L3 13.5H12L11 22L21 10.5H12L13 2Z" fill="#3b82f6" />
    </svg>
  );
}

function StepBarsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect x="2" y="15" width="3.5" height="7" rx="1.5" fill="#14b8a6" />
      <rect x="8" y="11" width="3.5" height="11" rx="1.5" fill="#14b8a6" />
      <rect x="14" y="7" width="3.5" height="15" rx="1.5" fill="#14b8a6" />
      <rect x="20" y="3" width="3.5" height="19" rx="1.5" fill="#14b8a6" />
    </svg>
  );
}

export default function About() {
  const { content, language } = useThemeLanguage();
  const isAr = language === "ar";
  const about = content.about;

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO HEADER: PROFILE & WORKSTATION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 lg:mb-12">
          
          {/* Left Column: Heading, Subtitle & Tagline Quote */}
          <div className="lg:col-span-7">
            {/* Category Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-indigo-500/10 dark:bg-cyan-500/10 text-indigo-600 dark:text-cyan-400 border border-indigo-500/20 dark:border-cyan-500/25 mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? "نبذة عني" : "ABOUT ME"}</span>
            </div>

            {/* Main Headline: Mostafa Morad */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none mb-2">
              <span>{isAr ? "مصطفى " : "Mostafa "}</span>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {isAr ? "مراد" : "Morad"}
              </span>
            </h2>

            {/* Role Title */}
            <p className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-400 mb-6">
              {isAr ? "مهندس بيانات ومطور برمجيات" : "Data Engineer & Software Developer"}
            </p>

            {/* Tagline Card with Vertical Accent Line */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-sm backdrop-blur-md border-s-4 border-s-indigo-600 dark:border-s-cyan-400 max-w-xl">
              <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed italic">
                &ldquo;{about.subtitle || (isAr
                  ? "ردم الفجوة بين فوضى البيانات الخام والتطبيقات الجاهزة للإنتاج"
                  : "Bridging the gap between raw data chaos and production-ready applications")}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Sleek 3D Developer Workstation Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md rounded-3xl p-5 bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-950 border border-indigo-500/30 shadow-2xl shadow-indigo-950/50 overflow-hidden"
            >
              {/* Ambient Neon Purple Backlight Glow */}
              <div className="absolute -top-12 -end-12 w-48 h-48 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -start-12 w-48 h-48 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />

              {/* Laptop Screen Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[10px] text-slate-400 font-mono ms-2 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    lakehouse_etl.py
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  PySpark 3.5
                </span>
              </div>

              {/* Realistic Syntax Highlighting Code Window */}
              <div className="font-mono text-[11px] sm:text-xs leading-relaxed space-y-1 relative z-10 text-slate-300">
                <p className="text-slate-500 italic"># Scalable Data Platform Pipeline</p>
                <p>
                  <span className="text-purple-400 font-bold">from</span>{" "}
                  <span className="text-cyan-300">pyspark.sql</span>{" "}
                  <span className="text-purple-400 font-bold">import</span>{" "}
                  <span className="text-amber-300">SparkSession</span>
                </p>
                <p className="pt-1">
                  <span className="text-blue-400">spark</span> = SparkSession.builder \
                </p>
                <p className="ps-4 text-slate-400">
                  .appName(<span className="text-emerald-300">&quot;DataPlatform&quot;</span>) \
                </p>
                <p className="ps-4 text-slate-400">.getOrCreate()</p>
                <p className="pt-1">
                  <span className="text-blue-400">raw_events</span> = spark.read.parquet(
                  <span className="text-emerald-300">&quot;s3://lakehouse/raw/&quot;</span>)
                </p>
                <p>
                  <span className="text-blue-400">gold_df</span> = raw_events.filter(
                  <span className="text-amber-300">valid == True</span>).optimize()
                </p>
                <p className="text-cyan-300 pt-1">
                  gold_df.write.mode(<span className="text-emerald-300">&quot;overwrite&quot;</span>).saveAsTable(
                  <span className="text-emerald-300">&quot;analytics.production&quot;</span>)
                </p>
              </div>

              {/* Floating Desk Mug Badge Accent */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-xs shadow-inner">
                    ☕
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-wider uppercase text-slate-300 block">
                      DATA DRIVEN DECISIONS
                    </span>
                    <span className="text-[9px] text-slate-500 block">
                      {isAr ? "هندسة تعتمد على المعايير الصارمة" : "Rigorous Engineering Standards"}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= BENTO GRID CONTAINER ================= */}
        <div className="space-y-6 lg:space-y-8">
          
          {/* ROW 1: WHO I AM (Left) & PROFESSIONAL BACKGROUND (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* 1. WHO I AM CARD (lg:col-span-7) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-white/85 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                {/* Header with Circular Icon & Title Accent Line */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 dark:bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm shadow-indigo-500/20">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {about.hookTitle || (isAr ? "من أنا" : "Who I Am")}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-1.5" />
                  </div>
                </div>

                {/* Bio Description Paragraphs */}
                <div className="space-y-4 text-sm sm:text-base font-normal text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  <p>
                    {isAr
                      ? "مهندس بيانات شغوف وطالب بقسم بحوث العمليات ودعم اتخاذ القرار (OR & DS) بكلية الحاسبات والذكاء الاصطناعي - جامعة القاهرة (FCAI-CU)."
                      : "I'm a results-driven Data Engineer and an Operations Research & Decision Support (OR & DS) student at Cairo University (FCAI-CU)."}
                  </p>
                  <p>
                    {isAr
                      ? "أركز على بناء أنظمة بيانات قابلة للتوسع، وخطوط معالجة عالية الأداء (ETL/ELT)، وتطبيقات ويب حديثة تحوّل البيانات المعقدة إلى نماذج وقرارات دقيقة ورؤى قابلة للتنفيذ."
                      : "I specialize in building scalable data systems, high-performance ETL/ELT pipelines, and data-driven web applications that turn complex data into optimized, actionable insights."}
                  </p>
                </div>
              </div>

              {/* Bottom Mini Credential Badges */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* Badge 1: Cairo University */}
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-500 dark:text-purple-400 shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-slate-900 dark:text-white block truncate">
                        Cairo University
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                        OR & DS
                      </span>
                    </div>
                  </div>

                  {/* Badge 2: DEPI */}
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-500 dark:text-amber-400 shrink-0">
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-amber-500 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      </span>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-slate-900 dark:text-white block truncate">
                        DEPI
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                        Data Engineering
                      </span>
                    </div>
                  </div>

                  {/* Badge 3: Huawei */}
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center text-red-500 dark:text-red-400 shrink-0 font-bold text-xs">
                      ★
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-slate-900 dark:text-white block truncate">
                        Huawei
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                        HCIA Big Data
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. PROFESSIONAL BACKGROUND CARD (lg:col-span-5) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-white/85 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                {/* Header with Circular Icon & Title Accent Line */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/15 dark:bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm shadow-blue-500/20">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {about.experienceTitle || (isAr ? "المسار المهني" : "Professional Background")}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-1.5" />
                  </div>
                </div>

                {/* Vertical Connected Pathway Timeline */}
                <div className="space-y-6 border-s-2 border-slate-200 dark:border-slate-800 ms-3 ps-6 relative">
                  {/* Point 1: DEPI */}
                  <div className="relative group">
                    <div className="absolute -start-[31px] top-1.5 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20 dark:ring-purple-400/20" />
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                      DEPI — Data Engineering
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 mt-1">
                      {isAr ? "تدريب مهني وتطوير احترافي" : "Training & Professional Development"}
                    </p>
                  </div>

                  {/* Point 2: GEN Academy */}
                  <div className="relative group">
                    <div className="absolute -start-[31px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20 dark:ring-blue-400/20" />
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                      GEN Academy — Web Development
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                      {isAr ? "مشاريع إنتاجية فعلية" : "Hands-on Production Projects"}
                    </p>
                  </div>

                  {/* Point 3: Mindrift / OpenTrain AI */}
                  <div className="relative group">
                    <div className="absolute -start-[31px] top-1.5 w-3 h-3 rounded-full bg-teal-400 ring-4 ring-teal-500/20 dark:ring-teal-400/20" />
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                      Mindrift / OpenTrain AI — Freelance
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-teal-600 dark:text-teal-400 mt-1">
                      {isAr ? "هندسة أتمتة وتدفق البيانات" : "Data Workflow Engineering"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ROW 2: UNIQUE SELLING PROPOSITION (USP) - FULL-WIDTH FEATURE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative p-6 sm:p-8 lg:p-10 rounded-[28px] sm:rounded-3xl bg-[#080d1a] dark:bg-[#070b16] border border-[#1b263e] dark:border-[#182338] shadow-2xl shadow-indigo-950/40 overflow-hidden"
          >
            {/* Dot Matrix in Bottom-Start Corner */}
            <div className="absolute bottom-4 start-5 sm:bottom-6 sm:start-8 grid grid-cols-4 gap-1.5 opacity-25 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="w-1 h-1 rounded-full bg-cyan-400" />
              ))}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
              {/* Left Side: Prominent 3D Bullseye Target with Arrow */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 relative flex items-center justify-center">
                  <TargetWithArrowIcon className="w-full h-full drop-shadow-[0_10px_25px_rgba(59,130,246,0.3)]" />
                </div>
              </div>

              {/* Right Side: Statement & 3 Divided Pillars */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  {/* Eyebrow Label */}
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-purple-400 dark:text-purple-300 block mb-2.5">
                    {isAr ? "القيمة المضافة الفريدة" : "UNIQUE SELLING PROPOSITION"}
                  </span>

                  {/* USP Statement */}
                  <p className="text-lg sm:text-xl lg:text-[23px] xl:text-[25px] font-extrabold text-white leading-snug tracking-tight mb-6">
                    {isAr ? (
                      <>
                        أربط بين هندسة البيانات وتطوير الويب لبناء أنظمة قابلة للتوسع تحوّل البيانات الخام إلى{" "}
                        <span className="text-[#38bdf8] font-black">حلول موثوقة، وقابلة للتنفيذ</span>.
                      </>
                    ) : (
                      <>
                        I bridge Data Engineering and Web Development to build scalable systems that transform raw data into{" "}
                        <span className="text-[#38bdf8] font-black">reliable, actionable</span> solutions.
                      </>
                    )}
                  </p>
                </div>

                {/* 3 Pillars in a Row with Vertical Dividers */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 pt-2">
                  {/* Pillar 1: Scalable Architecture */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center shrink-0">
                      <IsometricCubesIcon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {isAr ? "معمارية" : "Scalable"}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-400 leading-tight">
                        {isAr ? "قابلة للتوسع" : "Architecture"}
                      </span>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden sm:block w-px h-8 bg-slate-800 dark:bg-slate-800" aria-hidden="true" />

                  {/* Pillar 2: High-Performance Pipelines */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center shrink-0">
                      <LightningBoltIcon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {isAr ? "خطوط معالجة" : "High-Performance"}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-400 leading-tight">
                        {isAr ? "عالية الأداء" : "Pipelines"}
                      </span>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden sm:block w-px h-8 bg-slate-800 dark:bg-slate-800" aria-hidden="true" />

                  {/* Pillar 3: Data-Driven Applications */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center shrink-0">
                      <StepBarsIcon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {isAr ? "تطبيقات مدفوعة" : "Data-Driven"}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-400 leading-tight">
                        {isAr ? "بالبيانات" : "Applications"}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* ROW 3: CORE EXPERTISE (3 DOMAINS) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-7 sm:p-9 rounded-3xl bg-white/85 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            {/* Section Header */}
            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-sm shadow-cyan-500/20">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {about.expertiseTitle || (isAr ? "مجالات الخبرة الأساسية" : "Core Expertise")}
              </h3>
            </div>

            {/* 3 Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Column 1: DATA ENGINEERING */}
              <div className="relative p-6 rounded-2xl bg-slate-50/90 dark:bg-black/40 border border-slate-200/70 dark:border-white/5 flex flex-col justify-between overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xs sm:text-sm font-bold text-purple-600 dark:text-purple-400 mb-4 uppercase tracking-wider">
                    {isAr ? "هندسة البيانات" : "DATA ENGINEERING"}
                  </h4>
                  <ul className="space-y-2.5">
                    {["ETL / ELT", "Data Warehousing", "SQL & Query Optimization", "Database Design"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Decorative Subtle Stacked Database Disc Graphic */}
                <div className="absolute -bottom-2 -end-2 opacity-15 pointer-events-none text-purple-500">
                  <Database className="w-24 h-24" />
                </div>
              </div>

              {/* Column 2: DEVELOPMENT */}
              <div className="relative p-6 rounded-2xl bg-slate-50/90 dark:bg-black/40 border border-slate-200/70 dark:border-white/5 flex flex-col justify-between overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
                    {isAr ? "تطوير البرمجيات" : "DEVELOPMENT"}
                  </h4>
                  <ul className="space-y-2.5">
                    {["Next.js", "Full-Stack Development", "REST APIs"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Decorative Subtle Code Brackets Graphic */}
                <div className="absolute -bottom-2 -end-2 opacity-15 pointer-events-none text-blue-500">
                  <Code2 className="w-24 h-24" />
                </div>
              </div>

              {/* Column 3: DATA & BI */}
              <div className="relative p-6 rounded-2xl bg-slate-50/90 dark:bg-black/40 border border-slate-200/70 dark:border-white/5 flex flex-col justify-between overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 mb-4 uppercase tracking-wider">
                    {isAr ? "البيانات و BI" : "DATA & BI"}
                  </h4>
                  <ul className="space-y-2.5">
                    {["Data Analytics", "Business Intelligence", "Data Pipelines"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Decorative Subtle Bar Chart Graphic */}
                <div className="absolute -bottom-2 -end-2 opacity-15 pointer-events-none text-cyan-500">
                  <TrendingUp className="w-24 h-24" />
                </div>
              </div>

            </div>
          </motion.div>

          {/* ROW 4: BOTTOM QUICK CONTACT / INFO BAR */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="p-4 sm:p-5 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              
              {/* GitHub */}
              <a
                href="https://github.com/mostafamorad1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                    GitHub
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white truncate block group-hover:text-purple-500 transition-colors">
                    mostafamorad1
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mostafa-morad-sayed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedInIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                    LinkedIn
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white truncate block group-hover:text-blue-500 transition-colors">
                    mostafa-morad-sayed
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:mostafa.morad.dev@gmail.com"
                className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                    Email
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white truncate block group-hover:text-teal-500 transition-colors">
                    mostafa.morad.dev@gmail.com
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-2.5 rounded-2xl">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                    {isAr ? "الموقع" : "Location"}
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white truncate block">
                    {isAr ? "الجيزة، مصر" : "Giza, Egypt"}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
