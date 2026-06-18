import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";
import { FadeUp } from "@/components/shared/FadeUp";
import { PHOTOS, PAINS, STEPS } from "@/components/shared/data";

export function NavSection() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(250,247,242,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--beige-dark)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold" style={{ color: "var(--olive)" }}>Вместе</span>
          <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>терапия</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Как это работает", "Направления", "Отзывы", "FAQ"].map((item, i) => (
            <a
              key={i}
              href={`#${["how", "directions", "reviews", "faq"][i]}`}
              className="font-body text-sm transition-colors hover:text-olive"
              style={{ color: "var(--text-muted)" }}
            >
              {item}
            </a>
          ))}
        </div>
        <a href="#form" className="btn-primary text-sm py-2.5 px-5">
          Подобрать группу
        </a>
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="pt-16 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeUp delay={100}>
              <h1
                className="font-display text-6xl xl:text-7xl font-light leading-tight mb-6"
                style={{ color: "var(--text-main)" }}
              >
                Онлайн и офлайн-группы с психологом{" "}
                <em className="not-italic" style={{ color: "var(--olive)" }}>от 1 500 ₽ за встречу</em>
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="border-t my-8" style={{ borderColor: "var(--border)" }} />
              <p className="font-body text-lg leading-relaxed mb-8" style={{ color: "var(--text-muted)", maxWidth: "480px" }}>
                Проводим групповые терапии с профессиональными психологами для 5–8 человек от 1500 рублей за встречу.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#form" className="btn-primary">
                  Подобрать группу
                  <Icon name="ArrowRight" size={16} />
                </a>
                <a href="#how" className="btn-outline">Как это работает</a>
              </div>
            </FadeUp>
            <FadeUp delay={400}>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: "MapPin", text: "Офлайн и онлайн в Москве" },
                  { icon: "Users", text: "Группы до 10 человек" },
                  { icon: "Sparkles", text: "Подбор под запрос" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span style={{ color: "var(--olive)" }}><Icon name={item.icon} size={15} /></span>
                    <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={150} className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img src={PHOTOS.hero} alt="Групповая терапия онлайн" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(107,122,71,0.15) 0%, transparent 60%)" }} />
            </div>
          </FadeUp>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-8 lg:hidden">
          <FadeUp delay={100}>
            <h1
              className="font-display text-5xl font-light leading-tight"
              style={{ color: "var(--text-main)" }}
            >
              Онлайн и офлайн-группы с психологом{" "}
              <em className="not-italic" style={{ color: "var(--olive)" }}>от 1 500 ₽ за встречу</em>
            </h1>
          </FadeUp>
          <FadeUp delay={150} className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img src={PHOTOS.hero} alt="Групповая терапия онлайн" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(107,122,71,0.15) 0%, transparent 60%)" }} />
            </div>
          </FadeUp>
          <div className="pt-4">
            <FadeUp delay={200}>
              <p className="font-body text-lg leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                Проводим групповые терапии с профессиональными психологами для 5–8 человек от 1500 рублей за встречу.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#form" className="btn-primary">
                  Подобрать группу
                  <Icon name="ArrowRight" size={16} />
                </a>
                <a href="#how" className="btn-outline">Как это работает</a>
              </div>
            </FadeUp>
            <FadeUp delay={400}>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: "MapPin", text: "Офлайн и онлайн в Москве" },
                  { icon: "Users", text: "Группы до 10 человек" },
                  { icon: "Sparkles", text: "Подбор под запрос" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span style={{ color: "var(--olive)" }}><Icon name={item.icon} size={15} /></span>
                    <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PainSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--beige)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <div className="section-tag mb-4">вы не одни</div>
            <h2 className="font-display text-4xl lg:text-5xl font-light" style={{ color: "var(--text-main)" }}>
              Иногда кажется, что с этим<br />
              <em className="not-italic" style={{ color: "var(--olive)" }}>приходится справляться одному</em>
            </h2>
          </div>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAINS.map((pain, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div
                className={`${pain.color} rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(107,122,71,0.12)" }}
                >
                  <span style={{ color: "var(--olive)" }}>
                    <Icon name={pain.icon} size={18} />
                  </span>
                </div>
                <p className="font-body text-base leading-snug pt-1" style={{ color: "var(--text-main)" }}>
                  {pain.text}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={200}>
          <div className="text-center mt-12">
            <button
              className="btn-primary"
              onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Перестать справляться одному
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function SolutionSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="grid grid-cols-2 gap-3" style={{ aspectRatio: "1" }}>
              <div className="rounded-2xl overflow-hidden row-span-2">
                <img src={PHOTOS.group} alt="Группа поддержки" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={PHOTOS.portrait} alt="Участница терапии" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={PHOTOS.journal} alt="Дневник терапии" className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeUp>
          <div>
            <FadeUp>
              <div className="section-tag mb-4">почему группа работает</div>
            </FadeUp>
            <FadeUp delay={100}>
              <h2
                className="font-display text-4xl lg:text-5xl font-light leading-tight mb-6"
                style={{ color: "var(--text-main)" }}
              >
                Групповая терапия — это{" "}
                <em className="not-italic" style={{ color: "var(--olive)" }}>поддержка людей с похожим опытом</em>
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Групповая терапия — это встречи с психологом и 5–8 людьми, которые проживают те же трудности что и вы. Психолог ведет встречу. Изучая как другие справляются с похожими ситуациями вам будет становится легче и вы сможете приблизиться к решению вашего запроса.</p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function PsychSlider() {
  const psychologists = [
    {
      name: "Дмитрий",
      education: "Московский институт психоанализа",
      experience: "4 года в профессии",
      topics: "тревожностью, выгоранием, проблемами с самооценкой и отношениями",
      photo: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/f0514b42-9bb6-4eb2-9fff-c19cd4c29576.PNG",
    },
    {
      name: "Наталья",
      education: "Санкт-Петербургский государственный университет",
      experience: "16 лет в профессии",
      topics: "тревожностью, выгоранием, проблемами с самооценкой и отношениями",
      photo: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/82517d50-f9f9-4683-994d-bc65bc98e8f8.PNG",
    },
  ];

  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const goTo = (idx: number) => setActive(Math.max(0, Math.min(psychologists.length - 1, idx)));

  const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? active + 1 : active - 1);
  };
  const onMouseDown = (e: React.MouseEvent) => { isDragging.current = true; startX.current = e.clientX; };
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = startX.current - e.clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? active + 1 : active - 1);
  };

  const p = psychologists[active];
  return (
    <div>
      <div
        ref={trackRef}
        className="select-none cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-4xl mx-auto">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={p.photo} alt={p.name} className="w-full h-full object-cover object-top transition-all duration-500" />
          </div>
          <div>
            <p className="section-tag mb-4">психолог</p>
            <h3 className="font-display text-5xl lg:text-6xl font-light mb-8" style={{ color: "var(--text-main)" }}>
              {p.name}
            </h3>
            <div className="space-y-6">
              <div className="border-t pt-6" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Образование</p>
                <p className="font-light text-lg" style={{ color: "var(--text-main)" }}>{p.education}</p>
              </div>
              <div className="border-t pt-6" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Опыт</p>
                <p className="font-light text-lg" style={{ color: "var(--text-main)" }}>{p.experience}</p>
              </div>
              <div className="border-t pt-6" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Работает с</p>
                <p className="font-light text-lg" style={{ color: "var(--text-main)" }}>{p.topics}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-opacity disabled:opacity-30"
                style={{ borderColor: "var(--border)" }}
              >
                <Icon name="ChevronLeft" size={18} />
              </button>
              <div className="flex gap-2">
                {psychologists.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{ backgroundColor: i === active ? "var(--text-main)" : "var(--border)" }}
                  />
                ))}
              </div>
              <button
                onClick={() => goTo(active + 1)}
                disabled={active === psychologists.length - 1}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-opacity disabled:opacity-30"
                style={{ borderColor: "var(--border)" }}
              >
                <Icon name="ChevronRight" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PsychologistsSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--beige)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <div className="section-tag mb-4">специалисты</div>
            <h2 className="font-display text-4xl lg:text-5xl font-light" style={{ color: "var(--text-main)" }}>
              Наши психологи
            </h2>
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <PsychSlider />
        </FadeUp>
        <FadeUp delay={200}>
          <div className="text-center mt-16">
            <button
              className="btn-primary"
              onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Хочу к психологу
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function GallerySlider() {
  const galleryPhotos = [PHOTOS.hero, PHOTOS.group, PHOTOS.portrait, PHOTOS.online, PHOTOS.journal];
  const [slide, setSlide] = useState(0);
  const startX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) setSlide(s => Math.max(0, Math.min(galleryPhotos.length - 1, s + (diff > 0 ? 1 : -1))));
  };
  return (
    <div>
      <div
        className="overflow-hidden rounded-2xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {galleryPhotos.map((src, i) => (
            <div key={i} className="min-w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img src={src} alt={`Атмосфера ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => setSlide(s => Math.max(0, s - 1))}
          disabled={slide === 0}
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-opacity disabled:opacity-30"
          style={{ borderColor: "var(--border)" }}
        >
          <Icon name="ChevronLeft" size={18} />
        </button>
        <div className="flex gap-2">
          {galleryPhotos.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{ backgroundColor: i === slide ? "var(--text-main)" : "var(--border)" }}
            />
          ))}
        </div>
        <button
          onClick={() => setSlide(s => Math.min(galleryPhotos.length - 1, s + 1))}
          disabled={slide === galleryPhotos.length - 1}
          className="w-10 h-10 rounded-full border flex items-center justify-center transition-opacity disabled:opacity-30"
          style={{ borderColor: "var(--border)" }}
        >
          <Icon name="ChevronRight" size={18} />
        </button>
      </div>
    </div>
  );
}

export function PhotoGallerySection() {
  return (
    <section className="py-4 overflow-hidden" style={{ backgroundColor: "var(--beige)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <FadeUp>
          <div className="text-center mb-10">
            <div className="section-tag mb-3">атмосфера живых встреч</div>
            <h2 className="font-display text-3xl font-light" style={{ color: "var(--text-main)" }}>
              Тёплое пространство для настоящего разговора
            </h2>
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <GallerySlider />
        </FadeUp>
        <FadeUp delay={200}>
          <p className="text-center font-body text-sm mt-6" style={{ color: "var(--text-muted)" }}>
            Возможен и онлайн формат
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <div className="section-tag mb-4">просто и понятно</div>
            <h2 className="font-display text-4xl lg:text-5xl font-light" style={{ color: "var(--text-main)" }}>
              Как это работает
            </h2>
          </div>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="relative">
                <div className="font-display text-6xl font-light mb-4" style={{ color: "var(--beige-dark)" }}>
                  {step.num}
                </div>
                <h3 className="font-display text-2xl font-medium mb-3" style={{ color: "var(--text-main)" }}>
                  {step.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.text}
                </p>
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 -right-3 z-10"
                    style={{ color: "var(--olive)", opacity: 0.4 }}
                  >
                    <Icon name="ArrowRight" size={20} />
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
