import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Menu, X, ArrowRight, Instagram, Youtube, Linkedin, TrendingUp, Zap, Star, ChevronDown, Podcast } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TerracottaStarburst,
  BlueStar6,
  BlueStar4,
  RedStar4,
  LogoFull,
  ArrowLoop,
  IvoryStarburst,
  IvoryStar6,
  IvoryStar4,
} from "@/components/BrandIcons";


// --- Components ---

const CursorDot = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    if (!dot) return;

    let x = 0, y = 0;
    let dotX = 0, dotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      dotX += (x - dotX) * 0.15;
      dotY += (y - dotY) * 0.15;
      dot.style.transform = `translate(${dotX - 12}px, ${dotY - 12}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{ filter: "hue-rotate(200deg) saturate(1.3)" }}
    >
      <BlueStar6 size={24} />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#DBCABD]/50">
      <div className="container flex h-24 items-center justify-between">
        {/* Left: Brand Logo */}
        <a href="/" className="flex items-center">
          <LogoFull variant="dark" height={64} />
        </a>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
          <a href="#case-studies" className="text-lg font-heading text-[#2B2B2B] hover:text-[#B54C2B] transition-colors">Wyniki</a>
          <a href="#process" className="text-lg font-heading text-[#2B2B2B] hover:text-[#B54C2B] transition-colors">Metoda</a>
          <a href="#testimonials" className="text-lg font-heading text-[#2B2B2B] hover:text-[#B54C2B] transition-colors">Opinie</a>
        </div>

        {/* Right: CTA Button */}
        <div className="hidden lg:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="text-lg px-8 py-6 font-bold shadow-[2px_2px_0px_0px_#2B2B2B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2B2B2B] transition-all bg-[#B54C2B] text-[#F0E7DF] hover:bg-[#9a4024] rounded-md border border-[#2B2B2B]">
              Porozmawiajmy
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-[#2B2B2B] w-8 h-8" /> : <Menu className="text-[#2B2B2B] w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-b border-[#DBCABD] p-6 flex flex-col gap-6 shadow-lg">
          <a href="#case-studies" className="text-xl font-heading text-[#2B2B2B]" onClick={() => setIsOpen(false)}>Wyniki</a>
          <a href="#process" className="text-xl font-heading text-[#2B2B2B]" onClick={() => setIsOpen(false)}>Metoda</a>
          <a href="#testimonials" className="text-xl font-heading text-[#2B2B2B]" onClick={() => setIsOpen(false)}>Opinie</a>
          <Button className="w-full text-lg py-6 font-bold shadow-[2px_2px_0px_0px_#2B2B2B] bg-[#B54C2B] text-[#F0E7DF] border border-[#2B2B2B]">
            Porozmawiajmy
          </Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-28 overflow-hidden bg-white min-h-0 md:min-h-[720px] flex items-center">
      {/* Decorative brand icons */}
      <div className="absolute top-28 left-[6%] opacity-15 pointer-events-none hidden lg:block">
        <BlueStar6 size={40} />
      </div>
      <div className="absolute top-[45%] left-[3%] opacity-10 pointer-events-none hidden lg:block">
        <RedStar4 size={24} />
      </div>
      <div className="absolute bottom-24 left-[12%] opacity-12 pointer-events-none hidden lg:block">
        <TerracottaStarburst size={48} />
      </div>
      <div className="absolute top-20 left-[38%] opacity-10 pointer-events-none hidden lg:block">
        <BlueStar4 size={20} />
      </div>
      <div className="absolute bottom-32 left-[30%] opacity-10 pointer-events-none hidden lg:block">
        <RedStar4 size={18} />
      </div>
      {/* Middle gap icons */}
      <div className="absolute top-[20%] left-[58%] opacity-15 pointer-events-none hidden lg:block">
        <TerracottaStarburst size={36} />
      </div>
      <div className="absolute top-[50%] left-[55%] opacity-12 pointer-events-none hidden lg:block">
        <BlueStar6 size={28} />
      </div>
      <div className="absolute top-[35%] left-[62%] opacity-10 pointer-events-none hidden lg:block">
        <RedStar4 size={22} />
      </div>
      <div className="absolute bottom-[20%] left-[58%] opacity-10 pointer-events-none hidden lg:block">
        <BlueStar4 size={18} />
      </div>

      <div className="container grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">
        <div className="space-y-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#B54C2B]/10 text-base font-bold text-[#B54C2B] border border-[#B54C2B]/20"
          >
            Dla właścicieli eCommerce
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center gap-2 justify-center lg:justify-start"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#F7DDB5" stroke="#F7DDB5" />
              ))}
            </div>
            <span className="text-sm text-[#2B2B2B]/60 font-medium">Zaufało nam 50+ marek</span>
          </motion.div>

          {/* TODO: Matthew feedback — headline should convey a clearer result/outcome */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.5rem] md:text-6xl lg:text-7xl font-heading text-[#2B2B2B] leading-[1.05]"
          >
            Skaluj Swój eCommerce<br />
            z Zyskiem <ArrowLoop size={96} className="hidden lg:inline-block align-middle ml-2" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#2B2B2B]/80 max-w-xl mx-auto lg:mx-0"
          >
            Twój partner od kreacji reklamowych i performance marketingu
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-sm md:text-lg px-5 md:px-9 py-5 md:py-6 font-bold shadow-[2px_2px_0px_0px_#2B2B2B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2B2B2B] transition-all bg-[#B54C2B] text-[#F0E7DF] hover:bg-[#9a4024] rounded-md border border-[#2B2B2B] max-w-full">
Porozmawiajmy o Twoim eCommerce
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats inline */}
          <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-8 text-[#2B2B2B]/60">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-heading text-[#2B2B2B]">+50M PLN</span>
              <span className="text-sm">wygenerowanych</span>
            </div>
            <div className="w-px h-6 bg-[#DBCABD]"></div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-heading text-[#2B2B2B]">4.2x</span>
              <span className="text-sm">średni ROAS</span>
            </div>
          </div>
        </div>

        {/* Hero — Scrolling Ad Columns */}
        <div className="relative h-[520px] md:h-[700px] w-full overflow-hidden hidden lg:block">
          <p className="text-center uppercase tracking-widest text-xs font-bold text-[#2B2B2B]/40 mb-3">Nasze Kreacje</p>
          {/* Fade masks top & bottom */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 h-full">
            {/* Column 1 — scrolls up */}
            <div className="flex-1 overflow-hidden relative">
              <div className="animate-scroll-up flex flex-col gap-4">
                {["/images/ad1.webp", "/images/ad2.webp", "/images/ad3.webp", "/images/ad1.webp", "/images/ad2.webp", "/images/ad3.webp"].map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shrink-0">
                    <img src={src} alt="Ad creative" className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 — scrolls down */}
            <div className="flex-1 overflow-hidden relative">
              <div className="animate-scroll-down flex flex-col gap-4">
                {["/images/ad2.webp", "/images/ad3.webp", "/images/ad1.webp", "/images/ad2.webp", "/images/ad3.webp", "/images/ad1.webp"].map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shrink-0">
                    <img src={src} alt="Ad creative" className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 — scrolls up */}
            <div className="flex-1 overflow-hidden relative">
              <div className="animate-scroll-up-slow flex flex-col gap-4">
                {["/images/ad3.webp", "/images/ad1.webp", "/images/ad2.webp", "/images/ad3.webp", "/images/ad1.webp", "/images/ad2.webp"].map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shrink-0">
                    <img src={src} alt="Ad creative" className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile — auto-scrolling horizontal marquee */}
        <div className="overflow-hidden h-[400px] lg:hidden -mx-4">
          <div className="animate-scroll-left flex gap-3 w-max">
            {["/images/ad1.webp", "/images/ad2.webp", "/images/ad3.webp", "/images/ad1.webp", "/images/ad2.webp", "/images/ad3.webp"].map((src, i) => (
              <div key={i} className="w-[280px] shrink-0 rounded-xl overflow-hidden">
                <img src={src} alt="Ad creative" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const VSLSection = () => {
  return (
    <section className="py-20 bg-[#4A8DCE] relative overflow-hidden" id="vsl">
      {/* Decorative ivory brand icons */}
      <div className="absolute top-16 right-[10%] opacity-20 pointer-events-none hidden lg:block">
        <IvoryStarburst size={120} />
      </div>
      <div className="absolute bottom-12 left-[5%] opacity-20 pointer-events-none hidden lg:block">
        <IvoryStar6 size={80} />
      </div>
      <div className="absolute top-1/2 right-[3%] opacity-15 pointer-events-none hidden lg:block">
        <IvoryStar4 size={50} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#F0E7DF] leading-tight uppercase text-center lg:text-left"
            >
              Jak Budujemy Systemy Sprzedaży eCommerce
            </motion.h2>

            <p className="text-lg text-[#2B2B2B]">
              Kreacje, kampanie reklamowe i email marketing: połączone w jeden system, który generuje przychód przewidywalnie.{" "}
              <strong>Zobacz jak to robimy</strong>{" "}
              i dlaczego nasze podejście działa dla marek eCommerce od 50k do 1M PLN miesięcznie.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 font-bold shadow-[2px_2px_0px_0px_#2B2B2B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2B2B2B] transition-all bg-[#F0E7DF] text-[#2B2B2B] hover:bg-white rounded-md border border-[#2B2B2B]"
              >
                Zobacz jak to działa
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Video */}
          <div className="relative">
            <div className="aspect-video bg-[#2B2B2B] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://player.vimeo.com/video/VIMEO_VIDEO_ID?badge=0&autopause=0&player_id=0"
                className="w-full h-full"
                title="adMate — Jak budujemy systemy sprzedaży eCommerce"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const logos = [
    { src: "/images/clients/smarthome.png", alt: "SmartHome" },
    { src: "/images/clients/skarbserowara.png", alt: "Skarby Serowara" },
    { src: "/images/clients/hannaslove.png", alt: "Hanna's Love" },
    { src: "/images/clients/spomlek.png", alt: "Spomlek" },
    { src: "/images/clients/pinkvegan.png", alt: "Pink Vegan" },
    { src: "/images/clients/kimidori.png", alt: "Kimidori" },
    { src: "/images/clients/otosushi.png", alt: "Oto!Sushi" },
    { src: "/images/clients/climapolska.png", alt: "Clima Polska" },
    { src: "/images/clients/naumal.png", alt: "Naumal" },
    { src: "/images/clients/kn.png", alt: "KN Skincare" },
  ];

  const allLogos = [...logos, ...logos];

  return (
    <section className="py-8 bg-white border-t border-b border-[#DBCABD] overflow-hidden">
      <div className="container mb-6">
        <p className="text-center font-black text-[#2B2B2B] uppercase tracking-widest text-xl md:text-2xl font-heading">Marki, które rosną z nami</p>
      </div>
      <div className="relative">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        >
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="h-24 md:h-32 flex items-center justify-center shrink-0"
            >
              <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain max-w-[280px]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Offers = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const pillars = [
    {
      title: "Kreacje reklamowe & Content",
      subtitle: "Kreacje to największa dźwignia Twojego ROAS. Tworzymy reklamy, które zatrzymują scroll i zamieniają uwagę w sprzedaż.",
      points: [
        "Analiza Twoich top reklam i konkurencji",
        "10+ nowych wariantów miesięcznie",
        "Video, statyczne, karuzele, UGC",
        "Gotowe do wrzucenia na Meta i TikTok"
      ],
    },
    {
      title: "Płatne Kampanie",
      subtitle: "Zamieniamy kliknięcia w klientów. Skalujemy budżety tylko wtedy, gdy przynoszą zysk.",
      points: [
        "Strategia dopasowana do Twojego lejka",
        "Ciągła optymalizacja budżetów",
        "Cotygodniowe testy A/B kreacji",
        "Transparentne raportowanie z insightami"
      ],
    },
    {
      title: "Email Marketing",
      subtitle: "Zamień jednorazowych kupujących w lojalnych klientów. Email to kanał, który generuje przychód bez budżetu reklamowego.",
      points: [
        "5+ automatycznych sekwencji sprzedażowych",
        "Odzyskiwanie porzuconych koszyków",
        "3-4 kampanie tygodniowo",
        "Pełne zarządzanie Klaviyo"
      ],
    }
  ];


  return (
    <section className="py-20 bg-white" id="offer">
      <div className="container">
        {/* Giant heading with brand shape accent */}
        <div className="relative mb-12">
          <h2 className="font-heading text-[13vw] md:text-[11vw] uppercase text-[#2B2B2B] leading-[0.85] text-center lg:text-left">
            Co robimy
          </h2>
          <motion.div
            className="absolute -top-8 right-0 md:-top-4"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <TerracottaStarburst size={36} className="md:hidden" />
            <TerracottaStarburst size={96} className="hidden md:block" />
          </motion.div>
        </div>

        <div className="border-t border-[#DBCABD]">
          {pillars.map((pillar, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b border-[#DBCABD] cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {/* Collapsed row */}
                <div className="flex items-center justify-between py-10 md:py-14">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading uppercase text-[#2B2B2B]">
                    {pillar.title}
                  </h3>
                  <div className={`w-5 h-5 rounded-full border-2 transition-all shrink-0 ml-4 ${
                    isOpen
                      ? 'border-[#2B2B2B] bg-transparent'
                      : 'border-[#2B2B2B] bg-[#2B2B2B]'
                  }`} />
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 md:pb-14 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div>
                          <p className="text-lg text-[#2B2B2B]/70 mb-4">{pillar.subtitle}</p>
                          <ul className="space-y-2">
                            {pillar.points.map((point, j) => (
                              <li key={j} className="flex items-start gap-3 text-[#2B2B2B]">
                                <Check className="shrink-0 mt-1 text-[#2B2B2B]/40" size={16} strokeWidth={3} />
                                <span className="font-medium">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <a href="#case-studies" className="shrink-0 px-6 py-2.5 rounded-full border border-[#2B2B2B] text-[#2B2B2B] font-bold uppercase tracking-wider text-sm hover:bg-[#2B2B2B] hover:text-white transition-colors">
                          Dowiedz się więcej
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="text-base md:text-lg px-6 md:px-10 py-6 font-bold shadow-[2px_2px_0px_0px_#2B2B2B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2B2B2B] transition-all bg-[#B54C2B] text-[#F0E7DF] hover:bg-[#9a4024] rounded-md border border-[#2B2B2B] max-w-full">
              Zbudujmy Twój system sprzedaży
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const phases = [
    {
      name: "Fundamenty",
      days: "Dni 1 - 7",
      description: "Zanim wydamy złotówkę, musimy wiedzieć, na czym stoisz. Pełny audyt kreacji, kont reklamowych i email marketingu + roadmapa na 90 dni.",
      items: [
        "Audyt konta reklamowego i kreacji",
        "Weryfikacja techniczna email marketingu",
        "Analiza konkurencji i hooków",
        "90-dniowa mapa drogowa systemu"
      ]
    },
    {
      name: "Egzekucja",
      days: "Dni 7 - 30",
      description: "Dzień 30: Twój system sprzedaży działa. Nowe kreacje lecą, kampanie reklamowe konwertują, automatyzacje email pracują za Ciebie.",
      items: [
        "10+ świeżych kreacji reklamowych",
        "Budowa 5+ automatycznych sekwencji",
        "Start zoptymalizowanych kampanii",
        "Wdrożenie formularzy i pop-upów"
      ]
    },
    {
      name: "Skalowanie",
      days: "Dni 30+",
      description: "System dowozi. Teraz skalujemy - więcej kreacji, agresywniejsze budżety, ciągła optymalizacja lejka sprzedażowego.",
      items: [
        "Minimum 10 nowych kreacji miesięcznie",
        "Agresywne skalowanie budżetów",
        "Cotygodniowe testy A/B kreacji",
        "Optymalizacja pełnego lejka"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="process">
      <div className="container">
        {/* Header row: big title left, subtitle + CTA right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading text-[#2B2B2B] uppercase text-center lg:text-left">
            90 Dni do Systemu
          </h2>
          <div className="flex items-center gap-6">
            <p className="text-lg text-[#2B2B2B]/60 hidden md:block">Nie oferujemy usług. Budujemy system.</p>
            <a href="#offer" className="shrink-0 px-8 py-3 rounded-full border border-[#2B2B2B] text-[#2B2B2B] font-bold uppercase tracking-wider text-sm hover:bg-[#2B2B2B] hover:text-[#F0E7DF] transition-colors">
              Zaczynamy
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#DBCABD] mb-16" />

        {/* 3-column grid like dunk.agency */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-5"
            >
              {/* Circled number + phase name */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#DBCABD] flex items-center justify-center text-xl text-[#2B2B2B]/60">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-heading uppercase text-[#2B2B2B]">{phase.name}</h3>
                  <p className="text-sm text-[#2B2B2B]/50 font-bold">{phase.days}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#2B2B2B]/70">{phase.description}</p>

              {/* Checklist */}
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[#2B2B2B]">
                    <Check className="shrink-0 mt-1 text-[#2B2B2B]/30" size={16} strokeWidth={3} />
                    <span className="font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      tag: "CASE STUDY: SKLEP KOSMETYCZNY",
      tagColor: "#F0E7DF",
      headline: "70k PLN/msc",
      headlineColor: "#4A8DCE",
      subheadline: "z email (w 90 dni od startu)",
      before: "Przychód całkowicie uzależniony od wydatków na reklamy.",
      after: "47% przychodu z email, automatyzacje pracujące 24/7, przewidywalny wzrost.",
      metric1Value: "61,290 PLN/msc",
      metric1Label: "z automatyzacji (Flows)",
      metric2Value: "47%",
      metric2Label: "całkowitego przychodu z kanału email",
      image: "/images/dashboard_screenshot.png"
    },
    {
      tag: "CASE STUDY: MARKA ODZIEŻOWA",
      tagColor: "#F0E7DF",
      headline: "45k PLN/msc",
      headlineColor: "#4A8DCE",
      subheadline: "z email (w 60 dni od startu)",
      before: "Przychód całkowicie uzależniony od wydatków na reklamy.",
      after: "38% przychodu z email, automatyzacje pracujące 24/7, przewidywalny wzrost.",
      metric1Value: "38,500 PLN/msc",
      metric1Label: "z automatyzacji (Flows)",
      metric2Value: "38%",
      metric2Label: "całkowitego przychodu z kanału email",
      image: "/images/dashboard_screenshot.png"
    },
    {
      tag: "CASE STUDY: HOME & DECOR",
      tagColor: "#F0E7DF",
      headline: "92k PLN/msc",
      headlineColor: "#4A8DCE",
      subheadline: "z email (w 120 dni od startu)",
      before: "Przychód całkowicie uzależniony od wydatków na reklamy.",
      after: "52% przychodu z email, automatyzacje pracujące 24/7, przewidywalny wzrost.",
      metric1Value: "78,200 PLN/msc",
      metric1Label: "z automatyzacji (Flows)",
      metric2Value: "52%",
      metric2Label: "całkowitego przychodu z kanału email",
      image: "/images/dashboard_screenshot.png"
    },
    {
      tag: "CASE STUDY: SUPLEMENTY",
      tagColor: "#F0E7DF",
      headline: "55k PLN/msc",
      headlineColor: "#4A8DCE",
      subheadline: "z email (w 45 dni od startu)",
      before: "Przychód całkowicie uzależniony od wydatków na reklamy.",
      after: "41% przychodu z email, automatyzacje pracujące 24/7, przewidywalny wzrost.",
      metric1Value: "42,100 PLN/msc",
      metric1Label: "z automatyzacji (Flows)",
      metric2Value: "41%",
      metric2Label: "całkowitego przychodu z kanału email",
      image: "/images/dashboard_screenshot.png"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  const currentCase = caseStudies[currentSlide];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="case-studies">
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-[#2B2B2B] mb-6">
            Historie sukcesu naszych klientów
          </h2>
          <p className="text-xl text-[#2B2B2B]/70 max-w-2xl mx-auto">
            Z uzależnienia od reklam do przewidywalnego systemu, który sprzedaje 24/7.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-12 h-12 bg-white border border-[#2B2B2B] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#2B2B2B] hover:shadow-[1px_1px_0px_0px_#2B2B2B] active:shadow-none transition-shadow"
          >
            <ArrowRight size={20} className="rotate-180" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-12 h-12 bg-white border border-[#2B2B2B] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#2B2B2B] hover:shadow-[1px_1px_0px_0px_#2B2B2B] active:shadow-none transition-shadow"
          >
            <ArrowRight size={20} />
          </button>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="border border-[#2B2B2B]/20 rounded-3xl p-8 md:p-12 bg-white shadow-lg"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Story & Metrics */}
                <div className="space-y-8">
                  <div
                    className="inline-block px-4 py-2 font-bold rounded-full border"
                    style={{
                      backgroundColor: `${currentCase.tagColor}10`,
                      color: "#2B2B2B",
                      borderColor: "#2B2B2B30"
                    }}
                  >
                    {currentCase.tag}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-4xl font-heading text-[#2B2B2B] leading-tight">
                      <span style={{ color: currentCase.headlineColor }}>{currentCase.headline}</span> {currentCase.subheadline}
                    </h3>
                    <p className="text-lg text-[#2B2B2B]/80 leading-relaxed">
                      <strong>Przed:</strong> {currentCase.before}<br/>
                      <strong>Po:</strong> {currentCase.after}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#4A8DCE]/10 rounded-xl text-[#4A8DCE]">
                        <TrendingUp size={32} />
                      </div>
                      <div>
                        <p className="text-3xl font-black text-[#2B2B2B]">{currentCase.metric1Value}</p>
                        <p className="text-sm font-bold text-[#2B2B2B]/60 uppercase tracking-wider">{currentCase.metric1Label}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#B54C2B]/10 rounded-xl text-[#B54C2B]">
                        <Zap size={32} />
                      </div>
                      <div>
                        <p className="text-3xl font-black text-[#2B2B2B]">{currentCase.metric2Value}</p>
                        <p className="text-sm font-bold text-[#2B2B2B]/60 uppercase tracking-wide">{currentCase.metric2Label}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="font-bold shadow-[2px_2px_0px_0px_#B54C2B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#B54C2B] transition-all bg-white text-[#2B2B2B] hover:bg-gray-50 rounded-md border border-[#B54C2B] px-8 py-6 text-lg">
                      Chcę takich wyników
                    </Button>
                  </div>
                </div>

                {/* Right Column: Dashboard Image */}
                <div className="relative">
                  <div className="rounded-xl overflow-hidden border border-[#2B2B2B]/10 shadow-lg bg-[#F9F9F9]">
                    <img
                      src={currentCase.image}
                      alt={`Wykres przychodu - ${currentCase.headline}`}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-[#2B2B2B] w-8'
                    : 'bg-[#2B2B2B]/20 hover:bg-[#2B2B2B]/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-20 bg-[#4A8DCE] relative border-b border-white/30" id="about">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
         <div className="relative">
            {/* Placeholder for Beata's Photo */}
            <div className="relative bg-[#DBCABD] rounded-xl aspect-[3/4] overflow-hidden shadow-xl border-4 border-[#F0E7DF] max-w-sm mx-auto lg:max-w-md">
               <img src="/images/beata.jpg" alt="Beata Wierzchowska" className="w-full h-full object-cover" />
            </div>
         </div>

         <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading text-[#F0E7DF] uppercase text-center lg:text-left">Cześć,<br />jestem Beata</h2>
            <p className="text-2xl font-heading text-[#F0E7DF]/70 italic text-center lg:text-left">Twoja partnerka od reklam</p>

            {/* Social Icons - desktop only */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/beata-wierzchowska/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#F0E7DF] text-[#4A8DCE] flex items-center justify-center hover:bg-white transition-colors">
                  <Linkedin size={28} />
                </a>
                <a href="https://instagram.com/beata.wierzchowska" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#F0E7DF] text-[#B54C2B] flex items-center justify-center hover:bg-white transition-colors">
                  <Instagram size={28} />
                </a>
                <a href="https://www.youtube.com/@beata.wierzchowska" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#F0E7DF] text-[#2B2B2B] flex items-center justify-center hover:bg-white transition-colors">
                  <Youtube size={28} />
                </a>
                <a href="https://open.spotify.com/show/2wx0P3bQnPDYvS272XGLhQ" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#F0E7DF] text-[#1DB954] flex items-center justify-center hover:bg-white transition-colors">
                  <Podcast size={28} />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/brand/arrows/strzalka-1-ivory.png" alt="" className="w-20 -scale-x-100 rotate-12 opacity-70" />
                <span className="text-[#F0E7DF]/70 font-heading text-base italic">Znajdź mnie<br />w social mediach</span>
              </div>
            </div>

            {/* Social Icons - mobile only */}
            <div className="flex items-center gap-6 justify-center lg:hidden">
              <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/beata-wierzchowska/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#F0E7DF] text-[#4A8DCE] flex items-center justify-center hover:bg-white transition-colors">
                  <Linkedin size={28} />
                </a>
                <a href="https://instagram.com/beata.wierzchowska" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#F0E7DF] text-[#B54C2B] flex items-center justify-center hover:bg-white transition-colors">
                  <Instagram size={28} />
                </a>
                <a href="https://www.youtube.com/@beata.wierzchowska" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#F0E7DF] text-[#2B2B2B] flex items-center justify-center hover:bg-white transition-colors">
                  <Youtube size={28} />
                </a>
                <a href="https://open.spotify.com/show/2wx0P3bQnPDYvS272XGLhQ" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#F0E7DF] text-[#1DB954] flex items-center justify-center hover:bg-white transition-colors">
                  <Podcast size={28} />
                </a>
              </div>
            </div>

            <div className="space-y-5 text-[#2B2B2B] text-lg">
               <p>
                  Wiem jak to jest prowadzić eCommerce. Codziennie żonglujesz produktem, logistyką, obsługą klienta i jeszcze masz dowozić marketing. Dlatego 9 lat temu postanowiłam zdjąć ten ciężar z barków właścicieli marek.
               </p>
               <p>
                  W adMate nie jesteś kolejnym kontem do zarządzania. Jesteś partnerką, z którą wspólnie budujemy system sprzedaży. Ja odpowiadam za kreacje, kampanie i wyniki. Ty możesz wrócić do rozwijania produktu.
               </p>
               <p>
                  50 milionów złotych w kampaniach reklamowych, ponad 1000 godzin konsultacji, 2000 przeszkolonych kursantów. Jestem praktykiem, nie teoretykiem. I jedno przekonanie: <strong>dobry marketing to taki, o którym nie musisz myśleć, bo po prostu działa.</strong>
               </p>
               <p className="font-bold">
                  Porozmawiajmy o Twoim eCommerce.
               </p>
            </div>

         </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Beata to profesjonalistka w każdym calu. Wyniki kampanii przerosły nasze oczekiwania, a wdrożenie Klaviyo to był strzał w dziesiątkę. Teraz 40% przychodu generujemy z email.",
      author: "Anna K.",
      company: "Właścicielka Marki Odzieżowej"
    },
    {
      quote: "Wreszcie czuję, że nie przepalam budżetu. Konkretne raporty, jasna strategia i co najważniejsze - rosnąca sprzedaż bez ciągłego zwiększania wydatków na reklamy.",
      author: "Magdalena N.",
      company: "Właścicielka Sklepu z Kosmetykami"
    },
    {
      quote: "Synergia Ads i Email marketingu, o której mówi Beata, naprawdę działa. Odzyskujemy porzucone koszyki automatycznie - to dodatkowe 15% przychodu miesięcznie.",
      author: "Marta W.",
      company: "Właścicielka Home & Decor"
    }
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-[#2B2B2B]">Co mówią właścicielki sklepów?</h2>
          <p className="text-xl text-[#2B2B2B]/70 max-w-2xl mx-auto">
            Historie marek, które rosną z nami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
            >
              <Card className="border border-[#DBCABD] shadow-[2px_2px_0px_0px_#DBCABD] bg-white h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <p className="text-lg font-medium mb-8 flex-grow text-[#2B2B2B]">"{t.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-black text-lg text-[#2B2B2B]">{t.author}</p>
                    <p className="text-[#2B2B2B]/60">{t.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Ile kosztuje współpraca z adMate?",
      answer: "Ceny zależą od zakresu współpracy i Twoich celów. Zaczynamy od bezpłatnej konsultacji, na której omawiamy Twoje potrzeby i dopasowujemy ofertę. Napisz do nas, a przygotujemy indywidualną wycenę."
    },
    {
      question: "Jak szybko zobaczę pierwsze wyniki?",
      answer: "Pierwsze efekty widoczne są zazwyczaj w ciągu 2-4 tygodni od startu. Pełny system sprzedażowy budujemy w 90 dni, wtedy widzisz stabilny, przewidywalny wzrost przychodów."
    },
    {
      question: "Czy muszę mieć duży budżet reklamowy na start?",
      answer: "Nie. Pracujemy z markami o budżetach od 5 000 PLN miesięcznie. Kluczowe jest, żeby budżet był wystarczający do testowania kreacji i skalowania tego, co działa."
    },
    {
      question: "Czym różni się adMate od typowej agencji?",
      answer: "Nie jesteśmy agencją od wszystkiego. Specjalizujemy się w eCommerce i budujemy kompletne systemy sprzedaży: kreacje + kampanie + email marketing. Działamy jak Twój zewnętrzny dział marketingu, nie jak podwykonawca."
    },
    {
      question: "Czy zajmujecie się też tworzeniem kreacji reklamowych?",
      answer: "Tak, kreacje to nasz fundament. Tworzymy minimum 10 nowych wariantów miesięcznie: video, statyczne, karuzele i UGC. Kreacje to największa dźwignia ROAS."
    },
    {
      question: "Dla jakich marek pracujecie?",
      answer: "Pracujemy z markami eCommerce generującymi od 50k do 1M PLN miesięcznie. Najlepsze wyniki osiągamy w branżach: kosmetyki, moda, home & decor, suplementy i żywność."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-heading text-[#2B2B2B] text-center mb-12 uppercase">
          Często zadawane pytania
        </h2>

        <div className="border-t border-[#DBCABD]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b border-[#DBCABD] cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="flex items-center justify-between py-6">
                  <h3 className="text-lg md:text-xl font-heading text-[#2B2B2B] pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#2B2B2B]/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[#2B2B2B]/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#2B2B2B] text-[#F0E7DF] py-20 border-t-4 border-[#B54C2B]">
      <div className="container grid md:grid-cols-4 gap-12">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center">
            <LogoFull variant="white" height={44} />
          </div>
          <p className="text-[#F0E7DF]/60 max-w-sm">
            Łączymy praktyczną wiedzę o kampaniach marketingowych z zamiłowaniem do estetyki.
          </p>
          <a href="mailto:beata@admate.pl" className="block text-[#F7DDB5] font-bold text-lg hover:underline">beata@admate.pl</a>
          <a href="tel:+48506128277" className="block text-[#F7DDB5] font-bold text-lg hover:underline">+48 506 128 277</a>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-[#F0E7DF]/40">Menu</h4>
          <ul className="space-y-4">
            <li><a href="#about" className="hover:text-[#F7DDB5] transition-colors">O mnie</a></li>
            <li><a href="#offer" className="hover:text-[#F7DDB5] transition-colors">Oferta</a></li>
            <li><a href="#process" className="hover:text-[#F7DDB5] transition-colors">Proces</a></li>
            <li><a href="#testimonials" className="hover:text-[#F7DDB5] transition-colors">Opinie</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-[#F0E7DF]/40">Social</h4>
          <ul className="space-y-4">
            <li><a href="https://www.linkedin.com/in/beata-wierzchowska/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#F7DDB5] transition-colors"><Linkedin size={18} /> LinkedIn</a></li>
            <li><a href="https://instagram.com/beata.wierzchowska" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#F7DDB5] transition-colors"><Instagram size={18} /> Instagram</a></li>
            <li><a href="https://www.youtube.com/@beata.wierzchowska" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#F7DDB5] transition-colors"><Youtube size={18} /> YouTube</a></li>
            <li><a href="https://open.spotify.com/show/2wx0P3bQnPDYvS272XGLhQ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#F7DDB5] transition-colors"><Podcast size={18} /> Podcast</a></li>
          </ul>
        </div>
      </div>

      <div className="container mt-16 pt-8 border-t border-[#F0E7DF]/10 text-center text-[#F0E7DF]/40 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 adMate Beata Wierzchowska. Wszelkie prawa zastrzeżone.</p>
        <div className="flex gap-6 text-sm">
           <a href="#" className="hover:text-[#F0E7DF] transition-colors">Regulamin</a>
           <a href="#" className="hover:text-[#F0E7DF] transition-colors">Polityka Prywatności</a>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white cursor-none md:cursor-none">
      <CursorDot />
      <Navbar />
      <Hero />
      <SocialProof />
      <About />
      <VSLSection />
      <Offers />
      <CaseStudy />
      <Process />
      <Testimonials />
      <section className="py-20 bg-[#B54C2B] text-center">
        <div className="container">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-7xl font-heading mb-8 text-[#2B2B2B] text-center"
           >
             Nudne reklamy zabijają<br />Twój ROAS?
           </motion.h2>
           <p className="text-xl mb-12 max-w-2xl mx-auto text-[#2B2B2B]/80 font-medium">
             Twój produkt nie jest problemem. Sposób, w jaki go pokazujesz - jest. Zbudujmy system, który sprzedaje za Ciebie 24/7.
           </p>
           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
             <Button size="lg" className="text-base md:text-xl px-6 md:px-12 py-6 md:py-8 font-bold shadow-[2px_2px_0px_0px_#2B2B2B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2B2B2B] transition-all bg-white text-[#2B2B2B] hover:bg-[#DBCABD] rounded-md border border-[#2B2B2B] max-w-full">
                Porozmawiajmy
             </Button>
           </motion.div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  );
}
