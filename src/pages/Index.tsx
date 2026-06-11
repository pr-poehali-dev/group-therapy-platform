import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PHOTOS = {
  hero: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/acae5c0b-c267-4c44-9008-c26a67f4461e.jpg",
  group: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/e3b656eb-7074-4510-82b4-fe3247852689.jpg",
  portrait: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/bucket/f7353052-3dbf-4e6e-b0be-e454923ba7ab.jpg",
  journal: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/files/1a2b14d0-a61e-45da-bafe-17e7127b97a7.jpg",
  online: "https://cdn.poehali.dev/projects/1b1371b5-5150-452d-a7e3-0551ef6d4722/files/fb364811-d06e-4089-9001-135319e8a752.jpg",
};

const PAINS = [
  { icon: "Wind", text: "Тревога не отпускает", color: "bg-lavender-light" },
  { icon: "BatteryLow", text: "Работа забирает все силы", color: "bg-blue-light" },
  { icon: "RefreshCw", text: "Одни и те же проблемы в отношениях", color: "bg-beige" },
  { icon: "Wallet", text: "Индивидуальная терапия кажется дорогой", color: "bg-blue-light" },
  { icon: "Heart", text: "Хочется поддержки, но сложно открыться", color: "bg-lavender-light" },
  { icon: "CloudRain", text: "Ощущение, что справляешься в одиночку", color: "bg-beige" },
];

const STEPS = [
  { num: "01", title: "Оставьте заявку", text: "Кратко опишите, что вас беспокоит — это займёт 2 минуты" },
  { num: "02", title: "Уточним запрос", text: "Свяжемся с вами, чтобы лучше понять ситуацию и подобрать подходящий формат" },
  { num: "03", title: "Подберём группу", text: "Найдём группу с близкими темами и небольшим составом участников" },
  { num: "04", title: "Начните встречи", text: "Присоединяйтесь к онлайн-сессиям в удобное время" },
];

const DIRECTIONS = [
  { emoji: "🌿", title: "Тревожность и стресс", desc: "Научиться замечать триггеры и находить опору" },
  { emoji: "🔥", title: "Выгорание", desc: "Восстановить ресурс и вернуть смысл в работу" },
  { emoji: "💬", title: "Отношения", desc: "Разобраться в повторяющихся паттернах" },
  { emoji: "🪞", title: "Самооценка", desc: "Выстроить устойчивое отношение к себе" },
  { emoji: "💼", title: "Карьера и работа", desc: "Найти направление и справиться с неудовлетворённостью" },
  { emoji: "🌙", title: "Одиночество", desc: "Почувствовать связь и принадлежность" },
];

const BENEFITS = [
  { icon: "CircleDollarSign", title: "Доступнее индивидуальной", text: "От 1 500 ₽ за встречу вместо 4 000–8 000 ₽" },
  { icon: "Users", title: "Малые группы", text: "До 8–10 человек — всегда есть место и время" },
  { icon: "Target", title: "Похожие запросы", text: "Участники подобраны по смежным темам" },
  { icon: "GraduationCap", title: "Профессиональный психолог", text: "Лицензированный специалист ведёт каждую встречу" },
  { icon: "Laptop", title: "Онлайн формат", text: "Из любого города, в удобном месте" },
  { icon: "ShieldCheck", title: "Конфиденциальность", text: "Никаких записей без согласия, безопасное пространство" },
];

const FOR_WHOM = [
  "Давно думаете о терапии, но не знаете, с чего начать",
  "Хотите поддержки людей с похожим опытом",
  "Ищете более доступный формат психологической помощи",
  "Хотите работать в группе под руководством специалиста",
];

const REVIEWS = [
  {
    name: "Анна, 31 год",
    topic: "Тревожность",
    text: "Я боялась, что в группе будет неловко. Но уже после второй встречи поняла — здесь можно говорить честно. Ощущение, что тебя наконец слышат.",
    color: "bg-lavender-light",
  },
  {
    name: "Михаил, 38 лет",
    topic: "Выгорание",
    text: "Работал по 12 часов и думал, что это норма. Группа помогла увидеть, как я сам создаю себе ловушки. Стало намного легче.",
    color: "bg-blue-light",
  },
  {
    name: "Екатерина, 27 лет",
    topic: "Самооценка",
    text: "Индивидуальная терапия была не по карману. Групповой формат оказался даже эффективнее — слышишь чужие истории и узнаёшь себя.",
    color: "bg-beige",
  },
  {
    name: "Дмитрий, 34 года",
    topic: "Отношения",
    text: "Понял, что у моих проблем в отношениях есть корни. Психолог помог их увидеть, а группа — почувствовать, что я не один такой.",
    color: "bg-lavender-light",
  },
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
    a: "Как правило, 6–10 участников. Это оптимально: достаточно разнообразия историй, но каждый получает внимание и время.",
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

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    topic: "",
    contactMethod: "telegram",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeUp>
                <div className="section-tag mb-6">онлайн · групповая терапия</div>
              </FadeUp>
              <FadeUp delay={100}>
                <h1
                  className="font-display text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6"
                  style={{ color: "var(--text-main)" }}
                >
                  Найдите группу,{" "}
                  <em className="not-italic" style={{ color: "var(--olive)" }}>где вас</em>{" "}
                  поймут
                </h1>
              </FadeUp>
              <FadeUp delay={200}>
                <p
                  className="font-body text-lg leading-relaxed mb-8"
                  style={{ color: "var(--text-muted)", maxWidth: "480px" }}
                >
                  Подберём небольшую онлайн-группу с психологом под ваш запрос: тревожность, стресс, отношения, выгорание или самооценка.
                </p>
              </FadeUp>
              <FadeUp delay={300}>
                <div className="flex flex-wrap gap-3 mb-10">
                  <a href="#form" className="btn-primary">
                    Подобрать группу
                    <Icon name="ArrowRight" size={16} />
                  </a>
                  <a href="#how" className="btn-outline">
                    Как это работает
                  </a>
                </div>
              </FadeUp>
              <FadeUp delay={400}>
                <div className="flex flex-wrap gap-6">
                  {[
                    { icon: "MapPin", text: "Онлайн из любого города" },
                    { icon: "Users", text: "Группы до 10 человек" },
                    { icon: "Sparkles", text: "Подбор под запрос" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span style={{ color: "var(--olive)" }}>
                        <Icon name={item.icon} size={15} />
                      </span>
                      <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={150} className="relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src={PHOTOS.hero}
                  alt="Групповая терапия онлайн"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(107,122,71,0.15) 0%, transparent 60%)" }}
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 lg:-left-10 card-warm flex items-center gap-3"
                style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--sage)" }}
                >
                  <Icon name="Heart" size={18} style={{ color: "white" }} />
                </div>
                <div>
                  <div className="font-body font-semibold text-sm" style={{ color: "var(--text-main)" }}>
                    87 групп запущено
                  </div>
                  <div className="font-body text-xs" style={{ color: "var(--text-muted)" }}>с 2022 года</div>
                </div>
              </div>
              <div
                className="absolute -top-4 -right-4 lg:-right-6 rounded-2xl px-4 py-2.5"
                style={{ backgroundColor: "var(--lavender)", boxShadow: "0 8px 24px rgba(200,192,220,0.4)" }}
              >
                <div className="font-body text-sm font-medium" style={{ color: "#4a3f6e" }}>⭐ 4.9 / 5</div>
              </div>
            </FadeUp>
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
                <p className="font-body text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                  В группе вы работаете с психологом и другими участниками, которые сталкиваются с похожими трудностями. Это помогает почувствовать поддержку, посмотреть на ситуацию по-новому и постепенно менять привычные сценарии.
                </p>
              </FadeUp>
              <FadeUp delay={300}>
                <div className="space-y-4">
                  {[
                    "Слышать истории других — и узнавать в них себя",
                    "Получать обратную связь в безопасном пространстве",
                    "Замечать прогресс — свой и других",
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
      <section className="py-4 overflow-hidden" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <FadeUp>
            <div className="text-center mb-10">
              <div className="section-tag mb-3">атмосфера</div>
              <h2 className="font-display text-3xl font-light" style={{ color: "var(--text-main)" }}>
                Тёплое пространство для настоящего разговора
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[PHOTOS.hero, PHOTOS.group, PHOTOS.portrait, PHOTOS.online, PHOTOS.journal, PHOTOS.hero].map((src, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
                  style={{ aspectRatio: i % 3 === 1 ? "3/4" : "4/3" }}
                >
                  <img
                    src={src}
                    alt={`Групповая терапия ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

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

      {/* DIRECTIONS */}
      <section id="directions" className="py-20" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-tag mb-4">направления групп</div>
              <h2 className="font-display text-4xl lg:text-5xl font-light" style={{ color: "var(--text-main)" }}>
                Найдите своё
              </h2>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DIRECTIONS.map((dir, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="card-warm group cursor-pointer">
                  <div className="text-3xl mb-4">{dir.emoji}</div>
                  <h3 className="font-display text-xl font-medium mb-2" style={{ color: "var(--text-main)" }}>
                    {dir.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {dir.desc}
                  </p>
                  <div
                    className="mt-4 flex items-center gap-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--olive)" }}
                  >
                    <span>Подробнее</span>
                    <Icon name="ArrowRight" size={14} />
                  </div>
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
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-14">
              <div className="section-tag mb-4">отзывы</div>
              <h2 className="font-display text-4xl lg:text-5xl font-light" style={{ color: "var(--text-main)" }}>
                Те, кто уже попробовал
              </h2>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REVIEWS.map((r, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className={`${r.color} rounded-2xl p-6 h-full flex flex-col`}>
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="font-body text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--text-main)" }}>
                    «{r.text}»
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-display text-lg font-medium"
                      style={{ backgroundColor: "var(--olive)", color: "var(--cream)" }}
                    >
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-body font-medium text-xs" style={{ color: "var(--text-main)" }}>
                        {r.name}
                      </div>
                      <div className="font-body text-xs" style={{ color: "var(--text-muted)" }}>{r.topic}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="section-tag mb-4">стоимость</div>
            <h2 className="font-display text-4xl lg:text-5xl font-light mb-6" style={{ color: "var(--text-main)" }}>
              Понятный и доступный формат
            </h2>
            <div className="font-display text-6xl font-light mb-2" style={{ color: "var(--olive)" }}>
              от 1 500 ₽
            </div>
            <p className="font-body text-base mb-2" style={{ color: "var(--text-muted)" }}>за одну встречу</p>
            <p
              className="font-body text-sm mb-10 max-w-xl mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              Финальная стоимость зависит от направления, формата группы и длительности программы. Уточним индивидуально.
            </p>
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
              Оставьте заявку — мы уточним ваш запрос и предложим подходящий формат
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
                    Актуальный запрос
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none"
                    style={{
                      backgroundColor: "var(--cream)",
                      border: "1px solid var(--beige-dark)",
                      color: formData.topic ? "var(--text-main)" : "var(--text-muted)",
                    }}
                  >
                    <option value="">Выберите направление...</option>
                    <option>Тревожность и стресс</option>
                    <option>Выгорание</option>
                    <option>Отношения</option>
                    <option>Самооценка</option>
                    <option>Карьера и работа</option>
                    <option>Одиночество</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block font-body text-sm font-medium mb-2"
                    style={{ color: "var(--text-main)" }}
                  >
                    Удобный способ связи
                  </label>
                  <div className="flex gap-3">
                    {["telegram", "whatsapp", "phone"].map((method) => (
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
                        {method === "telegram" ? "Telegram" : method === "whatsapp" ? "WhatsApp" : "Звонок"}
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
          <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
            © 2024 · Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}