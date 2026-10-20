"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import {
  Layers,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Layout,
  Database,
  FileText,
  Presentation,
  Type,
  BookOpen,
  Table,
  ListOrdered,
  Languages,
  FileCheck,
  Palette,
  PieChart,
  PlayCircle,
  FileSpreadsheet,
} from "lucide-react";
import PricingModal from "./PricingModal";

// --- Authentic Technical Brand & Feature SVGs ---

function FigmaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}

function ReactIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF"/>
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

function TailwindIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
    </svg>
  );
}

function NextJsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="90" r="90" fill="#020617" stroke="#334155" strokeWidth="6"/>
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white"/>
      <path d="M115 54H127V126H115V54Z" fill="white"/>
    </svg>
  );
}

function CodeBracketsIcon() {
  return (
    <span className="font-mono font-bold text-amber-400 text-base sm:text-lg select-none tracking-tighter">
      &lt;/&gt;
    </span>
  );
}

function ResponsiveDevicesIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="14" height="10" rx="2" />
      <line x1="6" y1="17" x2="12" y2="17" />
      <line x1="9" y1="13" x2="9" y2="17" />
      <rect x="15" y="8" width="7" height="13" rx="2" fill="#0F172A" stroke="#93C5FD" strokeWidth="1.5" />
      <circle cx="18.5" cy="18" r="0.7" fill="#93C5FD" />
    </svg>
  );
}

function PythonIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.91 2C6.91 2 7.22 4.17 7.22 4.17L7.23 6.42H12.01V7.93H4.37S2 7.66 2 12.65C2 17.64 4.07 17.38 4.07 17.38H5.56V15.14S5.48 12.65 10.46 12.65H15.22S17.47 12.65 17.47 10.42V4.42S17.82 2 11.91 2ZM9.07 3.38C9.58 3.38 10 3.79 10 4.31C10 4.82 9.58 5.23 9.07 5.23C8.56 5.23 8.14 4.82 8.14 4.31C8.14 3.79 8.56 3.38 9.07 3.38Z" fill="#387EB8"/>
      <path d="M12.09 22C17.09 22 16.78 19.83 16.78 19.83L16.77 17.58H11.99V16.07H17.63S20 16.34 20 11.35C20 6.36 17.93 6.62 17.93 6.62H16.44V8.86S16.52 11.35 11.54 11.35H6.78S4.53 11.35 4.53 13.58V19.58S4.18 22 12.09 22ZM14.93 20.62C14.42 20.62 14 20.21 14 19.69C14 19.18 14.42 18.77 14.93 18.77C15.44 18.77 15.86 19.18 15.86 19.69C15.86 20.21 15.44 20.62 14.93 20.62Z" fill="#FFE052"/>
    </svg>
  );
}

function DatabaseSqlIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function PipelineIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="6" height="12" rx="2" />
      <rect x="16" y="6" width="6" height="12" rx="2" />
      <path d="M8 12h8" />
      <path d="M12 9l3 3-3 3" />
    </svg>
  );
}

function DataQualityIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SchemaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4" />
      <path d="M6.5 10v4" />
      <path d="M17.5 10v4" />
    </svg>
  );
}

function PowerBiIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="12" width="4" height="9" rx="1" fill="#F2C811"/>
      <rect x="10" y="7" width="4" height="14" rx="1" fill="#F2C811"/>
      <rect x="17" y="3" width="4" height="18" rx="1" fill="#F2C811"/>
    </svg>
  );
}

// --- Structured Data for Service Cards ---

interface ServiceFeatureItem {
  title: Record<"en" | "ar", string>;
  description: Record<"en" | "ar", string>;
  icon: React.ReactNode;
}

interface ServiceCardDefinition {
  id: "portfolio-dev" | "data-engineering" | "doc-formatting" | "presentation-design";
  pricingCategoryId: string;
  badge: Record<"en" | "ar", string>;
  titlePrefix: Record<"en" | "ar", string>;
  titleHighlight: Record<"en" | "ar", string>;
  description: Record<"en" | "ar", string>;
  buttonText: Record<"en" | "ar", string>;
  features: ServiceFeatureItem[];
}

const serviceCardsData: ServiceCardDefinition[] = [
  {
    id: "portfolio-dev",
    pricingCategoryId: "portfolio",
    badge: { en: "SERVICES", ar: "خدمات الويب" },
    titlePrefix: { en: "Portfolio Development &", ar: "تطوير مواقع" },
    titleHighlight: { en: "Web Apps", ar: "البورتفوليو والويب" },
    description: {
      en: "Design and develop modern, responsive, and blazing-fast personal websites and portfolio showcases using Next.js, React, and Tailwind CSS to attract high-value opportunities.",
      ar: "تصميم وبرمجة مواقع شخصية وبورتفوليو عصرية وسريعة الاستجابة باستخدام Next.js و React و Tailwind CSS لعرض مهاراتك وجذب الفرص والعملاء.",
    },
    buttonText: { en: "Explore Packages", ar: "استعراض الباقات والأسعار" },
    features: [
      {
        title: { en: "UI/UX Design", ar: "تصميم واجهات UI/UX" },
        description: {
          en: "Custom, modern, and user-friendly UI/UX designs tailored to your brand and goals.",
          ar: "تصاميم واجهات حديثة ومخصصة تركز على تجربة المستخدم وتعكس هويتك.",
        },
        icon: <FigmaIcon />,
      },
      {
        title: { en: "Frontend Development", ar: "تطوير الواجهات التفاعلية" },
        description: {
          en: "Smooth, interactive, and responsive web apps using React and modern technologies.",
          ar: "تطبيقات ويب تفاعلية وسريعة بالاعتماد على React وأحدث التقنيات الحديثة.",
        },
        icon: <ReactIcon />,
      },
      {
        title: { en: "Tailwind CSS", ar: "تنسيقات Tailwind CSS" },
        description: {
          en: "Clean, flexible, and beautiful designs with utility-first CSS for faster development.",
          ar: "تنسيقات أنيقة ومرنة تضمن سرعة التصفح وتناسق الألوان والخطوط.",
        },
        icon: <TailwindIcon />,
      },
      {
        title: { en: "Next.js Integration", ar: "تكامل مع Next.js" },
        description: {
          en: "SEO-friendly, high-performance websites with modern Next.js features.",
          ar: "مواقع فائقة السرعة ومهيأة لمحركات البحث SEO بأحدث مزايا Next.js.",
        },
        icon: <NextJsIcon />,
      },
      {
        title: { en: "React & JavaScript", ar: "كود نظيف وقابل للتوسع" },
        description: {
          en: "Clean, maintainable code and scalable solutions using the latest React and JavaScript practices.",
          ar: "كود برمجي نظيف وموثق وقابل للتطوير وفق أعلى المعايير الهندسية.",
        },
        icon: <CodeBracketsIcon />,
      },
      {
        title: { en: "Responsive & Modern Design", ar: "تصميم متجاوب بالكامل" },
        description: {
          en: "Perfect look and performance on all devices, from mobile to desktop.",
          ar: "أداء ومظهر متناسق ومثالي على كافة الشاشات من الهواتف إلى الحواسيب.",
        },
        icon: <ResponsiveDevicesIcon />,
      },
    ],
  },
  {
    id: "data-engineering",
    pricingCategoryId: "data-engineering",
    badge: { en: "DATA SOLUTIONS", ar: "هندسة البيانات" },
    titlePrefix: { en: "Data Engineering &", ar: "هندسة ومعالجة البيانات &" },
    titleHighlight: { en: "ETL Pipelines", ar: "خطوط التدفق ETL" },
    description: {
      en: "Build automated data processing pipelines, cleaning routines, and validation workflows using Python, SQL, and Pandas to transform raw records into structured datasets.",
      ar: "بناء خطوط تدفق ومعالجة بيانات آلية، وتطوير خوارزميات تنظيف وتحقق احترافية باستخدام Python و SQL لتحويل البيانات الخام إلى مخرجات قيّمة.",
    },
    buttonText: { en: "Explore Packages", ar: "استعراض باقات البيانات" },
    features: [
      {
        title: { en: "Python & Pandas", ar: "معالجة بايثون المؤتمتة" },
        description: {
          en: "Fast, memory-efficient data manipulation, parsing, and automated scripts.",
          ar: "سكربتات بايثون سريعة وفعالة لتنظيف وهيكلة الملفات والبيانات المعقدة.",
        },
        icon: <PythonIcon />,
      },
      {
        title: { en: "SQL & Databases", ar: "استعلامات وهندسة SQL" },
        description: {
          en: "Optimized relational schemas, high-performance queries, and integrity checks.",
          ar: "تصميم واستعلامات SQL متقدمة وفحص دقيق لسلامة البيانات وتكاملها.",
        },
        icon: <DatabaseSqlIcon />,
      },
      {
        title: { en: "Automated ETL Pipelines", ar: "خطوط تدفق ETL آلية" },
        description: {
          en: "End-to-end extraction, transformation, and automated scheduled ingestion.",
          ar: "بناء خطوط تدفق متكاملة لاستخراج وتنظيف ونقل البيانات بجدولة آلية.",
        },
        icon: <PipelineIcon />,
      },
      {
        title: { en: "Data Quality & Validation", ar: "فحص الجودة وضبط الدقة" },
        description: {
          en: "Deduplication, anomaly detection, missing value handling, and validation rules.",
          ar: "إزالة التكرار واكتشاف الشذوذ وفرض قواعد تحقق تضمن دقة النتائج.",
        },
        icon: <DataQualityIcon />,
      },
      {
        title: { en: "Data Modeling & Schemas", ar: "نمذجة وهيكلة البيانات" },
        description: {
          en: "Structured dimensional models, star schemas, and warehouse readiness.",
          ar: "بناء نماذج بيانات مهيكلة ومخططات قياسية جاهزة لمخازن البيانات.",
        },
        icon: <SchemaIcon />,
      },
      {
        title: { en: "BI & Analytics Integration", ar: "تكامل مع لوحات Power BI" },
        description: {
          en: "Clean structured datasets ready for Power BI dashboards and reporting.",
          ar: "تجهيز جداول البيانات النظيفة لتغذية لوحات التحكم والتقارير التنفيذية.",
        },
        icon: <PowerBiIcon />,
      },
    ],
  },
  {
    id: "doc-formatting",
    pricingCategoryId: "documents",
    badge: { en: "DOCUMENTATION", ar: "تنسيق المستندات" },
    titlePrefix: { en: "Executive Word & PDF", ar: "تنسيق مستندات" },
    titleHighlight: { en: "Formatting & Layout", ar: "Word & PDF الاحترافي" },
    description: {
      en: "Format academic papers, business reports, and multi-page manuals into elegant, executive-ready documents with strict typographical consistency.",
      ar: "تحويل المسودات والنصوص إلى تقارير وأبحاث ومستندات رسمية منسقة بأعلى معايير الدقة والترتيب والطباعة الاحترافية.",
    },
    buttonText: { en: "Explore Packages", ar: "استعراض باقات المستندات" },
    features: [
      {
        title: { en: "Consistent Typography", ar: "تناسق وتدرج الخطوط" },
        description: {
          en: "Professional font hierarchy, line spacing, and tailored typographic styles.",
          ar: "تنسيق دقيق لتسلسل الخطوط والعناوين والهوامش لراحة القراءة والطباعة.",
        },
        icon: <Type className="w-5 h-5 text-sky-400" />,
      },
      {
        title: { en: "Custom Cover & Layout", ar: "تصميم غلاف وهوامش مخصصة" },
        description: {
          en: "Bespoke modern cover pages, precise margins, headers, and footers.",
          ar: "أغلفة عصرية وتنسيق متقن للترويسات والتذييلات وهوامش الصفحة الرسمية.",
        },
        icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      },
      {
        title: { en: "Complex Tables & Data", ar: "تنسيق الجداول والبيانات" },
        description: {
          en: "Formatted financial, technical, and data tables with clean alignment.",
          ar: "تنظيم الجداول الرقمية والبيانات المعقدة ومحاذاتها بوضوح وأناقة.",
        },
        icon: <Table className="w-5 h-5 text-emerald-400" />,
      },
      {
        title: { en: "Automated TOC & Indexing", ar: "فهارس محتويات تلقائية" },
        description: {
          en: "Dynamic Table of Contents, figure lists, and cross-references.",
          ar: "فهارس آلية التحديث لأرقام الصفحات والعناوين والجداول والصور.",
        },
        icon: <ListOrdered className="w-5 h-5 text-amber-400" />,
      },
      {
        title: { en: "Bilingual (AR & EN)", ar: "تنسيق ثنائي اللغة (عربي وإنجليزي)" },
        description: {
          en: "Flawless right-to-left Arabic mixed with English terminology without errors.",
          ar: "ضبط دمج النصوص الإنجليزية والعربية في نفس الفقرات بدون أخطاء اتجاه.",
        },
        icon: <Languages className="w-5 h-5 text-purple-400" />,
      },
      {
        title: { en: "Print & Editable Deliverables", ar: "تسليم ملفات قابلة للتعديل والطباعة" },
        description: {
          en: "Delivered as fully editable .docx along with print-ready high-res PDF.",
          ar: "تسليم ملف Word مفتوح وقابل للتعديل + ملف PDF فائق الدقة للطباعة.",
        },
        icon: <FileCheck className="w-5 h-5 text-teal-400" />,
      },
    ],
  },
  {
    id: "presentation-design",
    pricingCategoryId: "presentations",
    badge: { en: "PRESENTATIONS", ar: "العروض التقديمية" },
    titlePrefix: { en: "PowerPoint Slides &", ar: "تصميم عروض" },
    titleHighlight: { en: "Pitch Decks", ar: "PowerPoint التقديمية" },
    description: {
      en: "Create visually captivating slide decks for startup pitches, executive meetings, and graduation defenses with cohesive visual style and impactful diagrams.",
      ar: "تصميم سلايدات وعروض تقديمية بصرية جذابة للمشاريع، الشركات، الاجتماعات، ومناقشات التخرج بأسلوب بصري منظم ومقنع.",
    },
    buttonText: { en: "Explore Packages", ar: "استعراض باقات العروض" },
    features: [
      {
        title: { en: "Brand Identity & Themes", ar: "هوية بصرية متناسقة" },
        description: {
          en: "Harmonious color palettes, typography, and branded slide templates.",
          ar: "ألوان مريحة وهوية بصرية متناسقة ومميزة تخدم فكرة وموضوع العرض.",
        },
        icon: <Palette className="w-5 h-5 text-rose-400" />,
      },
      {
        title: { en: "Data-Driven Infographics", ar: "إنفوجرافيك ومخططات بيانية" },
        description: {
          en: "Custom visual charts, timelines, roadmaps, and infographics.",
          ar: "تحويل الأرقام والمعلومات الجافة إلى مخططات ورسوم بيانية جذابة.",
        },
        icon: <PieChart className="w-5 h-5 text-amber-400" />,
      },
      {
        title: { en: "Visual Storytelling", ar: "سرد بصري مؤثر ومنظم" },
        description: {
          en: "Slide layouts structured for maximum audience engagement and clarity.",
          ar: "ترتيب منطقي وسرد بصري يشد انتباه الجمهور ويوصل الفكرة بوضوح.",
        },
        icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      },
      {
        title: { en: "Clean Transitions & Motion", ar: "حركات وانتقالات انسيابية" },
        description: {
          en: "Clean, modern animations and transitions without visual clutter.",
          ar: "مؤثرات حركية خفيفة وأنيقة تزيد من حيوية العرض واحترافيته.",
        },
        icon: <PlayCircle className="w-5 h-5 text-cyan-400" />,
      },
      {
        title: { en: "Pitch Decks & Defenses", ar: "عروض الشركات والمشاريع" },
        description: {
          en: "Tailored structure for investors, executive boardrooms, or academic thesis.",
          ar: "هيكلة مدروسة لمناقشات التخرج، عروض المستثمرين، والشركات.",
        },
        icon: <Presentation className="w-5 h-5 text-pink-400" />,
      },
      {
        title: { en: "Editable Source Files", ar: "ملفات أصلية مفتوحة المصدر" },
        description: {
          en: "Delivered as fully editable 16:9 .pptx plus instant presentation PDF.",
          ar: "تسليم ملف PowerPoint أصلي مفتوح بالكامل + نسخة PDF للعرض السريع.",
        },
        icon: <FileSpreadsheet className="w-5 h-5 text-blue-400" />,
      },
    ],
  },
];

type TabId = "portfolio-dev" | "data-engineering" | "doc-formatting" | "presentation-design" | "all";

export default function Services() {
  const { content, language } = useThemeLanguage();
  const services = content.services;
  const isAr = language === "ar";

  const [activeTab, setActiveTab] = useState<TabId>("portfolio-dev");
  const [hoveredTab, setHoveredTab] = useState<TabId | null>(null);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("portfolio");

  // Ref & width for dynamic single-path SVG background
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [navWidth, setNavWidth] = useState<number>(680);

  useEffect(() => {
    if (!navContainerRef.current) return;
    const el = navContainerRef.current;
    const updateWidth = () => {
      if (el) {
        setNavWidth(Math.max(el.offsetWidth, 360));
      }
    };
    updateWidth();

    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // 4 Services in top row
  const mainTabs: { id: Exclude<TabId, "all">; label: Record<"en" | "ar", string>; icon: React.ElementType }[] = [
    {
      id: "portfolio-dev",
      label: { en: "Portfolio & Web", ar: "البورتفوليو والويب" },
      icon: Layout,
    },
    {
      id: "data-engineering",
      label: { en: "Data Engineering", ar: "هندسة البيانات" },
      icon: Database,
    },
    {
      id: "doc-formatting",
      label: { en: "Word & PDF", ar: "المستندات و PDF" },
      icon: FileText,
    },
    {
      id: "presentation-design",
      label: { en: "Slide Decks", ar: "العروض التقديمية" },
      icon: Presentation,
    },
  ];

  const allTab = {
    id: "all" as const,
    label: { en: "All Services", ar: "كل الخدمات" },
    icon: Layers,
  };

  const handleOpenPricing = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsPricingOpen(true);
  };

  // Dimensions for continuous unified SVG path:
  // Top bar height = 50px, Bottom tab height = 38px, Tab width = 160px
  const H1 = 50;
  const H2 = 38;
  const totalH = H1 + H2;
  const tabW = 160;
  const Rtop = 24;
  const Rcurve = 18;
  const Rtab = 16;
  const W = navWidth;

  const X1 = Math.max((W - tabW) / 2, Rtop + Rcurve);
  const X2 = X1 + tabW;

  // Single continuous outline path - Zero seams, zero dividing lines!
  const unifiedPath = `
    M ${Rtop},0
    L ${W - Rtop},0
    A ${Rtop},${Rtop} 0 0 1 ${W},${Rtop}
    L ${W},${H1 - Rtop}
    A ${Rtop},${Rtop} 0 0 1 ${W - Rtop},${H1}
    L ${X2 + Rcurve},${H1}
    Q ${X2},${H1} ${X2},${H1 + Rcurve}
    L ${X2},${H1 + H2 - Rtab}
    A ${Rtab},${Rtab} 0 0 1 ${X2 - Rtab},${totalH}
    L ${X1 + Rtab},${totalH}
    A ${Rtab},${Rtab} 0 0 1 ${X1},${H1 + H2 - Rtab}
    L ${X1},${H1 + Rcurve}
    Q ${X1},${H1} ${X1 - Rcurve},${H1}
    L ${Rtop},${H1}
    A ${Rtop},${Rtop} 0 0 1 0,${H1 - Rtop}
    L 0,${Rtop}
    A ${Rtop},${Rtop} 0 0 1 ${Rtop},0
    Z
  `.trim().replace(/\s+/g, " ");

  const singleService = serviceCardsData.find((card) => card.id === activeTab);

  return (
    <section id="services" className="py-20 md:py-28 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-slate-800/80 text-indigo-600 dark:text-cyan-300 border border-indigo-200/60 dark:border-slate-700/80 mb-3.5 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" aria-hidden="true" />
            <span className="uppercase tracking-wider">{services.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {services.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {services.subtitle}
          </p>

          {/* Pricing Plans Direct Button */}
          <div className="mt-6 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleOpenPricing(selectedCategory || "portfolio")}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 dark:from-cyan-500 dark:via-blue-600 dark:to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/20 dark:shadow-cyan-500/15 hover:shadow-lg transition-all border border-indigo-400/25 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>{services.viewPricing || (isAr ? "عرض باقات وخطط الأسعار" : "View Pricing Plans")}</span>
              {isAr ? (
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Unified Continuous Snake Navbar with Curved "All Services" Tab and Magnetic Pull Animation */}
        <div className="flex justify-center mb-12 w-full overflow-x-auto py-2 no-scrollbar">
          <LayoutGroup id="servicesUnifiedNavbar">
            <div
              id="servicesSubNav"
              ref={navContainerRef}
              className="relative inline-flex flex-col items-center select-none shrink-0"
              style={{ width: "fit-content", minHeight: `${totalH}px` }}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {/* Single Continuous SVG Boundary - Zero Seams & Zero Dividing Lines */}
              <svg
                width={W}
                height={totalH}
                viewBox={`0 0 ${W} ${totalH}`}
                className="absolute inset-0 pointer-events-none -z-10 drop-shadow-md"
                aria-hidden="true"
              >
                <defs>
                  <clipPath id="unifiedNavbarCurveClip">
                    <path d={unifiedPath} />
                  </clipPath>
                </defs>
                <path
                  d={unifiedPath}
                  className="fill-slate-100/95 dark:fill-slate-900/95 stroke-slate-200/90 dark:stroke-slate-800/90"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Row 1: The 4 Main Category Tabs (NEVER WRAP) */}
              <div
                className="flex items-center justify-center flex-nowrap whitespace-nowrap gap-1 sm:gap-2 px-3"
                style={{ height: `${H1}px` }}
              >
                {mainTabs.map((tab) => {
                  const Icon = tab.icon;
                  const currentDisplayTab = hoveredTab ?? activeTab;
                  const isPillHere = currentDisplayTab === tab.id;
                  const isSelected = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                      }}
                      onMouseEnter={() => setHoveredTab(tab.id)}
                      className={`relative px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs md:text-sm font-bold transition-colors flex items-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer ${
                        isPillHere
                          ? "text-indigo-600 dark:text-cyan-400"
                          : isSelected
                          ? "text-indigo-500/90 dark:text-cyan-300/90"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {/* Active / Hover Gliding Pill */}
                      {isPillHere && (
                        <motion.div
                          layoutId="activeServiceSnakePill"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                            mass: 0.6,
                          }}
                          className="absolute inset-0 bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-md border border-slate-200/90 dark:border-slate-700/90 -z-10"
                        />
                      )}

                      <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{tab.label[language]}</span>

                      {/* Subtle anchor indicator showing currently selected service when hovering other tabs */}
                      {isSelected && !isPillHere && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-cyan-400 animate-pulse ms-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Row 2: Centered "All Services" Tab with Downward Seamless Curve */}
              <div
                className="flex items-center justify-center"
                style={{ height: `${H2}px`, width: `${tabW}px` }}
              >
                {(() => {
                  const currentDisplayTab = hoveredTab ?? activeTab;
                  const isPillHere = currentDisplayTab === "all";
                  const isSelected = activeTab === "all";

                  return (
                    <button
                      onClick={() => {
                        setActiveTab("all");
                      }}
                      onMouseEnter={() => setHoveredTab("all")}
                      className={`relative w-full h-full flex items-center justify-center gap-2 rounded-b-2xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                        isPillHere
                          ? "text-indigo-600 dark:text-cyan-400"
                          : isSelected
                          ? "text-indigo-500/90 dark:text-cyan-300/90"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {/* Active / Hover Gliding Pill on All Services */}
                      {isPillHere && (
                        <motion.div
                          layoutId="activeServiceSnakePill"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                            mass: 0.6,
                          }}
                          className="absolute inset-x-2 inset-y-1 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200/90 dark:border-slate-700/90 -z-10"
                        />
                      )}

                      <Layers
                        className={`w-3.5 h-3.5 transition-transform ${
                          isPillHere ? "text-indigo-600 dark:text-cyan-400 scale-110" : ""
                        }`}
                      />
                      <span>{allTab.label[language]}</span>

                      {/* Subtle anchor indicator if All Services is selected while hovering top row */}
                      {isSelected && !isPillHere && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-cyan-400 animate-pulse ms-0.5" />
                      )}
                    </button>
                  );
                })()}
              </div>
            </div>
          </LayoutGroup>
        </div>

        {/* Content View: Single Service (Heroic Executive Card) VS All Services (2x2 Quadrants Square) */}
        <AnimatePresence mode="wait">
          {activeTab !== "all" && singleService ? (
            /* --- SINGLE SERVICE VIEW (Heroic Executive Card with 6 Capability Squircles) --- */
            <motion.div
              key={singleService.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 shadow-xl dark:shadow-2xl overflow-hidden backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300"
            >
              {/* Ambient Glows */}
              <div
                className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Heroic Service Details */}
                <div className="lg:col-span-5 flex flex-col items-start justify-center text-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 text-[11px] sm:text-xs font-semibold tracking-wider text-slate-700 dark:text-slate-300 mb-5 shadow-xs">
                    <Layers className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                    <span className="uppercase">{singleService.badge[language]}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                    {singleService.titlePrefix[language]}{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400 text-transparent bg-clip-text">
                      {singleService.titleHighlight[language]}
                    </span>
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-7 max-w-lg">
                    {singleService.description[language]}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleOpenPricing(singleService.pricingCategoryId)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/40 transition-all cursor-pointer group"
                  >
                    <span>{singleService.buttonText[language]}</span>
                    {isAr ? (
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </motion.button>
                </div>

                {/* Right Column: 2x3 Grid of 6 Capability Squircles */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-7 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800/80">
                  {singleService.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3.5 group text-start">
                      <div
                        className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/70 flex items-center justify-center p-2.5 shrink-0 shadow-sm group-hover:border-blue-400 dark:group-hover:border-blue-500/60 group-hover:scale-105 transition-all"
                        aria-hidden="true"
                      >
                        {feature.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors leading-snug">
                          {feature.title[language]}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                          {feature.description[language]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            /* --- ALL SERVICES VIEW: 2x2 Square Grid (كل سيرفس واخدة ربع) --- */
            <motion.div
              key="all-services-grid"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {serviceCardsData.map((service) => (
                <div
                  key={service.id}
                  className="relative rounded-3xl bg-white dark:bg-[#0c1322] border border-slate-200/90 dark:border-slate-800/90 p-6 sm:p-8 shadow-xl dark:shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-blue-500/50 transition-all duration-300 text-start"
                >
                  {/* Subtle Glow */}
                  <div
                    className="absolute -top-24 -right-24 w-52 h-52 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-all"
                    aria-hidden="true"
                  />

                  {/* Header & Meta */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 text-[11px] font-semibold tracking-wider text-slate-700 dark:text-slate-300">
                        <Layers className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                        <span className="uppercase">{service.badge[language]}</span>
                      </div>

                      <button
                        onClick={() => setActiveTab(service.id)}
                        className="text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>{isAr ? "عرض التفاصيل الكاملة" : "Full Details"}</span>
                        {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2.5">
                      {service.titlePrefix[language]}{" "}
                      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400 text-transparent bg-clip-text">
                        {service.titleHighlight[language]}
                      </span>
                    </h3>

                    {/* Concise 2-line Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-6">
                      {service.description[language]}
                    </p>

                    {/* Compact Capability Squircles Preview (Key Highlights) */}
                    <div className="grid grid-cols-2 gap-2.5 mb-6">
                      {service.features.slice(0, 4).map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/70"
                        >
                          <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center p-1.5 shrink-0 shadow-2xs">
                            {feat.icon}
                          </div>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                            {feat.title[language]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <button
                      onClick={() => handleOpenPricing(service.pricingCategoryId)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 transition-all cursor-pointer"
                    >
                      <span>{service.buttonText[language]}</span>
                      {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => setActiveTab(service.id)}
                      className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      {isAr ? "استعراض الـ 6 مميزات" : "View All 6 Features"}
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pricing Plans Modal */}
      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        defaultCategoryId={selectedCategory}
      />
    </section>
  );
}
