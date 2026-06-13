import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PHOTOS = {
  hero: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/acae5c0b-c267-4c44-9008-c26a67f4461e.jpg",
  group: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/e3b656eb-7074-4510-82b4-fe3247852689.jpg",
  portrait: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/f7353052-3dbf-4e6e-b0be-e454923ba7ab.jpg",
  journal: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/298cdf80-b9c5-4158-963e-d4eb0f59dc92.JPG",
  online: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/092201c9-e974-44a8-84f6-e88a2d7b795b.JPG",
};

const PAINS = [
  { icon: "Wind", text: "Тревога не отпускает", color: "bg-lavender-light" },
  { icon: "BatteryLow", text: "Работа забирает все силы", color: "bg-blue-light" },
  { icon: "Wallet", text: "Индивидуальная терапия кажется дорогой", color: "bg-blue-light" },
];

const STEPS = [
  { num: "01", title: "Оставьте заявку", text: "Это займёт менее 1 минуты" },
  { num: "02", title: "Уточним запрос", text: "Это важный этап для подбора подходящей вам группы с комфортными людьми" },
  { num: "03", title: "Подберём группу", text: "Найдём группу с близкими темами и небольшим составом участников" },
  { num: "04", title: "Начните встречи", text: "Присоединяйтесь к онлайн или офлайн сессиям" },
];

const DIRECTIONS = [
  { emoji: "🌿", title: "Тревожность и стресс", desc: "Группа, где учатся замечать триггеры и находить опору" },
  { emoji: "🔥", title: "Выгорание", desc: "Группа для тех, кто хочет восстановить ресурс и вернуть смысл в работу" },
  { emoji: "💬", title: "Отношения", desc: "Группа для разбора повторяющихся паттернов в отношениях" },
  { emoji: "💼", title: "Карьера и работа", desc: "Группа для тех, кто ищет направление и справляется с неудовлетворённостью" },
];

const BENEFITS = [
  { icon: "CircleDollarSign", title: "Доступнее индивидуальной", text: "От 1 500 ₽ за встречу вместо 4 000–8 000 ₽" },
  { icon: "Laptop", title: "Возможен онлайн формат", text: "Из любого города, в удобном месте" },
  { icon: "ShieldCheck", title: "Конфиденциальность", text: "Никаких записей без согласия, безопасное пространство" },
];

const FOR_WHOM = [
  "Давно думаете о терапии, но не знаете, с чего начать",
  "Хотите поддержки людей с похожим опытом",
  "Ищете более доступный формат психологической помощи",
  "Хотите работать в группе под руководством специалиста",
];

const REVIEW_SCREENSHOTS = [
  { id: 1, src: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/5e60ce87-d53b-4f2d-a15d-8492516202b4.JPG" },
  { id: 2, src: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/c56e8f58-e1a9-41bc-897a-df088c475490.JPG" },
  { id: 3, src: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/8223818c-a58c-4f3c-a848-70224f62735b.JPG" },
  { id: 4, src: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/ba65f3ca-086a-4145-9eff-b5fa2fc212b1.JPG" },
];

const FAQS = [
  {
    q: "Чем групповая терапия отличается от индивидуальной?",
    a: "В группе вы работаете не только с психологом, но и с другими участниками. Это добавляет возможность учиться на чужом опыте, получать обратную связь и чувствовать принадлежность. Индивидуальная терапия глубже персонализирована, групповая — богаче по социальному контексту.",
  },
  {
    q: "Можно ли участвовать анонимно?",
    a: "Да. Вы можете использовать имя или псевдоним на своё усмотрение. Мы не требуем раскрывать личные данные внутри группы.",
  },
  {
    q: "Сколько человек в группе?",
    a: "Как правило, 5–8 участников. Это оптимально: достаточно разнообразия историй, но каждый получает внимание и время.",
  },
  {
    q: "Кто ведёт встречи?",
    a: "Каждую группу ведёт лицензированный психолог с опытом групповой работы от 3 лет. Перед стартом мы знакомим вас с анкетой специалиста.",
  },
  {
    q: "Что делать, если будет некомфортно?",
    a: "Вы всегда можете написать нам после встречи. Мы поможем разобраться в ситуации, поговорить с ведущим или перейти в другую группу — без осуждения.",
  },
  {
    q: "Можно ли сначала просто оставить заявку и посмотреть?",
    a: "Конечно. Заявка ни к чему не обязывает. После неё мы свяжемся, ответим на вопросы и предложим формат — решение за вами.",
  },
  {
    q: "Как долго нужно ходить на сессии и как долго длится одна сессия?",
    a: "Сессия длится от 90 до 120 минут в зависимости от группы. Мы рекомендуем брать пакеты по 8 сессий. Вы можете перестать ходить на встречи, когда поймёте, что ваш запрос решён.",
  },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "var(--beige-dark)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <span className="font-body font-medium text-base" style={{ color: "var(--text-main)" }}>{q}</span>
        <span
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", color: "var(--olive)" }}
        >
          <Icon name="Plus" size={20} />
        </span>
      </div>
      {open && (
        <div className="pb-5 font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {a}
        </div>
      )}
    </div>
  );
}

function ReviewSlider() {
  const [current, setCurrent] = useState(0);
  const total = REVIEW_SCREENSHOTS.length;

  return (
    <div className="relative">
      <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: "var(--cream)" }}>
        <img
          src={REVIEW_SCREENSHOTS[current].src}
          alt={`Отзыв ${current + 1}`}
          className="w-full object-contain"
          style={{ maxHeight: "600px" }}
        />
      </div>
      <div className="flex items-center justify-between mt-5">
        <button
          onClick={() => setCurrent((current - 1 + total) % total)}
          className="flex items-center justify-center w-11 h-11 rounded-full transition-all hover:-translate-x-0.5"
          style={{ backgroundColor: "var(--cream)", border: "1px solid var(--beige-dark)", color: "var(--olive)" }}
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        <div className="flex gap-2">
          {REVIEW_SCREENSHOTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === current ? "var(--olive)" : "var(--beige-dark)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((current + 1) % total)}
          className="flex items-center justify-center w-11 h-11 rounded-full transition-all hover:translate-x-0.5"
          style={{ backgroundColor: "var(--cream)", border: "1px solid var(--beige-dark)", color: "var(--olive)" }}
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
    </div>
  );
}

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    topic: "",
    contactMethod: "telegram",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://functions.poehali.dev/2a22ec45-740f-4b26-860c-5396f7362ff8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) { console.error(err); }
    setSubmitted(true);
  };

  return (
    <div className="font-body" style={{ backgroundColor: "var(--cream)" }}>

      {/* NAV */}
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

      {/* HERO */}
      <section className="pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">

          {/* DESKTOP: текст слева, фото справа */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp delay={100}>
                <h1
                  className="font-display text-6xl xl:text-7xl font-light leading-tight mb-6"
                  style={{ color: "var(--text-main)" }}
                >
                  Психолог примерно на{" "}
                  <em className="not-italic" style={{ color: "var(--olive)" }}>41% дешевле</em>
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

          {/* MOBILE: заголовок → фото → текст+кнопки */}
          <div className="flex flex-col gap-8 lg:hidden">
            <FadeUp delay={100}>
              <h1
                className="font-display text-5xl font-light leading-tight"
                style={{ color: "var(--text-main)" }}
              >
                Психолог примерно на{" "}
                <em className="not-italic" style={{ color: "var(--olive)" }}>41% дешевле</em>
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

      {/* PAIN */}
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
        </div>
      </section>

      {/* SOLUTION */}
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
                <p className="font-body text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>Групповая терапия — это встречи с психологом и 5-8 людьми, которые проживают те же проблемы что и вы. Психолог ведет групповую динамику.  Изучая как другие справляются с похожими трудностями вам будет становится легче и вы быстрее решите свой запрос.</p>
              </FadeUp>
              <FadeUp delay={300}>
                <div className="space-y-4">
                  {[
                    "Слышать истории других — и узнавать в них себя",
                    "Получать обратную связь в безопасном пространстве",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "var(--olive)" }}
                      >
                        <Icon name="Check" size={11} style={{ color: "var(--cream)" }} />
                      </div>
                      <span className="font-body text-sm leading-relaxed" style={{ color: "var(--text-main)" }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      {(() => {
        const galleryPhotos = [
          [PHOTOS.hero, PHOTOS.group],
          [PHOTOS.portrait, PHOTOS.online],
          [PHOTOS.journal, PHOTOS.hero],
        ];
        const GallerySlider = () => {
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
                  {galleryPhotos.map((pair, i) => (
                    <div key={i} className="min-w-full grid grid-cols-2 gap-3">
                      {pair.map((src, j) => (
                        <div key={j} className="rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                          <img src={src} alt={`Атмосфера ${i * 2 + j + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
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
        };
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
      })()}

      {/* HOW IT WORKS */}
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

      {/* PSYCHOLOGISTS */}
      {(() => {
        const psychologists = [
          {
            name: "Дмитрий",
            education: "Московский институт психоанализа",
            experience: "4 года в профессии",
            reviews: "Сотни положительных отзывов",
            photo: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/f0514b42-9bb6-4eb2-9fff-c19cd4c29576.PNG",
          },
          {
            name: "Наталья",
            education: "Санкт-Петербургский государственный университет",
            experience: "16 лет в профессии",
            reviews: "Сотни положительных отзывов",
            photo: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/82517d50-f9f9-4683-994d-bc65bc98e8f8.PNG",
          },
        ];

        const PsychSlider = () => {
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
                        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Репутация</p>
                        <p className="font-light text-lg" style={{ color: "var(--text-main)" }}>{p.reviews}</p>
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
        };

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
            </div>
          </section>
        );
      })()}

      {/* ACCENT DIVIDER */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <p
              className="font-display text-3xl lg:text-4xl font-light leading-snug"
              style={{ color: "var(--text-main)" }}
            >
              Выберите направление —<br />
              <em className="not-italic" style={{ color: "var(--olive)" }}>мы подберём подходящую группу</em>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section id="directions" className="py-28" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <div className="section-tag mb-4">направления групп</div>
              <h2 className="font-display text-4xl lg:text-5xl font-light" style={{ color: "var(--text-main)" }}>
                Найдите своё
              </h2>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {DIRECTIONS.map((dir, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="card-warm p-8">
                  <div className="text-4xl mb-6">{dir.emoji}</div>
                  <h3 className="font-display text-2xl font-light mb-3" style={{ color: "var(--text-main)" }}>
                    {dir.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {dir.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <div className="section-tag mb-4">почему выбирают нас</div>
              </FadeUp>
              <FadeUp delay={100}>
                <h2
                  className="font-display text-4xl lg:text-5xl font-light mb-12"
                  style={{ color: "var(--text-main)" }}
                >
                  Всё, что нужно<br />
                  <em className="not-italic" style={{ color: "var(--olive)" }}>для безопасной работы</em>
                </h2>
              </FadeUp>
              <div className="space-y-5">
                {BENEFITS.map((b, i) => (
                  <FadeUp key={i} delay={i * 70}>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "var(--beige)" }}
                      >
                        <span style={{ color: "var(--olive)" }}>
                          <Icon name={b.icon} size={18} />
                        </span>
                      </div>
                      <div>
                        <div className="font-body font-medium text-sm mb-0.5" style={{ color: "var(--text-main)" }}>
                          {b.title}
                        </div>
                        <div className="font-body text-sm" style={{ color: "var(--text-muted)" }}>{b.text}</div>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            <FadeUp delay={200}>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={PHOTOS.online} alt="Онлайн встреча группы" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--lavender-light)" }}>
                  <h3 className="font-display text-xl font-medium mb-3" style={{ color: "var(--text-main)" }}>
                    Кому подходит?
                  </h3>
                  <div className="space-y-2.5">
                    {FOR_WHOM.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: "var(--olive)" }}
                        />
                        <span className="font-body text-sm leading-relaxed" style={{ color: "var(--text-main)" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-10">
              <div className="section-tag mb-4">отзывы</div>
              <h2 className="font-display text-4xl lg:text-5xl font-light mb-6" style={{ color: "var(--text-main)" }}>
                Те, кто уже попробовал
              </h2>
              <div className="inline-flex flex-col items-center gap-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-6xl font-light" style={{ color: "var(--olive)" }}>4.9</span>
                  <div className="flex flex-col items-start">
                    <div className="flex">
                      {[1,2,3,4,5].map((s) => (
                        <span key={s} className="text-amber-400 text-xl">★</span>
                      ))}
                    </div>
                    <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>средняя оценка клиентов</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <ReviewSlider />
          </FadeUp>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="section-tag mb-4">стоимость</div>
            <h2 className="font-display lg:text-5xl font-light mb-6 text-3xl" style={{ color: "var(--text-main)" }}>Скидка 20% при покупке от 8 сессий.</h2>
            <div className="font-display text-6xl font-light mb-2" style={{ color: "var(--olive)" }}>1 500 ₽ - за онлайн встречу
2000  ₽ - за офлайн встречу </div>
            <p className="font-body text-base mb-2" style={{ color: "var(--text-muted)" }}></p>
            <p
              className="font-body text-sm mb-10 max-w-xl mx-auto"
              style={{ color: "var(--text-muted)" }}
            ></p>
            <a href="#form" className="btn-primary text-base px-8 py-4">
              Узнать подходящий формат
              <Icon name="ArrowRight" size={16} />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-tag mb-4">вопросы и ответы</div>
              <h2 className="font-display text-4xl lg:text-5xl font-light" style={{ color: "var(--text-main)" }}>
                Частые вопросы
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="rounded-3xl p-8" style={{ backgroundColor: "var(--cream)" }}>
              {FAQS.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 overflow-hidden relative" style={{ backgroundColor: "var(--olive)" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C8C0DC 0%, transparent 50%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <h2
              className="font-display text-5xl lg:text-6xl font-light mb-6 leading-tight"
              style={{ color: "var(--cream)" }}
            >
              Попробуйте найти группу,<br />
              <em className="not-italic" style={{ color: "var(--sage)" }}>
                где вас действительно поймут
              </em>
            </h2>
            <p className="font-body text-lg mb-10" style={{ color: "rgba(250,247,242,0.75)" }}>
              Оставьте заявку и мы решим ваш запрос вместе
            </p>
            <a
              href="#form"
              className="inline-flex items-center gap-2 font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--cream)",
                color: "var(--olive)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              Подобрать группу
              <Icon name="ArrowRight" size={16} />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="section-tag mb-4">заявка</div>
              <h2 className="font-display text-4xl lg:text-5xl font-light mb-4" style={{ color: "var(--text-main)" }}>
                Оставьте заявку
              </h2>
              <p className="font-body text-base" style={{ color: "var(--text-muted)" }}>
                Никаких обязательств — просто расскажите о себе, и мы подберём варианты
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            {submitted ? (
              <div
                className="text-center py-16 rounded-3xl"
                style={{ backgroundColor: "var(--beige)" }}
              >
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="font-display text-3xl font-medium mb-3" style={{ color: "var(--text-main)" }}>
                  Заявка принята!
                </h3>
                <p className="font-body" style={{ color: "var(--text-muted)" }}>
                  Мы свяжемся с вами в течение суток
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-3xl p-8"
                style={{ backgroundColor: "var(--beige)" }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block font-body text-sm font-medium mb-2"
                      style={{ color: "var(--text-main)" }}
                    >
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Как вас зовут?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: "var(--cream)",
                        border: "1px solid var(--beige-dark)",
                        color: "var(--text-main)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-body text-sm font-medium mb-2"
                      style={{ color: "var(--text-main)" }}
                    >
                      Телефон или Telegram
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+7 ... или @username"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none transition-all"
                      style={{
                        backgroundColor: "var(--cream)",
                        border: "1px solid var(--beige-dark)",
                        color: "var(--text-main)",
                      }}
                    />
                  </div>
                </div>



                <div>
                  <label
                    className="block font-body text-sm font-medium mb-2"
                    style={{ color: "var(--text-main)" }}
                  >
                    Удобный способ связи
                  </label>
                  <div className="flex gap-3">
                    {["telegram", "max", "phone"].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: method })}
                        className="flex-1 py-2.5 rounded-xl font-body text-sm font-medium transition-all"
                        style={{
                          backgroundColor:
                            formData.contactMethod === method ? "var(--olive)" : "var(--cream)",
                          color:
                            formData.contactMethod === method ? "var(--cream)" : "var(--text-muted)",
                          border: "1px solid var(--beige-dark)",
                        }}
                      >
                        {method === "telegram" ? "Telegram" : method === "max" ? "MAX" : "Звонок"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className="block font-body text-sm font-medium mb-2"
                    style={{ color: "var(--text-main)" }}
                  >
                    Комментарий (необязательно)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Расскажите подробнее, если хотите..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none resize-none"
                    style={{
                      backgroundColor: "var(--cream)",
                      border: "1px solid var(--beige-dark)",
                      color: "var(--text-main)",
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                  Отправить заявку
                  <Icon name="ArrowRight" size={16} />
                </button>
                <p className="font-body text-xs text-center" style={{ color: "var(--text-muted)" }}>
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </FadeUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t" style={{ borderColor: "var(--beige-dark)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-semibold" style={{ color: "var(--olive)" }}>
              Вместе
            </span>
            <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
              — групповая терапия онлайн
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="font-body text-xs underline underline-offset-2 hover:opacity-70 transition-opacity"
              style={{ color: "var(--text-muted)" }}
            >
              Политика обработки персональных данных
            </button>
            <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
              © 2024 · Все права защищены
            </p>
          </div>
        </div>
      </footer>

      {/* PRIVACY MODAL */}
      {privacyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl overflow-hidden flex flex-col"
            style={{ backgroundColor: "var(--cream)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: "var(--beige-dark)" }}>
              <h2 className="font-display text-xl font-semibold" style={{ color: "var(--text-main)" }}>
                Политика обработки персональных данных
              </h2>
              <button
                onClick={() => setPrivacyOpen(false)}
                className="flex items-center justify-center w-9 h-9 rounded-full hover:opacity-70 transition-opacity"
                style={{ backgroundColor: "var(--beige)" }}
              >
                <Icon name="X" size={18} />
              </button>
            </div>
            <div className="overflow-y-auto px-8 py-6 font-body text-sm leading-relaxed space-y-4" style={{ color: "var(--text-muted)" }}>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>1. Общие положения</h3>
                <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Кеслев Антон Дмитриевич (далее — Оператор).</p>
                <p className="mt-2">1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
                <p className="mt-2">1.2. Настоящая Политика применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>2. Основные понятия</h3>
                <p>2.1. Автоматизированная обработка персональных данных — обработка персональных данных с помощью средств вычислительной техники.</p>
                <p className="mt-2">2.2. Блокирование персональных данных — временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).</p>
                <p className="mt-2">2.3. Веб-сайт — совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет.</p>
                <p className="mt-2">2.6. Обработка персональных данных — любое действие (операция) или совокупность действий, совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу, обезличивание, блокирование, удаление, уничтожение персональных данных.</p>
                <p className="mt-2">2.8. Персональные данные — любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта.</p>
                <p className="mt-2">2.10. Пользователь — любой посетитель веб-сайта.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>3. Основные права и обязанности Оператора</h3>
                <p>3.1. Оператор имеет право получать от субъекта персональных данных достоверные информацию и/или документы, содержащие персональные данные; самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных.</p>
                <p className="mt-2">3.2. Оператор обязан: предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных; организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ; принимать правовые, организационные и технические меры для защиты персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>4. Основные права и обязанности субъектов персональных данных</h3>
                <p>4.1. Субъекты персональных данных имеют право: получать информацию, касающуюся обработки его персональных данных; требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими или неточными; на отзыв согласия на обработку персональных данных.</p>
                <p className="mt-2">4.2. Субъекты персональных данных обязаны: предоставлять Оператору достоверные данные о себе; сообщать Оператору об уточнении своих персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>5. Принципы обработки персональных данных</h3>
                <p>5.1. Обработка персональных данных осуществляется на законной и справедливой основе.</p>
                <p className="mt-2">5.2. Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей.</p>
                <p className="mt-2">5.4. Обработке подлежат только персональные данные, которые отвечают целям их обработки.</p>
                <p className="mt-2">5.7. Хранение персональных данных осуществляется не дольше, чем этого требуют цели обработки персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>6. Цели обработки персональных данных</h3>
                <p><strong>Цель обработки:</strong> информирование Пользователя посредством отправки электронных писем.</p>
                <p className="mt-2"><strong>Персональные данные:</strong> фамилия, имя, отчество; номера телефонов; запросы клиента и информацию, которую он пожелал дополнительно оставить.</p>
                <p className="mt-2"><strong>Правовые основания:</strong> обработка персональных данных осуществляется на основании согласия субъекта персональных данных: пункт 1 части 1 статьи 6 Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных».</p>
                <p className="mt-2"><strong>Виды обработки:</strong> сбор, запись, систематизация, накопление, хранение, уничтожение и обезличивание персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>7. Условия обработки персональных данных</h3>
                <p>7.1. Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.</p>
                <p className="mt-2">7.4. Обработка персональных данных необходима для исполнения договора, стороной которого является субъект персональных данных.</p>
                <p className="mt-2">7.5. Обработка персональных данных необходима для осуществления прав и законных интересов оператора при условии, что при этом не нарушаются права и свободы субъекта персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>8. Порядок сбора, хранения, передачи и других видов обработки персональных данных</h3>
                <p>8.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</p>
                <p className="mt-2">8.2. Персональные данные Пользователя никогда не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.</p>
                <p className="mt-2">8.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их, направив уведомление на электронную почту: <a href="mailto:mr.keslev@mail.ru" className="underline" style={{ color: "var(--olive)" }}>mr.keslev@mail.ru</a> с пометкой «Актуализация персональных данных».</p>
                <p className="mt-2">8.4. Срок обработки персональных данных определяется достижением целей, для которых были собраны персональные данные. Пользователь может в любой момент отозвать своё согласие, направив письмо на <a href="mailto:mr.keslev@mail.ru" className="underline" style={{ color: "var(--olive)" }}>mr.keslev@mail.ru</a> с пометкой «Отзыв согласия на обработку персональных данных».</p>
                <p className="mt-2">8.7. Оператор при обработке персональных данных обеспечивает конфиденциальность персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>9. Перечень действий с персональными данными</h3>
                <p>9.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу, обезличивание, блокирование, удаление и уничтожение персональных данных.</p>
                <p className="mt-2">9.2. Оператор осуществляет автоматизированную обработку персональных данных с получением и/или передачей полученной информации по информационно-телекоммуникационным сетям.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>10. Трансграничная передача персональных данных</h3>
                <p>10.1. Оператор до начала осуществления деятельности по трансграничной передаче персональных данных обязан уведомить уполномоченный орган по защите прав субъектов персональных данных о своём намерении осуществлять трансграничную передачу персональных данных.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>11. Конфиденциальность персональных данных</h3>
                <p>Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.</p>
              </section>
              <section>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-main)" }}>12. Заключительные положения</h3>
                <p>12.1. Пользователь может получить любые разъяснения по вопросам обработки его персональных данных, обратившись к Оператору по электронной почте <a href="mailto:mr.keslev@mail.ru" className="underline" style={{ color: "var(--olive)" }}>mr.keslev@mail.ru</a>.</p>
                <p className="mt-2">12.2. В данном документе будут отражены любые изменения политики обработки персональных данных. Политика действует бессрочно до замены её новой версией.</p>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}