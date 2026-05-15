import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { 
  Menu, X, ArrowRight, BookOpen, Users, Brain, Shield, 
  ChevronRight, Star, Quote, MessageCircle, MapPin, 
  Phone, Mail, CheckCircle2, ChevronLeft, ChevronRight as ChevronRightIcon
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useEmblaCarousel from "embla-carousel-react";

// Helper for smooth scrolling
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tentang", href: "about" },
    { name: "Program", href: "program" },
    { name: "Buku", href: "buku" },
    { name: "Dampak", href: "impact" },
    { name: "Testimoni", href: "testimoni" },
    { name: "Kontak", href: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-primary tracking-tight">Herdy Leonardi</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <Button 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold rounded-full px-6"
              onClick={() => window.open("https://wa.me/6281808330427", "_blank")}
            >
              Konsultasi Sekarang
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={() => {
                    scrollToSection(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-lg font-medium text-foreground py-2 border-b border-border/50"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold rounded-full"
                onClick={() => window.open("https://wa.me/6281808330427", "_blank")}
              >
                Konsultasi Sekarang
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <FadeIn>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none mb-6 px-4 py-1.5 text-sm font-medium rounded-full">
                Business Coach untuk Remaja & Keluarga
              </Badge>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.1] mb-6">
                Membangun Generasi Tangguh, Mengharmoniskan <span className="text-secondary relative whitespace-nowrap">
                  <span className="relative z-10">Keluarga</span>
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/30 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Menemani perjalanan remaja menemukan jati diri dan membantu orang tua membangun komunikasi yang lebih hangat, terbuka, dan bermakna.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-full px-8 h-14 text-base shadow-lg shadow-secondary/20"
                onClick={() => window.open("https://wa.me/6281808330427", "_blank")}
              >
                <FaWhatsapp className="mr-2 text-xl" /> Konsultasi Sekarang
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 h-14 text-base font-semibold border-primary/20 hover:bg-primary/5 text-primary"
                onClick={() => scrollToSection("program")}
              >
                Pelajari Program
              </Button>
            </FadeIn>

            <FadeIn delay={0.4} className="mt-12 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-2xl font-bold text-primary">20+</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Tahun Pengalaman</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">94K+</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Followers IG</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100+</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Sekolah & Komunitas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">20M+</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">Viewers Edukasi</p>
              </div>
            </FadeIn>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <FadeIn delay={0.2} className="relative">
              <div className="absolute inset-0 bg-secondary rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 opacity-50" />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl">
                <img 
                  src="/hero-portrait.jpg" 
                  alt="Herdy Leonardi" 
                  className="w-full h-full object-cover" style={{ objectPosition: 'center 0%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/95 backdrop-blur rounded-xl p-4 shadow-lg flex items-center gap-4">
                    <div className="bg-secondary/20 p-3 rounded-full text-secondary">
                      <Star className="fill-secondary text-secondary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Herdy Leonardi</p>
                      <p className="text-xs text-muted-foreground">Certified Business & Family Coach</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <img 
                src="/about-candid-2.jpg" 
                alt="Herdy Leonardi berbicara di depan umum" 
                className="w-full rounded-2xl shadow-xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-48 bg-primary text-primary-foreground p-5 rounded-xl shadow-xl z-20 hidden md:block">
                <Quote size={24} className="text-secondary mb-2 opacity-50" />
                <p className="text-sm font-medium italic">"Setiap anak lahir dengan fitrah yang luar biasa. Tugas kita hanyalah menemani mereka menemukannya."</p>
              </div>
            </div>
          </FadeIn>
          
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Lebih dari Sekadar Coach, <span className="text-secondary">Seorang Sahabat.</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Selama lebih dari 20 tahun, saya mendedikasikan hidup untuk mendampingi remaja dan keluarga dari berbagai latar belakang—mulai dari anak pejabat, pengusaha, santri, penghafal Al-Quran, hingga mereka yang sempat tersesat karena narkoba, LGBT, dan kecanduan digital.
                </p>
                <p>
                  Pengalaman ini tidak hanya membawa saya berkeliling Indonesia, tetapi juga hingga ke Paragon Science Academy di Arizona, Amerika Serikat.
                </p>
                <p>
                  Saya percaya pendekatan yang hangat, tidak menghakimi, dan berbasis nilai-nilai spiritual adalah kunci transformasi yang sesungguhnya.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-8 pt-8 border-t border-border">
              <h3 className="font-bold text-foreground mb-4">Penulis Buku Best-Seller:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-background p-4 rounded-xl border border-border/50">
                  <div className="bg-primary/5 p-2 rounded-lg text-primary">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">BACK TO FITRAH</h4>
                    <p className="text-xs text-muted-foreground mt-1">Kembali pada diri sejati</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-background p-4 rounded-xl border border-border/50">
                  <div className="bg-primary/5 p-2 rounded-lg text-primary">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">DETOX DIGITAL</h4>
                    <p className="text-xs text-muted-foreground mt-1">Strategi ampuh atasi kecanduan gadget</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const Credentials = () => {
  const credentials = [
    "Certified Coaching Skill by ESQ",
    "Certified Coaching Skill by HURAH COACH",
    "Co-Founder Pesantren Entrepreneur",
    "Pengelola Koperasi Syariah KOSPE",
    "Narasumber Radio: Persada, Kabar-4, DAKTA, RRI",
    "Narasumber BUMN, Kementerian & Kampus"
  ];

  return (
    <section className="py-12 bg-primary text-primary-foreground border-y border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <p className="text-center text-primary-foreground/60 text-sm font-semibold tracking-widest uppercase mb-8">
            Kredibilitas & Pengalaman
          </p>
        </FadeIn>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {credentials.map((cred, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-medium backdrop-blur-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-secondary" />
                {cred}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      icon: <Users size={32} />,
      title: "Coaching Remaja",
      desc: "Mentoring 1-on-1 eksklusif untuk remaja (SMP/SMA/Kuliah). Membantu mereka menemukan jati diri, tujuan hidup, membangun kepercayaan diri, dan mengatasi krisis identitas.",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
    },
    {
      icon: <Shield size={32} />,
      title: "Coaching Keluarga",
      desc: "Sesi mediasi dan coaching untuk merekatkan kembali hubungan orang tua dan anak. Membangun komunikasi yang hangat, saling memahami, dan harmonis.",
      color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
    },
    {
      icon: <Brain size={32} />,
      title: "Detox Digital Program",
      desc: "Program khusus berbasis buku 'Detox Digital'. Strategi praktis dan terukur untuk mengatasi kecanduan gadget, game online, dan media sosial pada anak.",
      color: "bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Seminar & Workshop",
      desc: "Sesi inspiratif berskala besar untuk sekolah, kampus, perusahaan, maupun komunitas. Materi disesuaikan dengan kebutuhan audiens.",
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
    }
  ];

  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Program & Layanan
            </h2>
            <p className="text-muted-foreground text-lg">
              Pendekatan personal yang dirancang khusus untuk mengatasi tantangan unik yang dihadapi remaja dan keluarga modern.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="h-full border-border/50 shadow-lg shadow-primary/5 hover:-translate-y-1 transition-all duration-300 bg-white">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${prog.color}`}>
                    {prog.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{prog.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-grow">{prog.desc}</p>
                  <Button variant="ghost" className="w-full justify-between mt-auto group text-primary font-semibold hover:bg-secondary/10 hover:text-primary border-border">
                    Pelajari Lebih Lanjut
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-secondary" />
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  const transformations = [
    { from: "Kecanduan Gadget Akut", to: "Hafidz Quran & Berprestasi", icon: "📱 ➡️ 📖" },
    { from: "Hilang Arah & Motivasi", to: "Wirausaha Muda Sukses", icon: "🌫️ ➡️ 🚀" },
    { from: "Konflik Keluarga Tajam", to: "Komunikasi Harmonis & Hangat", icon: "⚡ ➡️ ❤️" },
  ];

  return (
    <section id="impact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Jejak <span className="text-secondary">Dampak Nyata</span>
            </h2>
            <p className="text-white/70 text-lg">
              Angka hanyalah statistik, namun di balik setiap angka ada kehidupan yang berubah dan keluarga yang terselamatkan.
            </p>
          </FadeIn>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "20+", label: "Tahun Pengalaman" },
            { value: "100+", label: "Sekolah & Komunitas" },
            { value: "361", label: "Jamaah Umroh (2024)" },
            { value: "3", label: "Pesantren Dikelola" }
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Transformations */}
        <FadeIn delay={0.2}>
          <div className="bg-white text-foreground rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Kisah Transformasi</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {transformations.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-background rounded-2xl border border-border">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <div className="text-muted-foreground text-sm font-medium mb-2">Dari:</div>
                  <div className="text-primary font-bold mb-4 line-through decoration-destructive/50">{item.from}</div>
                  <div className="text-secondary-foreground text-sm font-medium mb-2">Menjadi:</div>
                  <div className="text-primary font-bold text-lg">{item.to}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      quote: "Coach Herdy bukan sekadar memberikan teori, tapi menyentuh hati anak saya. Perubahan sikapnya dari yang menutup diri menjadi mau bercerita sangat luar biasa. Terima kasih Coach.",
      author: "Ibu Rina",
      role: "Orang Tua Remaja 16 Tahun"
    },
    {
      quote: "Sesi keluarga bersama Coach Herdy membuka mata kami sebagai orang tua. Kami sadar selama ini kami lebih banyak menuntut daripada mendengar. Keluarga kami kini jauh lebih hangat.",
      author: "Bapak Budi & Keluarga",
      role: "Klien Coaching Keluarga"
    },
    {
      quote: "Seminar Detox Digital sangat membuka wawasan. Siswa-siswi kami jadi sadar bahaya kecanduan gadget dan mulai membatasi screen time mereka sendiri. Sangat direkomendasikan untuk sekolah-sekolah.",
      author: "Ust. Ahmad",
      role: "Kepala Sekolah Boarding School"
    },
    {
      quote: "Dari yang awalnya males banget ikut coaching, ternyata ngobrol sama Om Herdy asik banget. Ga ngerasa digurui, malah dapet banyak insight buat masa depan. Thanks Om!",
      author: "Rizky",
      role: "Mahasiswa Semester 2"
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Apa Kata Mereka
            </h2>
            <p className="text-muted-foreground text-lg">
              Kepercayaan yang diberikan adalah amanah terbesar bagi kami.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testi, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 pl-4 pr-4">
                  <Card className="bg-white border-none shadow-xl shadow-primary/5 p-8 md:p-12 relative h-full">
                    <Quote className="absolute top-8 right-8 text-secondary opacity-20 w-16 h-16" />
                    <CardContent className="p-0 relative z-10 flex flex-col h-full">
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="fill-secondary text-secondary w-5 h-5" />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl text-primary font-medium leading-relaxed italic mb-8 flex-grow">
                        "{testi.quote}"
                      </p>
                      <div className="mt-auto">
                        <div className="font-bold text-primary">{testi.author}</div>
                        <div className="text-sm text-muted-foreground">{testi.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" className="rounded-full bg-white border-border" onClick={scrollPrev}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-white border-border" onClick={scrollNext}>
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Insights = () => {
  const articles = [
    {
      img: "/article-1.png",
      title: "5 Tanda Anak Anda Mulai Kecanduan Gadget",
      desc: "Kenali tanda-tanda awalnya sebelum terlambat. Perubahan perilaku kecil seringkali luput dari pantauan orang tua.",
      tag: "Parenting"
    },
    {
      img: "/article-2.png",
      title: "Bagaimana Memulai Dialog yang Dalam dengan Remaja",
      desc: "Remaja bukan lagi anak kecil yang bisa didikte. Butuh seni komunikasi khusus agar mereka mau terbuka.",
      tag: "Komunikasi"
    },
    {
      img: "/article-3.png",
      title: "Fitrah: Mengembalikan Anak pada Diri Sejatinya",
      desc: "Pendekatan spiritual untuk membantu remaja yang sedang mengalami krisis identitas di era modern.",
      tag: "Spiritual"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Insight & Inspirasi
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Artikel dan pemikiran seputar dunia parenting, psikologi remaja, dan pengembangan diri.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Button variant="ghost" className="text-primary font-bold hover:bg-secondary/10 group">
              Lihat Semua Artikel <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col bg-background">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={article.img} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm border-none shadow-sm">
                      {article.tag}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border flex items-center text-sm font-semibold text-primary">
                    Baca Selengkapnya <ChevronRight className="ml-1 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Books = () => {
  const books = [
    {
      cover: "/book-cover-1.jpg",
      title: "BACK TO FITRAH",
      subtitle: "Panduan Strategis Mendidik Anak Sholeh, Kuat & Berakhlak di Era Modern",
      desc: "Di tengah derasnya arus modernisasi dan tantangan zaman digital, buku ini mengajak orang tua untuk kembali memahami konsep fitrah sebagai dasar utama dalam membentuk karakter anak. Dengan pendekatan yang inspiratif dan penuh makna, pembaca diajak menyadari bahwa setiap anak lahir dengan potensi kebaikan yang harus dijaga, diarahkan, dan ditumbuhkan — menuju kehidupan yang penuh makna, berlandaskan iman, dan tetap kokoh dalam nilai-nilai fitrah.\n\nDi dalamnya, Anda akan belajar: memahami konsep fitrah anak secara mendalam, cara menanamkan iman sejak dini, mendidik tanpa harus memaksa atau menekan, serta membentuk karakter anak yang kuat di tengah zaman modern. Pendekatan spiritual + praktis + menyentuh hati — mudah dipahami dan langsung bisa diterapkan.",
      hargaFisik: "Rp. 99K",
      hargaFisikAsli: "Rp 185.000",
      hargaEbook: "Rp. 35K",
      hargaEbookAsli: "Rp 105.000",
      badge: "Best Seller",
      badgeColor: "bg-secondary text-secondary-foreground",
      waFisik: "https://wa.me/6281808330427?text=Halo%20Coach%20Herdy%2C%20saya%20ingin%20memesan%20buku%20BACK%20TO%20FITRAH%20(Fisik)",
      waEbook: "https://wa.me/6281808330427?text=Halo%20Coach%20Herdy%2C%20saya%20ingin%20membeli%20ebook%20BACK%20TO%20FITRAH",
    },
    {
      cover: "/book-cover-2.jpg",
      title: "DETOX DIGITAL",
      subtitle: "Strategi Ampuh Merebut Kembali Buah Hati dari Genggaman Teknologi",
      desc: "Di era serba digital, gadget bukan lagi sekadar alat bantu—ia telah menjadi bagian dari kehidupan sehari-hari, bahkan bagi anak-anak. Namun di balik kemudahan itu, tersembunyi ancaman serius: kecanduan, menurunnya kualitas interaksi, hingga hilangnya kedekatan emosional antara orang tua dan anak.\n\nDetox Digital hadir sebagai solusi nyata. Anda akan mendapatkan panduan untuk: menghentikan kecanduan gadget tanpa konflik berlebihan, membuat anak lebih patuh tanpa harus marah-marah, mengembalikan bonding hangat dalam keluarga, dan menanamkan kebiasaan sehat di era digital. Disusun berdasarkan pengalaman nyata mendampingi anak & remaja — pendekatan emosional, spiritual, dan praktis.",
      hargaFisik: "Rp. 99K",
      hargaFisikAsli: "Rp 185.000",
      hargaEbook: "Rp. 35K",
      hargaEbookAsli: "Rp 105.000",
      badge: "Terlaris",
      badgeColor: "bg-primary text-primary-foreground",
      waFisik: "https://wa.me/6281808330427?text=Halo%20Coach%20Herdy%2C%20saya%20ingin%20memesan%20buku%20DETOX%20DIGITAL%20(Fisik)",
      waEbook: "https://wa.me/6281808330427?text=Halo%20Coach%20Herdy%2C%20saya%20ingin%20membeli%20ebook%20DETOX%20DIGITAL",
    },
  ];

  return (
    <section id="buku" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-none mb-4 px-4 py-1.5 text-sm font-medium rounded-full">
              Karya Herdy Leonardi
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Buku & <span className="text-secondary">E-Book</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tersedia dalam versi cetak dan digital. Dapatkan transformasi nyata melalui bacaan yang mengubah cara pandang Anda.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {books.map((book, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <Card className="overflow-hidden border-border/50 shadow-xl shadow-primary/5 hover:-translate-y-1 transition-all duration-300 bg-white h-full flex flex-col rounded-none relative">
                <div className="relative bg-primary/5 flex items-center justify-center p-4">
                  <span className={`absolute top-4 left-4 z-10 text-xs font-bold px-3 py-1 rounded-full ${book.badgeColor}`}>
                    {book.badge}
                  </span>
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full max-h-80 object-contain"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow relative overflow-hidden">
                  <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
                  <h3 className="text-xl font-bold text-primary mb-1">{book.title}</h3>
                  <p className="text-sm text-secondary font-semibold mb-3">{book.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">{book.desc}</p>

                  <div className="border-t border-border pt-5 space-y-3">
                    <div className="flex items-center justify-between bg-background rounded-xl border border-border px-4 py-3">
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">Buku Fisik</p>
                        {book.hargaFisikAsli && (
                          <p className="text-xs text-muted-foreground line-through">{book.hargaFisikAsli}</p>
                        )}
                        <div className="flex items-center gap-2">
                          <p className="text-lg font-bold text-primary">{book.hargaFisik}</p>
                          {book.hargaFisikAsli && (
                            <span className="text-[10px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wide">Promo</span>
                          )}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full font-semibold"
                        onClick={() => window.open(book.waFisik, "_blank")}
                      >
                        <FaWhatsapp className="mr-1.5" /> Pesan
                      </Button>
                    </div>
                    <div className="flex items-center justify-between bg-primary/5 rounded-xl border border-primary/10 px-4 py-3">
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">E-Book PDF</p>
                        {book.hargaEbookAsli && (
                          <p className="text-xs text-muted-foreground line-through">{book.hargaEbookAsli}</p>
                        )}
                        <div className="flex items-center gap-2">
                          <p className="text-lg font-bold text-primary">{book.hargaEbook}</p>
                          {book.hargaEbookAsli && (
                            <span className="text-[10px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wide">Promo</span>
                          )}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/5 rounded-full font-semibold"
                        onClick={() => window.open(book.waEbook, "_blank")}
                      >
                        <FaWhatsapp className="mr-1.5" /> Beli
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-4">Pembelian & pengiriman melalui WhatsApp langsung</p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 font-bold"
            onClick={() => window.open("https://wa.me/6281808330427?text=Halo%20Coach%20Herdy%2C%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20buku%20Anda", "_blank")}
          >
            <FaWhatsapp className="mr-2 text-lg" /> Tanya Lebih Lanjut
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-secondary blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-accent blur-[120px] rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Saatnya Keluarga Anda <span className="text-secondary">Bertumbuh Bersama</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Setiap hari yang berlalu adalah momen yang tak akan kembali. Jangan tunda untuk memperbaiki komunikasi dan membantu anak menemukan potensinya.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-full px-8 h-14 text-base shadow-lg shadow-secondary/20"
                onClick={() => window.open("https://wa.me/6281808330427", "_blank")}
              >
                <FaWhatsapp className="mr-2 text-xl" /> Hubungi via WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white font-bold rounded-full px-8 h-14 text-base"
              >
                Jadwalkan Seminar
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-primary tracking-tight mb-4">Herdy Leonardi</h3>
            <p className="text-muted-foreground max-w-md mb-6">
              Membangun generasi tangguh dan mengharmoniskan keluarga melalui pendekatan coaching yang hangat, berempati, dan berbasis spiritual.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <FaYoutube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <FaTiktok size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {['Tentang', 'Program', 'Dampak', 'Testimoni', 'Artikel'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <FaWhatsapp className="w-5 h-5 text-primary shrink-0" />
                <span>+62 818-0833-0427</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>eliptica13@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Jakarta Selatan, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Herdy Leonardi. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#20bd5a] hover:scale-110 transition-all cursor-pointer group"
      onClick={() => window.open("https://wa.me/6281808330427", "_blank")}
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      <FaWhatsapp size={28} className="relative z-10" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-foreground text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap hidden md:block">
        Konsultasi Sekarang
        <div className="absolute top-1/2 -translate-y-1/2 -right-2 border-8 border-transparent border-l-white" />
      </div>
    </motion.button>
  );
};

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background font-sans text-foreground overflow-x-hidden selection:bg-secondary selection:text-secondary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Credentials />
        <About />
        <Programs />
        <Books />
        <Impact />
        <Testimonials />
        <Insights />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
