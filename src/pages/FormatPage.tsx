import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { FadeUp } from "@/components/shared/FadeUp";

const BENEFITS = [
  {
    icon: "MessageCircle",
    title: "Важный вопрос возник сегодня? Не обязательно ждать следующей сессии",
    text: "Если между встречами произошла важная ситуация, появилась новая мысль или вопрос, можно написать своему психологу в личный чат. Специалист отвечает в течение рабочего дня.",
  },
  {
    icon: "NotebookPen",
    title: "Неделя без видеосессии — не неделя без работы",
    text: "Психолог периодически может давать задания, упражнения или вопросы для самостоятельной работы. Вы выполняете их между встречами, можете обсуждать результат в чате и возвращаться к нему на следующей сессии.",
  },
  {
    icon: "UserCheck",
    title: "С вами работает один и тот же психолог",
    text: "Видеосессии и сообщения в чате ведёт один специалист. Ему не нужно каждый раз заново объяснять контекст — работа продолжается с того места, на котором вы остановились.",
  },
];

const WEEKS = [
  { num: "Неделя 1", title: "Индивидуальная видеосессия", text: "Определяем тему и следующие шаги." },
  { num: "Неделя 2", title: "Чат + самостоятельная работа", text: "Вопросы, упражнения, обсуждение возникающих ситуаций." },
  { num: "Неделя 3", title: "Индивидуальная видеосессия", text: "Разбираем произошедшее и корректируем дальнейшую работу." },
  { num: "Неделя 4", title: "Чат + самостоятельная работа", text: "Продолжаем работу между встречами." },
];

export default function FormatPage() {
  return (
    <div className="font-body" style={{ backgroundColor: "var(--cream)" }}>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(250,247,242,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--beige-dark)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-semibold" style={{ color: "var(--olive)" }}>Вместе</span>
            <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>терапия</span>
          </Link>
          <a href="/#form" className="btn-primary text-sm py-2.5 px-5">
            Подобрать психолога
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="section-tag mb-4">как это устроено</div>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="font-display text-4xl lg:text-6xl font-light leading-tight mb-6" style={{ color: "var(--text-main)" }}>
              Психологическая работа продолжается{" "}
              <em className="not-italic" style={{ color: "var(--olive)" }}>не только во время сессии</em>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="font-body text-lg leading-relaxed mb-6" style={{ color: "var(--text-main)" }}>
              Две полноценные индивидуальные встречи в месяц + личный чат с психологом между ними.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <p className="font-body text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
              В классическом формате важную ситуацию иногда приходится держать в голове до следующей встречи. Здесь можно написать психологу тогда, когда вопрос действительно возник, и продолжить работу между сессиями.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {BENEFITS.map((b, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="card-warm p-8 h-full">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(107,122,71,0.12)" }}
                  >
                    <span style={{ color: "var(--olive)" }}>
                      <Icon name={b.icon} size={20} />
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3 leading-snug" style={{ color: "var(--text-main)" }}>
                    {b.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {b.text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* PRICE COMPARISON CARD */}
          <FadeUp delay={300}>
            <div className="card-warm p-8 lg:p-10">
              <h3 className="font-display text-2xl lg:text-3xl font-light mb-8" style={{ color: "var(--text-main)" }}>
                Меньше стоимость — без отказа от индивидуальной работы
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--beige)" }}>
                  <div className="section-tag mb-4">классический формат</div>
                  <p className="font-body text-sm mb-4" style={{ color: "var(--text-main)" }}>
                    4 индивидуальные сессии × 3 000–4 000 ₽
                  </p>
                  <div className="font-display text-2xl lg:text-3xl font-light" style={{ color: "var(--text-muted)" }}>
                    ≈ 12 000–16 000 ₽ <span className="text-base">/ мес</span>
                  </div>
                </div>
                <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--olive)" }}>
                  <div className="section-tag mb-4" style={{ color: "rgba(250,247,242,0.8)" }}>наш формат</div>
                  <ul className="space-y-2 mb-4">
                    {["2 индивидуальные сессии", "личный чат между встречами", "самостоятельная работа по рекомендациям психолога"].map((t, i) => (
                      <li key={i} className="flex items-start gap-2 font-body text-sm" style={{ color: "var(--cream)" }}>
                        <Icon name="Check" size={15} style={{ color: "var(--cream)" }} className="mt-0.5 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="font-display text-2xl lg:text-3xl font-light" style={{ color: "var(--cream)" }}>
                    8 999 ₽ <span className="text-base">/ мес</span>
                  </div>
                </div>
              </div>
              <p className="font-body text-sm leading-relaxed mt-8 max-w-2xl" style={{ color: "var(--text-muted)" }}>
                Вы по-прежнему работаете с психологом индивидуально, но часть взаимодействия переносится между встречами в чат и самостоятельную работу.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* MONTH TIMELINE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <div className="section-tag mb-4">как выглядит месяц</div>
              <h2 className="font-display text-4xl lg:text-5xl font-light" style={{ color: "var(--text-main)" }}>
                Четыре недели работы
              </h2>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WEEKS.map((w, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="relative">
                  <div className="section-tag mb-3">{w.num}</div>
                  <h3 className="font-display text-xl font-medium mb-2 leading-snug" style={{ color: "var(--text-main)" }}>
                    {w.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {w.text}
                  </p>
                  {i < WEEKS.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-1 -right-3 z-10"
                      style={{ color: "var(--olive)", opacity: 0.4 }}
                    >
                      <Icon name="ArrowRight" size={18} />
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={400}>
            <div className="mt-16 rounded-3xl p-8 lg:p-10 text-center max-w-3xl mx-auto" style={{ backgroundColor: "var(--beige)" }}>
              <p className="font-body text-base lg:text-lg leading-relaxed" style={{ color: "var(--text-main)" }}>
                Вы не остаётесь без психологической работы на две недели. Меняется формат взаимодействия: глубокие вопросы разбираются на сессиях, а между ними остаются чат и самостоятельная работа.
              </p>
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
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <h2
              className="font-display text-4xl lg:text-5xl font-light mb-6 leading-tight"
              style={{ color: "var(--cream)" }}
            >
              Попробуйте формат в течение месяца
            </h2>
            <p className="font-body text-lg mb-2" style={{ color: "rgba(250,247,242,0.85)" }}>
              2 индивидуальные сессии + личный чат с психологом между встречами.
            </p>
            <div className="font-display text-4xl font-light mb-10" style={{ color: "var(--cream)" }}>
              8 999 ₽ <span className="text-xl">/ месяц</span>
            </div>
            <a
              href="/#form"
              className="inline-flex items-center gap-2 font-body font-medium px-8 py-4 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--cream)", color: "var(--olive)" }}
            >
              Подобрать психолога
              <Icon name="ArrowRight" size={16} />
            </a>
            <p className="font-body text-sm mt-5" style={{ color: "rgba(250,247,242,0.7)" }}>
              Подбор психолога бесплатно. Если специалист не подошёл, его можно заменить.
            </p>
          </FadeUp>
        </div>
      </section>

      <footer className="py-10 border-t" style={{ borderColor: "var(--beige-dark)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-semibold" style={{ color: "var(--olive)" }}>
              Вместе
            </span>
            <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
              — личный психолог онлайн
            </span>
          </div>
          <Link
            to="/"
            className="font-body text-sm underline underline-offset-2 hover:opacity-70 transition-opacity"
            style={{ color: "var(--text-muted)" }}
          >
            На главную
          </Link>
        </div>
      </footer>
    </div>
  );
}