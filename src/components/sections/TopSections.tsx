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
          Подобрать психолога
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
                Личный психолог в любое время{" "}
                <em className="not-italic" style={{ color: "var(--olive)" }}>за 2 250 рублей в неделю</em>
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="border-t my-8" style={{ borderColor: "var(--border)" }} />
              <p className="font-body text-lg leading-relaxed mb-4" style={{ color: "var(--text-muted)", maxWidth: "480px" }}>
                Не откладывайте важное на неделю. Пишите психологу между сессиями и работайте над запросом непрерывно
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="flex flex-col gap-2 mb-10">
                <div className="flex flex-wrap gap-3">
                  <a href="#form" className="btn-primary">
                    Подобрать психолога
                    <Icon name="ArrowRight" size={16} />
                  </a>
                  <a href="#how" className="btn-outline">Как это работает</a>
                </div>
                <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
                  Знакомство и подбор психолога — бесплатно
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={400}>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: "CalendarCheck", text: "2 сессии в месяц" },
                  { icon: "MessageCircle", text: "Личный чат между встречами" },
                  { icon: "UserCheck", text: "Один психолог все время" },
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
              <img src={PHOTOS.hero} alt="Индивидуальная онлайн-терапия" className="w-full h-full object-cover" />
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
              Личный психолог в любое время{" "}
              <em className="not-italic" style={{ color: "var(--olive)" }}>за 2 250 рублей в неделю</em>
            </h1>
          </FadeUp>
          <FadeUp delay={150} className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img src={PHOTOS.hero} alt="Индивидуальная онлайн-терапия" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(107,122,71,0.15) 0%, transparent 60%)" }} />
            </div>
          </FadeUp>
          <div className="pt-4">
            <FadeUp delay={200}>
              <p className="font-body text-lg leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                Не откладывайте важное на неделю. Пишите психологу между сессиями и работайте над запросом непрерывно
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="flex flex-col gap-2 mb-10">
                <div className="flex flex-wrap gap-3">
                  <a href="#form" className="btn-primary">
                    Подобрать психолога
                    <Icon name="ArrowRight" size={16} />
                  </a>
                  <a href="#how" className="btn-outline">Как это работает</a>
                </div>
                <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
                  Знакомство и подбор психолога — бесплатно
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={400}>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: "CalendarCheck", text: "2 сессии в месяц" },
                  { icon: "MessageCircle", text: "Личный чат между встречами" },
                  { icon: "UserCheck", text: "Один психолог все время" },
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
        <FadeUp>
          <div className="text-center mb-14">
            <div className="section-tag mb-4">почему так удобнее</div>
            <h2 className="font-display text-4xl lg:text-5xl font-light" style={{ color: "var(--text-main)" }}>
              Психолог нужен не только<br />
              <em className="not-italic" style={{ color: "var(--olive)" }}>один час в неделю</em>
            </h2>
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <p className="font-body text-base leading-relaxed mb-14 max-w-2xl mx-auto text-center" style={{ color: "var(--text-muted)" }}>
            Часто важные ситуации происходят между сессиями. Вместо того чтобы пытаться вспомнить всё через неделю, можно написать психологу сразу и продолжить работу в чате.
          </p>
        </FadeUp>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <FadeUp delay={150}>
            <div className="card-warm p-8 h-full">
              <div className="section-tag mb-4">классический формат</div>
              <ul className="space-y-3 mb-8">
                {["4 сессии в месяц", "Только встречи"].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-base" style={{ color: "var(--text-main)" }}>
                    <Icon name="Check" size={16} style={{ color: "var(--text-muted)" }} />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="font-display text-3xl font-light" style={{ color: "var(--text-muted)" }}>
                12 000–16 000 ₽ <span className="text-lg">/ мес</span>
              </div>
              <div className="font-body text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                ≈ 3 000–4 000 ₽ в неделю
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={250}>
            <div className="card-warm p-8 h-full" style={{ backgroundColor: "var(--olive)" }}>
              <div className="section-tag mb-4" style={{ color: "rgba(250,247,242,0.8)" }}>наш формат</div>
              <ul className="space-y-3 mb-8">
                {["2 индивидуальные сессии", "Личный чат между встречами"].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-base" style={{ color: "var(--cream)" }}>
                    <Icon name="Check" size={16} style={{ color: "var(--cream)" }} />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="font-display text-3xl font-light" style={{ color: "var(--cream)" }}>
                8 999 ₽ <span className="text-lg">/ мес</span>
              </div>
              <div className="font-body text-sm mt-2" style={{ color: "rgba(250,247,242,0.75)" }}>
                ≈ 2 250 ₽ в неделю
              </div>
              <div className="font-body text-sm mt-1 font-medium" style={{ color: "var(--cream)" }}>
                На 25–44% дешевле классического формата
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function PsychSlider({ onSelect }: { onSelect: (name: string) => void }) {
  const psychologists = [
    {
      name: "Дмитрий",
      education: "Московский институт психоанализа",
      experience: "4 года в профессии",
      topics: "тревожностью, выгоранием, проблемами с самооценкой и отношениями",
      approach: "Когнитивно-поведенческий подход, работа с конкретными ситуациями",
      photo: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/f0514b42-9bb6-4eb2-9fff-c19cd4c29576.PNG",
    },
    {
      name: "Наталья",
      education: "Санкт-Петербургский государственный университет",
      experience: "16 лет в профессии",
      topics: "тревожностью, выгоранием, проблемами с самооценкой и отношениями",
      approach: "Гештальт-подход, внимание к чувствам и отношениям",
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
              <div className="border-t pt-6" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Подход</p>
                <p className="font-light text-lg" style={{ color: "var(--text-main)" }}>{p.approach}</p>
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
            <button
              className="btn-primary mt-6"
              onClick={() => onSelect(p.name)}
            >
              Выбрать психолога
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PsychologistsSection({ onSelect }: { onSelect?: (name: string) => void }) {
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
          <PsychSlider
            onSelect={(name) => {
              onSelect?.(name);
              document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
            }}
          />
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